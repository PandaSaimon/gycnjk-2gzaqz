import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { ExpansionOverviewExample } from '../card1/expansion-overview-example';
import { ExpansionOverview2 } from '../card2/expansion-overview2';
import { ExpansionOverview3 } from '../card3/expansion-overview3';
import { ExpansionOverview4 } from '../card4/expansion-overview4';

/**
 * @title Stepper lazy content rendering
 */
@Component({
  selector: 'stepper-lazy-content-example',
  templateUrl: 'stepper-lazy-content-example.html',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    ExpansionOverviewExample,
    ExpansionOverview2,
    ExpansionOverview3,
    ExpansionOverview4,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StepperLazyContentExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
