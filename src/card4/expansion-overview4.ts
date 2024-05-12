import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TabGroupDynamicHeight2 } from '../tab2/tab-group-dynamic-height-2';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview4',
  templateUrl: 'expansion-overview4.html',
  standalone: true,
  imports: [MatExpansionModule, TabGroupDynamicHeight2],
})
export class ExpansionOverview4 {
  panelOpenState = false;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
