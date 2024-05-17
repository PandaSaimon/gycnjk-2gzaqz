import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { TableNgfwData } from '../table ngfw data/table-ngfw-data';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  position: number;
  articul: string;
  description: string;
  count: number;
  price: number;
  nds: number;
  amount: number;
  failover: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    articul: 'Параметр 1',
    description: "Описание 1",
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
    failover: false
  },
  {
    position: 2,
    articul: 'Параметр 2',
    description: "Описание 2",
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
    failover: false
  },
  {
    position: 3,
    articul: 'PT-MPSIEM-REP-AGT250-PTNGFWIPS1050',
    description: "Описание 3",
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
    failover: false
  },
  {
    position: 4,
    articul: 'Параметр 4',
    description: "Описание 4",
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
    failover: false
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-ngfw',
  styleUrl: 'table-ngfw.css',
  templateUrl: 'table-ngfw.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCheckboxModule, MatExpansionModule, TableNgfwData],
})
export class TableNGFW {
  displayedColumns: string[] = ['position', 'articul', 'count', 'price', 'nds', 'amount', 'failover', 'expand', 'delete'];
  expandedElement: PeriodicElement | null;
  dataSource = ELEMENT_DATA;
  /** Gets the total cost of all transactions. */
  
  getTotalCount() {
    return this.dataSource.length;
  }

  getTotalCost() {
    return this.dataSource.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
