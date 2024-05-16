import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExpansionOverviewExample } from '../card1/expansion-overview-example';
import { ExpansionOverview2 } from '../card2/expansion-overview2';
import { ExpansionOverview3 } from '../card3/expansion-overview3';
import { ExpansionOverview4 } from '../card4/expansion-overview4';
import { ExpansionSpec0 } from '../specs/card default/expansion-specs-0';
import { ExpansionSpec1 } from '../specs/card1/expansion-specs-1';
import { ExpansionSpec2 } from '../specs/card2/expansion-spec-2';
import { ExpansionSpecMain } from '../specs/mainCard/expansion-specs-main';
import { MatCardModule } from '@angular/material/card';
import { TableAnkets } from '../ankets/table/table-anket';
import { MatExpansionModule } from '@angular/material/expansion';

/**
 * @title Stepper lazy content rendering
 */
@Component({
  selector: 'stepper-lazy-content-example',
  templateUrl: 'stepper-lazy-content-example.html',
  styleUrl: 'stepper-lazy-content-example.css',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    ExpansionOverviewExample,
    ExpansionOverview2,
    ExpansionOverview3,
    ExpansionOverview4,
    FormsModule,
    ReactiveFormsModule,
    ExpansionSpec0,
    ExpansionSpec1,
    ExpansionSpec2,
    ExpansionSpecMain,
    MatCardModule,
    TableAnkets,
    MatExpansionModule,
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
