import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { CharService } from "../../center/_services/char.service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class TrainService {
  private readonly apiUrl = environment.apiUrl + "/character/train";
  private baseTrainUrl = this.apiUrl + "/getBaseTrain";
  private createTrainUrl = this.apiUrl + "/create";
  constructor(private http: HttpClient) {}

  getBaseTrain(id: string): Observable<Object> {
    return this.http.get(this.baseTrainUrl + "/" + id, httpOptions);
  }

  postCharTrain(payload): Observable<Object> {
    const request = JSON.stringify({
      char_id: payload.id,
      char_value: payload.key,
      days: payload.value,
    });
    return this.http.post(this.createTrainUrl, request, httpOptions);
    // .pipe(
    //   map((response: Charbase) => {
    //     const id: number = response["id"];
    //     if (id) {
    //       this.setCharId(id);
    //     }
    //     return response;
    //   }),
    //   catchError((error) => this.handleError(error))
    // );
  }
}
