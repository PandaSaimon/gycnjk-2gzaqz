import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TabGroupDynamicHeight2 } from '../tab2/tab-group-spec-2';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-spec-2',
  templateUrl: 'expansion-spec-2.html',
  standalone: true,
  imports: [MatExpansionModule, TabGroupDynamicHeight2],
})
export class ExpansionSpec2 {
  panelOpenState = false; 
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
