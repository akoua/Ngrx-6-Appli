import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Place } from '../../../models/place';

@Component({
  selector: 'app-places-add',
  templateUrl: './places-add.component.html',
  styleUrls: ['./places-add.component.css']
})
export class PlacesAddComponent implements OnInit {

  placeAddForm: FormGroup;
  @Output() create = new EventEmitter<Place>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.placeAddForm = this.fb.group({
      placeName: ['', Validators.required],
      placeStreet: '',
      placeTown: ['', [Validators.required]],
      placeZip: ''
    });
  }

  enregistrerRestaurant(form: FormGroup) {

    if (form.valid) {
      //console.log("Place add", form.value);
      const place = { ...form.value, id: this.generateUUID() }
      console.log(place);
      this.create.emit(place);
      form.reset();
    }    
  }

  generateUUID() {
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  getFontSize() {
    return Math.max(50, this.placeAddForm.value.fontSize);
  }

}
