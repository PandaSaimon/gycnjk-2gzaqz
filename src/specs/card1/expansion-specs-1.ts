import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { TabGroupDynamicHeightExample } from '../tab1/tab-group-spec-1';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-specs-1',
  templateUrl: 'expansion-specs-1.html',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, TabGroupDynamicHeightExample],
})
export class ExpansionSpec1 {
  panelOpenState = false;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
