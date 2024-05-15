import { Component, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

export interface Parameter {
  id: number;
  key: string;
  value: string;
  platform: Platform|null;
}

export interface Platform {
  parameters: Parameter[]|null;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-params',
  styleUrl: 'table-params.css',
  templateUrl: 'table-params.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatExpansionModule],
})
export class TableParams {
  displayedColumns: string[] = ['select', 'key', 'value', 'expand'];
  @Input() dataSource: Parameter[];
  selection = new SelectionModel<Parameter>(true, []);
  expandedElement: Parameter | null;

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
  checkboxLabel(row?: Parameter): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
