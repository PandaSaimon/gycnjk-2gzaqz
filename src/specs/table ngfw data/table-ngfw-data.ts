import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  position: number;
  articul: string;
  description: string;
  count: number;
  price: number;
  nds: number;
  amount: number;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    articul: 'Параметр 1',
    description: 'Описание 1',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00
  },
  {
    position: 2,
    articul: 'Параметр 2',
    description: 'Описание 2',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
  },
  {
    position: 3,
    articul: 'PT-MPSIEM-REP-AGT250-PTNGFWIPS1050',
    description: 'Программное обеспечение Positive Technologies Next Generation Firewall. Пакет расширений с конфигурации PT-MPSIEM-AGT-250 (Компонент MaxPatrol SIEM Agent, активный сбор не более чем с 250 узлов, прием не более 250 событий в секунду) до конфигурации PT-NGFW-IPS-1050 (Лицензия на получение сигнатур IPS для шлюза безопасности GW-1050), обновления в течение 1 (одного) года',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
  },
  {
    position: 4,
    articul: 'Параметр 4',
    description: 'Описание 4',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-ngfw-data',
  styleUrl: 'table-ngfw-data.css',
  templateUrl: 'table-ngfw-data.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule],
})
export class TableNgfwData { 
  displayedColumns: string[] = ['position', 'articul', 'count', 'price', 'nds', 'amount', 'delete'];
  expandedElement: PeriodicElement | null;
  dataSource = ELEMENT_DATA;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
