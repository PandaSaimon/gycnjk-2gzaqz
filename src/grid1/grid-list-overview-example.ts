import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { InputOverviewExample } from '../input/input-overview-example';
import { DividerOverviewExample } from '../resultList/divider-overview-example';
/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list-overview-example',
  styleUrl: 'grid-list-overview-example.css',
  templateUrl: 'grid-list-overview-example.html',
  standalone: true,
  imports: [MatGridListModule, InputOverviewExample, DividerOverviewExample],
})
export class GridListOverviewExample {}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
