import { Place } from "../../models/place";
import { PlaceType, PlacesActionEnum } from "./place.actions";

export interface PlaceState {
    places: Place[],
    error: string
}

export const initialState = {
    places: [],
    error: ""
}

export function reducerPlace(state: PlaceState = initialState, action: PlaceType) {
    switch (action.type) {
        case PlacesActionEnum.LoadPlacesSuccess:
            return {
                ...state,
                places: action.payload,
                error: ""
            }
        case PlacesActionEnum.LoadPlacesFailure:
            return {
                ...state,
                places: [],
                error: action.payload
            }
        case PlacesActionEnum.CreatePlaceSuccess:
            return {
                ...state,
                place: [...state.places, action.payload]
            }
        case PlacesActionEnum.CreatePlaceFail:
            return {
                ...state,
                error: action.payload
            };
        default:
            state;
    }
}