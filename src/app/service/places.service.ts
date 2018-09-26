import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place';
import { tap } from "rxjs/operators";

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
      } )
    )
  }
}
