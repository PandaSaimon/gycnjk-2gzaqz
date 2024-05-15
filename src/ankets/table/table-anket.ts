import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { TableParams } from '../tableParameter/table-params';

export interface Parameter {
  id: number;
  key: string;
  value: string;
  platform: Platform|null;
}

export interface Platform {
  parameters: Parameter[]|null;
}

export interface PeriodicElement {
  name: string;
  id: number;
  version: number;
  product: string;
  parameters: Parameter[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Анкета 1',
    version: 0,
    product: "Sandbox",
    parameters: [
      {
        id: 1,
        key: "Параметр 1",
        value: "Значение 1",
        platform: null
      },
      {
        id: 2,
        key: "Параметр 2",
        value: "Значение 2",
        platform: null
      },
      {
        id: 3,
        key: "Площадка 1",
        value: "",
        platform: {
          parameters: [
            {
              id: 1,
              key: "Параметр 1",
              value: "Значение 1",
              platform: null
            },
            {
              id: 2,
              key: "Параметр 2",
              value: "Значение 2",
              platform: null
            },
          ]
        }
      },
      {
        id: 4,
        key: "Площадка 2",
        value: "",
        platform: {
          parameters: [
            {
              id: 1,
              key: "Параметр 1",
              value: "Значение 1",
              platform: null
            },
            {
              id: 2,
              key: "Параметр 2",
              value: "Значение 2",
              platform: null
            },
          ]
        }
      }
    ],
  },
  {
    id: 2,
    name: 'Анкета 2',
    version: 0,
    product: "NGFW",
    parameters: [
      {
        id: 1,
        key: "Параметр 1",
        value: "Значение 1",
        platform: null
      },
      {
        id: 2,
        key: "Параметр 2",
        value: "Значение 2",
        platform: null
      },
      {
        id: 3,
        key: "Площадка 1",
        value: "",
        platform: {
          parameters: [
            {
              id: 1,
              key: "Параметр 1",
              value: "Значение 1",
              platform: null
            },
            {
              id: 2,
              key: "Параметр 2",
              value: "Значение 2",
              platform: null
            },
          ]
        }
      },
      {
        id: 4,
        key: "Площадка 2",
        value: "",
        platform: {
          parameters: [
            {
              id: 1,
              key: "Параметр 1",
              value: "Значение 1",
              platform: null
            },
            {
              id: 2,
              key: "Параметр 2",
              value: "Значение 2",
              platform: null
            },
          ]
        }
      }
    ]
  },
  {
    id: 3,
    name: 'Анкета 3',
    version: 0,
    product: "SIEM",
    parameters: [
      {
        id: 1,
        key: "Параметр 1",
        value: "Значение 1",
        platform: null
      },
      {
        id: 2,
        key: "Параметр 2",
        value: "Значение 2",
        platform: null
      },
      {
        id: 3,
        key: "Площадка 1",
        value: "",
        platform: {
          parameters: [
            {
              id: 1,
              key: "Параметр 1",
              value: "Значение 1",
              platform: null
            },
            {
              id: 2,
              key: "Параметр 2",
              value: "Значение 2",
              platform: null
            },
          ]
        }
      },
      {
        id: 4,
        key: "Площадка 2",
        value: "",
        platform: {
          parameters: [
            {
              id: 1,
              key: "Параметр 1",
              value: "Значение 1",
              platform: null
            },
            {
              id: 2,
              key: "Параметр 2",
              value: "Значение 2",
              platform: null
            },
          ]
        }
      }
    ]
  },
  {
    id: 4,
    name: 'Анкета 4',
    version: 0,
    product: "VM",
    parameters: [
      {
        id: 1,
        key: "Параметр 1",
        value: "Значение 1",
        platform: null
      },
      {
        id: 2,
        key: "Параметр 2",
        value: "Значение 2",
        platform: null
      },
      {
        id: 3,
        key: "Площадка 1",
        value: "",
        platform: {
          parameters: [
            {
              id: 1,
              key: "Параметр 1",
              value: "Значение 1",
              platform: null
            },
            {
              id: 2,
              key: "Параметр 2",
              value: "Значение 2",
              platform: null
            },
          ]
        }
      },
      {
        id: 4,
        key: "Площадка 2",
        value: "",
        platform: {
          parameters: [
            {
              id: 1,
              key: "Параметр 1",
              value: "Значение 1",
              platform: null
            },
            {
              id: 2,
              key: "Параметр 2",
              value: "Значение 2",
              platform: null
            },
          ]
        }
      }
    ],
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-anket',
  styleUrl: 'table-anket.css',
  templateUrl: 'table-anket.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatExpansionModule, TableParams],
})
export class TableAnkets {
  displayedColumns: string[] = ['select', 'name', 'version', 'product', 'expand'];
  dataSource = ELEMENT_DATA;
  selection = new SelectionModel<PeriodicElement>(true, []);
  expandedElement: PeriodicElement | null;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
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
