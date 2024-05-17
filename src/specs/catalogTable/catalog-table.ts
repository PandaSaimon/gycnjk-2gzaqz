import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

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
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'catalog-table',
  styleUrl: 'catalog-table.css',
  templateUrl: 'catalog-table.html',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule],
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'articul', 'count', 'price', 'nds', 'amount', 'rep', 'lessMonth', 'delete'];
  expandedElement: PeriodicElement | null;
  dataSource = ELEMENT_DATA;
  /** Gets the total cost of all transactions. */
  
  getTotalCount() {
    return this.dataSource.length;
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */