import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../../pages/auth/_services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {

    constructor(
        public auth: AuthService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptor running');
        //checks if header were set and adds them if needed
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        //get the token from auth service
        const authToken = this.auth.getToken();
        if (!authToken) {
            return next.handle(req);
        }
        const authReq = req.clone(
            { headers: req.headers.set('Authorization', `Bearer ${authToken}`) }
        );
        return next.handle(authReq).pipe(
            map((event: HttpEvent<any>) => {
                console.log(event)
                if (event instanceof HttpResponse) {
                    console.log('Tap Function', event);
                }
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    this.router.navigate(['/']);
                }
                return throwError(err);
            })
        );
    }
}
export class HttpInterceptorService {

    constructor() { }
}
