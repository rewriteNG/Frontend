import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
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
  private indexTrainUrl = this.apiUrl + "/index";
  constructor(private http: HttpClient) {}

  getBaseTrain(id: string): Observable<Object> {
    return this.http.get(this.baseTrainUrl + "/" + id, httpOptions);
  }

  getIndexTrain(id: string): Observable<Object> {
    return this.http.get(this.indexTrainUrl + "/" + id, httpOptions);
  }

  postCharTrain(payload): Observable<Object> {
    const request = JSON.stringify({
      char_id: payload.id,
      char_value: payload.key,
      days: payload.value,
    });
    return this.http.post(this.createTrainUrl, request, httpOptions).pipe(
      map((response) => {
        console.log(response);
        return response;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  //TODO move handleerror on one place
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
