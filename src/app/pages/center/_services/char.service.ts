import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class CharService {
  private readonly apiUrl = environment.apiUrl + "/character";
  private indexUrl = this.apiUrl + "/index";
  constructor(private http: HttpClient) {}

  onCharOverView() {
    return this.http.get(this.indexUrl, httpOptions).pipe(
      tap(resp => {
        console.log(resp);
      })
    );
  }
}
