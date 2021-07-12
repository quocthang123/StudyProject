import { Component, OnInit } from '@angular/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-user-assignment',
  templateUrl: './user-assignment.component.html',
  styleUrls: ['./user-assignment.component.scss'],
  providers: [
   
  ],
})
export class UserAssignmentComponent implements OnInit {

  constructor() {

   }
   requestDateFrom: any;
   requestDateTo: any;
  today = new Date();
  

  ngOnInit(): void {

    this.requestDateFrom = new Date();
    this.requestDateTo = new Date();
   
  }

}

