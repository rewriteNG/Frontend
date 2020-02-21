import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../../pages/auth/_services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {
    constructor(public auth: AuthService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptor running');
        //get the token from auth service
        const authToken = this.auth.getToken();
        if (authToken) {
            const authReq = req.clone(
                { headers: req.headers.set('Authorization', `Bearer ${authToken}`) }
            );
            console.log('interceptor running with new header');
            return next.handle(authReq)
                .pipe(
                    tap((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            console.log('Tap Function', event);
                        }
                    }), (err: any) => {
                        console.log(err);
                        if (err instanceof HttpErrorResponse) {
                            if (err.status === 401) {
                                localStorage.removeItem('token');
                                this.router.navigate(['/']);
                            }
                        } else {
                            console.log('interceptor without changes');
                            return next.handle(req);
                        }
                    }
                )
        }
    }
}
export class HttpInterceptorService {

    constructor() { }
}
