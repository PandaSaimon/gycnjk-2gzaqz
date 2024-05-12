import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DividerOverviewExample } from '../resultList/divider-overview-example';
/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list-overview2',
  styleUrl: 'grid-list-overview2.css',
  templateUrl: 'grid-list-overview2.html',
  standalone: true,
  imports: [MatGridListModule, DividerOverviewExample],
})
export class GridListOverview2 {}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
