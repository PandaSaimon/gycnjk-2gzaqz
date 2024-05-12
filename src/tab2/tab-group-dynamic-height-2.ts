import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { GridListOverviewExample } from '../grid1/grid-list-overview-example';
import { TableBasicExample } from '../table/table-basic-example';

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'tab-group-dynamic-height-2',
  templateUrl: 'tab-group-dynamic-height-2.html',
  styleUrl: 'tab-group-dynamic-height-2.css',
  standalone: true,
  imports: [
    MatTabsModule,
    MatButtonModule,
    GridListOverviewExample,
    TableBasicExample,
  ],
})
export class TabGroupDynamicHeight2 {}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
