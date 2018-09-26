import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Place } from "../../models/place";

export const PlaceCreatorSelector = createFeatureSelector<Place>('placesStore');

//les selectors maintenant
export const PlacesSelector = createSelector(PlaceCreatorSelector, data => data.placeName);