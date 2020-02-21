import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { User } from './../user';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public currentUser: User;
    private readonly apiUrl = environment.apiUrl;
    private registerUrl = this.apiUrl + '/register';
    private loginUrl = this.apiUrl + '/login';
    private logoutUrl = this.apiUrl + '/logout';
    constructor(private http: HttpClient, private router: Router) { }
    onRegister(user: User): Observable<User> {
        const request = JSON.stringify(
            { name: user.name, email: user.email, password: user.password }
        )
        return this.http.post(this.registerUrl, request, httpOptions)
            .pipe(
                map((response: User) => {
                    const token: string = response['access_token'];
                    if (token) {
                        this.setToken(token);
                        this.getUser().subscribe();
                    }
                    return response;
                }),
                catchError(error => this.handleError(error))
            );
    }
    onLogin(user: User): Observable<User> {
        const request = JSON.stringify(
            { name: user.name, password: user.password }
        );
        return this.http.post(this.loginUrl, request, httpOptions)
            .pipe(
                map((response: User) => {
                    const token: string = response['access_token'];
                    if (token) {
                        this.setToken(token);
                        this.getUser().subscribe();
                    }
                    return response;
                }),
                catchError(error => this.handleError(error))
            );
    }
    onLogout(): Observable<User> {
        return this.http.post(this.logoutUrl, httpOptions)
            .pipe(
                tap(
                    () => {
                        localStorage.removeItem('token');
                        this.router.navigate(['/']);
                    }
                );
            )
    }
    setToken(token: string): void {
        return localStorage.setItem('token', token);
    }
    getToken(): string {
        return localStorage.getItem('token');
    }
}
