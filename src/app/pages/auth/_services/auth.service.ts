import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
import { User } from "./../user";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public currentUser: User;
  private readonly apiUrl = environment.apiUrl;
  private registerUrl = this.apiUrl + "/register";
  private loginUrl = this.apiUrl + "/login";
  private logoutUrl = this.apiUrl + "/logout";
  private userUrl = this.apiUrl + "/me";
  constructor(private http: HttpClient, private router: Router) {}
  /**
   * makes a Call to the Api on route '/register'
   * @param user
   */
  onRegister(user): Observable<User> {
    const request = JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return this.http.post(this.registerUrl, request, httpOptions).pipe(
      map((response: User) => {
        const token: string = response["access_token"];
        if (token) {
          this.setToken(token);
          this.getUser().subscribe();
        }
        return response;
      }),
      catchError((error) => this.handleError(error))
    );
  }
  /**
   * makes a Call to the Api on route '/login'
   * @param user
   */
  onLogin(user: User): Observable<User> {
    const request = JSON.stringify({
      name: user.name,
      password: user.password,
    });
    return this.http.post(this.loginUrl, request, httpOptions).pipe(
      map((response: User) => {
        const token: string = response["access_token"];
        if (token) {
          this.setToken(token);
          this.getUser().subscribe();
        }
        return response;
      }),
      catchError((error) => this.handleError(error))
    );
  }
  /**
   * makes Call to the Api on route '/logout'
   */
  onLogout(): Observable<User> {
    return this.http.get(this.logoutUrl, httpOptions).pipe(
      tap(() => {
        this.removeToken();
        this.router.navigate(["/"]);
      })
    );
  }
  /**
   * sets a token to the localStorage
   * @param token
   */
  setToken(token: string): void {
    return localStorage.setItem("token", token);
  }
  /**
   * retrieves token from localStorage
   */
  getToken(): string {
    return localStorage.getItem("token");
  }
  /**
   * removes token from localStorage
   */
  removeToken(): void {
    localStorage.removeItem("token");
  }
  /**
   * makes Call to the Api on route '/me'  and retrievs CurrentUser Object
   */
  getUser(): Observable<User> {
    return this.http.get(this.userUrl, httpOptions).pipe(
      tap((user: User) => {
        console.log(user);
        this.currentUser = user;
      })
    );
  }
  /**
   * small helper to Check if User is Authenticated, checks for the Token
   */
  isAuthenticated(): boolean {
    const token: string = this.getToken();
    if (token) {
      return true;
    }
    return false;
  }
  /**
   * error Handling client side errors get output in the console, other errors are pushed on
   * @param error
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //A client-side error
      console.error("An error occurred:", error.error.message);
    } else {
      //Backend error.
      return throwError(error);
    }
    //return custom error message
    return throwError("Ops something smells Wrong here; please try later.");
  }
}
