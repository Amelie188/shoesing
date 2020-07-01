import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { Chaussure } from '../models/chaussure';


@Injectable({
  providedIn: 'root'
})
export class ChaussureService {
  myURL = 'http://localhost:3000/chaussure';
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  getAllChaussures(): Observable<Chaussure[]> {
    return this.http.get<Chaussure[]>(this.myURL).pipe(retry(1), catchError(this.handleError));
  };

  getOneChaussure(id: number): Observable<Chaussure> {
    return this.http.get<Chaussure>(this.myURL + '/' + id).pipe(retry(1), catchError(this.handleError));
  };

  addChaussure(chaussure: Chaussure): Observable<Chaussure> {
    return this.http.post<Chaussure>(this.myURL, chaussure, this.httpOptions).pipe(retry(1), catchError(this.handleError)
    );
  };

  editChaussure(chaussure: Chaussure): Observable<Chaussure> {
    return this.http.put<Chaussure>(this.myURL + '/' + chaussure.id, chaussure, this.httpOptions).pipe(retry(1),catchError(this.handleError)
    );
  };

  deleteChaussure(id: number): Observable<Chaussure> {
    return this.http.delete<Chaussure>(this.myURL + '/' + id).pipe(retry(1), catchError(this.handleError)
    );
  };



  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
   } 
  







}
