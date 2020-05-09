import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Accountclass } from "../accountclass";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AccountService {
  private readonly apiUrl = environment.apiUrl + "/account";
  constructor(private http: HttpClient) {}

  onGetAccountData() {
    return this.http.get(this.apiUrl, httpOptions).pipe(
      tap((resp: Accountclass) => {
        console.log(resp);
        // this.charBase = resp;
      })
    );
  }
}
