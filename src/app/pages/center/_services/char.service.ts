import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Charbase } from "../charbase";
import { Observable } from "rxjs";
import { Charvalue } from "../charvalue";
import { Characters } from "../characters";

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
  private charBaseUrl = this.apiUrl + "/charbase";
  private charValueUrl = this.apiUrl + "/charvalue";

  constructor(private http: HttpClient) {}

  onCharOverView(): Observable<Characters> {
    return this.http.get(this.indexUrl, httpOptions).pipe(
      tap((resp: Characters) => {
        console.log(resp);
        this.charJson = resp;
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

  onGetCharValue(): Observable<Charvalue> {
    let id = this.getCharId();
    return this.http.get(this.charValueUrl + "/" + id, httpOptions).pipe(
      tap((resp: Charvalue) => {
        console.log(resp);
        this.charValue = resp;
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
