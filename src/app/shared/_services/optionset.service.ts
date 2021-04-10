import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Optionset } from "../_classes/optionset";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};
@Injectable({
  providedIn: "root",
})
export class OptionsetService {
  private readonly apiUrl = environment.apiUrl + "/option/";
  public optionset: Optionset;

  constructor(private http: HttpClient) {}

  getOptionset(category: String): Observable<Optionset> {
    return this.http.get(this.apiUrl + category, httpOptions).pipe(
      tap((resp: Optionset) => {
        console.log(resp);
        this.optionset = resp;
      })
    );
  }
}
