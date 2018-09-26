import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadPlaceClass } from '../../state/place.actions';
import { Place } from '../../../models/place';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-placelist-container',
  templateUrl: './placelist-container.component.html',
  styleUrls: ['./placelist-container.component.css']
})
export class PlacelistContainerComponent implements OnInit {

  private places$: Observable<Place[]>;
  private errors$: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadPlaceClass());
    this.places$ = this.store.pipe(select('placesStore')) ;
    // console.log("Observable places$",this.places$.pipe(
    //   tap(places => {places})
    // ));
  }

}
