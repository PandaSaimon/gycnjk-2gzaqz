import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { TabGroupDynamicHeightExample } from '../example2/tab-group-dynamic-height-example';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, TabGroupDynamicHeightExample],
})
export class ExpansionOverviewExample {
  panelOpenState = false;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
