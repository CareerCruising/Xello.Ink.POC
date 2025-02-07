import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem('token') || '';
    if (!authToken) {
        return next(req);
    }

    const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
    });

    return next(authReq).pipe(tap((event: any) => {
        if (event.status === 401) {
            localStorage.removeItem('token');
        }
    }));
}
