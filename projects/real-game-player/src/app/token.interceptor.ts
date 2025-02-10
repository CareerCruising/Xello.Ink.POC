import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { environment } from "../environments/environment";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const requiresAuthentication = !req.url.includes(environment.CDN_ABSOLUTE_URL);

    const authToken = localStorage.getItem('token') || '';
    if (!authToken && requiresAuthentication) {
        return next(req);
    }

    if (requiresAuthentication) {
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
    
        return next(authReq).pipe(tap((event: any) => {
            if (event.status === 401) {
                localStorage.removeItem('token');
            }
        }));    
    }

    return next(req);
}
