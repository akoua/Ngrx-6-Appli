import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../../models/place';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  @Input() places: Place[];

  constructor(  ) { }

  ngOnInit() {  
    console.log("places ", this.places) ;
  }

}
