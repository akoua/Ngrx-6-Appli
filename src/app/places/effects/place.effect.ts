
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Place } from "../../models/place";
import * as placeActions from "../state/place.actions";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { PlacesService } from "../../service/places.service";
import { mergeMap, map, catchError } from "rxjs/operators";

@Injectable()
export class PlaceEffect {
    constructor(private action$: Actions, private servicePlace: PlacesService){}

    @Effect()
    placesAction$: Observable<Action> = this.action$.pipe(
        ofType(placeActions.PlacesActionEnum.LoadPlaces),
        mergeMap(action => {
            return this.servicePlace.getPlaces().pipe(
                map(place => {
                    console.log("action in @Effect()", place);
                    return new placeActions.LoadPlaceSuccessClass(place);
                },
                catchError(error => of(new placeActions.LoadPlaceFailureClass(error)) )
        )
            )
        }            
        )
    );

    @Effect()
    createPlace$: Observable<Action> = this.action$.pipe(
        ofType(placeActions.PlacesActionEnum.CreatePlace),
        map((action: placeActions.CreatePlaceClass) => action.payload),
        mergeMap((place: Place) => {
            return this.servicePlace.createPlace(place).pipe(
                map(createPlac => (new placeActions.CreatePlaceSuccessClass(createPlac))),
                map(() => (new placeActions.LoadPlaceClass()), //nous permet de faire le refresh
                catchError(error => of(new placeActions.CreatePlaceFailClass(error)))
            )
        })
    );
}