import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { GridListOverviewExample } from '../grid1/grid-list-overview-example';
import { TableBasicExample } from '../table/table-basic-example';

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'tab-group-dynamic-height-example',
  templateUrl: 'tab-group-dynamic-height-example.html',
  styleUrl: 'tab-group-dynamic-height-example.css',
  standalone: true,
  imports: [
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    GridListOverviewExample,
    TableBasicExample,
  ],
})
export class TabGroupDynamicHeightExample {}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
