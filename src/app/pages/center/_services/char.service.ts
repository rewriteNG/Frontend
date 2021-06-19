import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Charbase } from "../charbase";
import { Charvalue } from "../charvalue";
import { Characters } from "../characters";
import { Router } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class CharService {
  public charBase: Charbase;
  public charValue: Charvalue;
  public charJson: Characters;
  private readonly apiUrl = environment.apiUrl + "/character";
  private indexUrl = this.apiUrl + "/index";
  private createChar = this.apiUrl + "/create";
  private charBaseUrl = this.apiUrl + "/charbase";
  private charValueUrl = this.apiUrl + "/charvalue";
  private charDelete = this.apiUrl + "/delete";

  constructor(private http: HttpClient, private router: Router) {}

  onCharOverView(): Observable<Characters> {
    return this.http.get(this.indexUrl, httpOptions).pipe(
      tap((resp: Characters) => {
        console.log(resp);
        this.charJson = resp;
      })
    );
  }

  onCreateChar(charForm): Observable<Charbase> {
    const request = JSON.stringify({
      firstname: charForm.firstname,
      surname: charForm.surname,
      gender: charForm.gender,
      home_village: charForm.home_village,
      chakra_color: charForm.chakra_color,
      age: charForm.age,
    });
    return this.http.post(this.createChar, request, httpOptions).pipe(
      map((response: Charbase) => {
        const id: number = response["id"];
        if (id) {
          this.setCharId(id);
        }
        return response;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  onGetCharBase(): Observable<Charbase> {
    let id = this.getCharId();
    return this.http.get(this.charBaseUrl + "/" + id, httpOptions).pipe(
      tap((resp: Charbase) => {
        console.log(resp);
        this.charBase = resp;
      })
    );
  }

  onGetCharValue(): Observable<Charvalue> {
    let id = this.getCharId();
    return this.http.get(this.charValueUrl + "/" + id, httpOptions).pipe(
      tap((resp: Charvalue) => {
        console.log(resp);
        this.charValue = resp;
      })
    );
  }

  onDeleteChar(): Observable<Characters> {
    let id = this.getCharId();
    return this.http.get(this.charDelete + "/" + id, httpOptions).pipe(
      tap(() => {
        this.remoteCharId();
        this.router.navigate(["/"]);
      })
    );
  }

  setCharJson(charas: JSON) {
    return localStorage.setItem("char_json", JSON.stringify(charas));
  }

  getCharJson(): JSON {
    return JSON.parse(localStorage.getItem("char_json"));
  }

  setCharId(id: number) {
    return localStorage.setItem("char_id", id.toString());
  }

  getCharId(): string {
    return localStorage.getItem("char_id");
  }

  remoteCharId() {
    localStorage.removeItem("char_id");
  }

  /**
   * small helper to check if a character is set active
   */
  isCharChoosen(): boolean {
    const char: string = this.getCharId();
    if (char) {
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
