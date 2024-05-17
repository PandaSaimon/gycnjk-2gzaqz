import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface PeriodicElement {
  id: number;
  articul: string;
  description: string;
  count: number;
  price: number;
  nds: number;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    articul: 'Параметр 1',
    description: 'Описание 1',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
  },
  {
    id: 2,
    articul: 'Параметр 2',
    description: 'Описание 2',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
  },
  {
    id: 3,
    articul: 'PT-MPSIEM-REP-AGT250-PTNGFWIPS1050',
    description: 'Программное обеспечение Positive Technologies Next Generation Firewall. Пакет расширений с конфигурации PT-MPSIEM-AGT-250 (Компонент MaxPatrol SIEM Agent, активный сбор не более чем с 250 узлов, прием не более 250 событий в секунду) до конфигурации PT-NGFW-IPS-1050 (Лицензия на получение сигнатур IPS для шлюза безопасности GW-1050), обновления в течение 1 (одного) года',
    count: 1,
    price: 100000.00,
    nds: 0.00,
    amount: 100000.00,
  },
  {
    id: 4,
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
  selector: 'catalog-table',
  styleUrl: 'catalog-table.css',
  templateUrl: 'catalog-table.html',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCheckboxModule],
})
export class CatalogTable {
  displayedColumns: string[] = ['select', 'id', 'articul', 'description', 'price', 'nds', 'amount'];
  expandedElement: PeriodicElement | null;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  /** Gets the total cost of all transactions. */
  
  getTotalCount() {
    return this.selection.selected.length;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource._filterData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
