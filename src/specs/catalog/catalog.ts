import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Folder } from '../folders/folder';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CatalogTable } from '../catalogTable/catalog-table';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'catalog',
  styleUrl: 'catalog.css',
  templateUrl: 'catalog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonToggleModule,
    Folder,
    MatSidenavModule,
    CatalogTable,
  ],
})
export class Catalog {
  constructor(
    public dialogRef: MatDialogRef<Catalog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  viewMode: string = "full";

  onNoClick(): void {
    this.dialogRef.close();
  }
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */