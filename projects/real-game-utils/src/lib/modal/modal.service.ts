import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  EventEmitter,
  Injectable,
  TemplateRef,
  Type,
  createComponent,
} from '@angular/core';
import { BaseModalComponent } from './modal/modal.component';

export interface Options {
  animations?: {
    modal?: {
      enter?: string;
      leave?: string;
    };
    overlay?: {
      enter?: string;
      leave?: string;
    };
  };
  size?: {
    minWidth?: string;
    width?: string;
    maxWidth?: string;
    minHeight?: string;
    height?: string;
    maxHeight?: string;
  };
  data?: any;
}

export interface ModalConfig {
  data?: {
    [key: string]: any;
  };
  modalTitle?: string;
}

export interface ModalRef {
  component: Type<unknown>;
  config?: ModalConfig;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  // Create a reference to our modal component
  newModalComponent?: ComponentRef<BaseModalComponent>;
  // Optional content passed at the creation : animation, size, ...
  options!: Options | undefined;

  onClose$ = new EventEmitter<boolean>();

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector,
  ) {}

  // Function implementation
  open<C>(
    vcrOrComponent: Type<C>,
    param2?: TemplateRef<Element> | Options,
    options?: Options,
  ): C {
    this.options = param2 as Options | undefined;
    return this.openWithComponent<C>(vcrOrComponent);
  }

  private openWithComponent<C>(component: Type<C>) {
    const newComponent = createComponent(component, {
      environmentInjector: this.injector,
    });
    for (let i in this.options?.data) {
      newComponent.setInput(i, this.options?.data?.[i]);
    }
    this.newModalComponent = createComponent(BaseModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [[newComponent.location.nativeElement]],
    });

    document.body.appendChild(this.newModalComponent.location.nativeElement);

    this.appRef.attachView(newComponent.hostView);
    this.appRef.attachView(this.newModalComponent.hostView);
    this.setPageToInert();
    newComponent.changeDetectorRef.detectChanges();

    return newComponent.instance;
  }

  //disalow focus and keypresses on page behind modal
  setPageToInert(): void {
    document.querySelector('main')?.setAttribute('inert', '');
  }

  setPageToNotInert(): void {
    document.querySelector('main')?.removeAttribute('inert');
  }

  close() {
    this.setPageToNotInert();
    this.newModalComponent?.instance.close();
    this.newModalComponent = undefined;
    this.options = undefined;
    this.onClose$.emit(true);
  }
}
