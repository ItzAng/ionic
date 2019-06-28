import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci :Date = new Date();
  customPickerOption ;
  customDate:Date;
  constructor() { }

  ngOnInit() {
    this.customPickerOption = {
      buttons: [{
        text: 'Save',
        handler: (event) => {console.log(event);
          new Date();
        }
      }, {
        text: 'Log',
        handler: (event) => {
          console.log('Clicked Log. Do not Dismiss.');
          console.log(event)
          return false;
        }
      }]
    }
  }
  cambioFecha(event :any){
    console.log(event);
  }

}
