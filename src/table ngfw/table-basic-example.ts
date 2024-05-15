import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Параметр 1',
    weight: 'Значение 1',
    symbol: 'Формула 1',
  },
  {
    position: 2,
    name: 'Параметр 2',
    weight: 'Значение 2',
    symbol: 'Формула 2',
  },
  {
    position: 3,
    name: 'Параметр 3',
    weight: 'Значение 3',
    symbol: 'Формула 3',
  },
  {
    position: 4,
    name: 'Параметр 4',
    weight: 'Значение 4',
    symbol: 'Формула 4',
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
})
export class TableBasicExample {
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  visible = false;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
