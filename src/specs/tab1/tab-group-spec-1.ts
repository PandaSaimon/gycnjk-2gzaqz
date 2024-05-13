import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { TableBasicExample } from '../table/table-basic-example';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'tab-group-spec-1',
  templateUrl: 'tab-group-spec-1.html',
  styleUrl: 'tab-group-spec-1.css',
  standalone: true,
  imports: [
    MatTabsModule,
    MatButtonModule,
    TableBasicExample,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
  ],
}) 
export class TabGroupDynamicHeightExample {}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
