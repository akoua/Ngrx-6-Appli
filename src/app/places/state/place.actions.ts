import { Action } from "@ngrx/store";
import { Place } from "../../models/place";

export enum PlacesActionEnum {
    LoadPlaces= "[Places] Load",
    LoadPlacesSuccess= "[Places] Load Success",
    LoadPlacesFailure= "[Places] Load Failure",
    CreatePlace = "[Places] Create Place",
    CreatePlaceSuccess = "[Place] Create Place Success",
    CreatePlaceFail = "[Place] Create Place Fail"
}

export type PlaceType =  LoadPlaceClass | LoadPlaceSuccessClass | LoadPlaceFailureClass | CreatePlaceClass
                        | CreatePlaceSuccessClass | CreatePlaceFailClass ;

//Action class

export class LoadPlaceClass implements Action {
    type= PlacesActionEnum.LoadPlaces;
    constructor(public payload:any = null) {}
}

export class LoadPlaceSuccessClass implements Action {
    type= PlacesActionEnum.LoadPlacesSuccess;
    constructor(public payload: Place[]) {}
}

export class LoadPlaceFailureClass implements Action {
    type= PlacesActionEnum.LoadPlacesFailure;
    constructor(public payload:string) {}
}

export class CreatePlaceClass implements Action {
    type= PlacesActionEnum.CreatePlace;
    constructor(public payload:Place) {}
}

export class CreatePlaceSuccessClass implements Action {
    type= PlacesActionEnum.CreatePlaceSuccess;
    constructor(public payload:Place) {}
}

export class CreatePlaceFailClass implements Action {
    type= PlacesActionEnum.CreatePlaceFail;
    constructor(public payload:string) {}
}
