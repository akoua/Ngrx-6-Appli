import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { StoreModule } from '@ngrx/store';
import { PlacesAddComponent } from './components/places-add/places-add.component';
import { PlaceaddContainerComponent } from './containers/placeadd-container/placeadd-container.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('places', {})
  ],
  declarations: [PlacesListComponent, PlacesAddComponent, PlaceaddContainerComponent],
  exports: [
    PlacesListComponent,
    PlacesAddComponent 
  ]
})
export class PlacesModule { }
