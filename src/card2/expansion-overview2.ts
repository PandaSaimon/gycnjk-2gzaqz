import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { TabGroupDynamicHeight2 } from '../tab2/tab-group-dynamic-height-2';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview2',
  templateUrl: 'expansion-overview2.html',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, TabGroupDynamicHeight2, MatCheckboxModule, MatFormFieldModule],
})
export class ExpansionOverview2 {
  panelOpenState = false;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
