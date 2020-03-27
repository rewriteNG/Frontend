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
  private charBaseUrl = this.apiUrl + "/charbase";
  constructor(private http: HttpClient) {}

  onCharOverView() {
    return this.http.get(this.indexUrl, httpOptions).pipe(
      tap(resp => {
        console.log(resp);
      })
    );
  }

  onGetCharBase() {
    let id = this.getCharId();
    return this.http.get(this.charBaseUrl + "/" + id, httpOptions).pipe(
      tap(resp => {
        console.log(resp);
      })
    );
  }

  setCharId(id: number) {
    return localStorage.setItem("char_id", id.toString());
  }

  getCharId(): string {
    return localStorage.getItem("char_id");
  }
}
