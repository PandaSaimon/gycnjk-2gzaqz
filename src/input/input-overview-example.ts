import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrl: 'input-overview-example.css',
  templateUrl: 'input-overview-example.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
})
export class InputOverviewExample {}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
