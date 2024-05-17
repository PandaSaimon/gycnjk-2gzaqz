import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Catalog } from '../catalog/catalog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {
  MatDialog
} from '@angular/material/dialog';

export interface PeriodicElement {
  position: number;
  articul: string;
  description: string;
  count: number;
  price: number;
  nds: number;
  amount: number;
  rep: string;
  lessMonth: number;
  indefinitely: boolean;
  support: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    articul: 'Параметр 1',
    description: 'Описание 1',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
    rep: '',
    lessMonth: 0,
    indefinitely: false,
    support: "STANDART",
  },
  {
    position: 2,
    articul: 'Параметр 2',
    description: 'Описание 2',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
    rep: '',
    lessMonth: 0,
    indefinitely: false,
    support: "STANDART",
  },
  {
    position: 3,
    articul: 'PT-MPSIEM-REP-AGT250-PTNGFWIPS1050',
    description: 'Программное обеспечение Positive Technologies Next Generation Firewall. Пакет расширений с конфигурации PT-MPSIEM-AGT-250 (Компонент MaxPatrol SIEM Agent, активный сбор не более чем с 250 узлов, прием не более 250 событий в секунду) до конфигурации PT-NGFW-IPS-1050 (Лицензия на получение сигнатур IPS для шлюза безопасности GW-1050), обновления в течение 1 (одного) года',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
    rep: 'PT-NGFW-IPS-1050',
    lessMonth: 6,
    indefinitely: false,
    support: "STANDART",
  },
  {
    position: 4,
    articul: 'Параметр 4',
    description: 'Описание 4',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
    rep: '',
    lessMonth: 0,
    indefinitely: false,
    support: "STANDART",
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [CurrencyPipe, MatTableModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, Catalog, MatCheckboxModule],
})
export class TableBasicExample {

  constructor(public dialog: MatDialog) {}
  animal: string;
  name: string;

  displayedColumns: string[] = ['position', 'articul', 'count', 'price', 'nds', 'amount', 'rep', 'lessMonth', 'indefinitely', 'support', 'delete'];
  expandedElement: PeriodicElement | null;
  dataSource = ELEMENT_DATA;
  /** Gets the total cost of all transactions. */
  
  getTotalCount() {
    return this.dataSource.length;
  }

  getTotalCost() {
    return this.dataSource.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Catalog, {
      data: {name: this.name, animal: this.animal},
      maxWidth: "100%",
      width: "90%",
      maxHeight: "100%",
      height: "90%"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
