import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Charbase } from "../charbase";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class CharService {
  public charBase: Charbase;
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

  onGetCharBase(): Observable<Charbase> {
    let id = this.getCharId();
    return this.http.get(this.charBaseUrl + "/" + id, httpOptions).pipe(
      tap((resp: Charbase) => {
        console.log(resp);
        this.charBase = resp;
      })
    );
  }

  setCharId(id: number) {
    return localStorage.setItem("char_id", id.toString());
  }

  getCharId(): string {
    return localStorage.getItem("char_id");
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
}
