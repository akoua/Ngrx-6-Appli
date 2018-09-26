import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../service/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  constructor(private servicePlace: PlacesService) { }

  ngOnInit() {
    this.servicePlace.getPlaces()
      .subscribe(
        places => {
          console.log("depuis placesList ",places);
        }
      );
  }

}
