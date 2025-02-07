import { Renderer2 } from '@angular/core';

export const loadScript = (url: string, document: Document, renderer: Renderer2, id: string) => {
    if (!document.getElementById(id)) {
      const script = renderer.createElement('script') as HTMLScriptElement;
      script.setAttribute('id', id);
      script.type = 'text/javascript';
      script.src = url;
      script.async = true;
      script.defer = true;
      renderer.appendChild(document.body, script);
    }
  };