import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { TableBasicExample } from '../table/table-basic-example';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableNGFW } from '../table ngfw/table-ngfw';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';

export interface PeriodicElement {
  articule: string;
  description: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    articule: 'Артикул 1', 
    description: 'Описание 1', 
    amount: 10000
  }
];

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'tab-group-spec-1',
  templateUrl: 'tab-group-spec-1.html',
  styleUrl: 'tab-group-spec-1.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    TableBasicExample,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatButtonToggleModule,
    TableNGFW,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
  ],
}) 
export class TabGroupDynamicHeightExample {
  viewMode?: string = "selection";
  dataSource = ELEMENT_DATA;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
