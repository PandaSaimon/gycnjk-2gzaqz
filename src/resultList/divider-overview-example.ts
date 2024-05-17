import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Basic divider
 */
@Component({
  selector: 'divider-overview-example',
  templateUrl: 'divider-overview-example.html',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatCardModule],
})
export class DividerOverviewExample {}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
