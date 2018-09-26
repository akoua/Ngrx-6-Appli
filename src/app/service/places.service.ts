import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Place } from '../models/place';
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private placesUrl = "http://localhost:4201/api/v1/places"; 
  constructor(private http: HttpClient) { }

  getPlaces():Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl).pipe(
      tap(places => {
        console.log(places);
      } ),
      catchError(this.handleError)
    )
  }

  createPlace(place: Place):Observable<Place> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Place>(this.placesUrl, place).pipe(
      tap(place => {
        console.log(place);
      }),
      catchError(this.handleError)
    )
  }
  handleError(err): Observable<never> {
    return throwError(err.console.error());
  }
}
