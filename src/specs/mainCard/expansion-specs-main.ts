import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-specs-main',
  templateUrl: 'expansion-specs-main.html',
  styleUrl: 'expansion-specs-main.css', 
  standalone: true,
  imports: [MatExpansionModule, MatSelectModule, MatInputModule, MatButtonModule],
})
export class ExpansionSpecMain {}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
