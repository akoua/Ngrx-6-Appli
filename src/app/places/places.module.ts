import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { StoreModule } from '@ngrx/store';
import { PlacesAddComponent } from './components/places-add/places-add.component';
import { PlaceaddContainerComponent } from './containers/placeadd-container/placeadd-container.component';
import { EffectsModule } from '@ngrx/effects';
import { PlaceEffect } from './effects/place.effect';
import { reducerPlace } from './state/place.reducer';
import { PlacelistContainerComponent } from './containers/placelist-container/placelist-container.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('placesStore', reducerPlace),
    EffectsModule.forFeature([PlaceEffect]),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [PlacesListComponent, PlacesAddComponent, PlaceaddContainerComponent, PlacelistContainerComponent],
  exports: [
    PlaceaddContainerComponent,
    PlacelistContainerComponent
  ]
})
export class PlacesModule { }
