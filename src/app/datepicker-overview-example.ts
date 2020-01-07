import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  styleUrls: ['datepicker-overview-example.css'],
})
export class DatepickerOverviewExample {

     minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);
    events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */