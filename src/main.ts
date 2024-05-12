import '@angular/localize/init';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import {
  VERSION as MAT_VERSION,
  MatNativeDateModule,
} from '@angular/material/core';
import { StepperLazyContentExample } from './example/stepper-lazy-content-example';
import { TabGroupDynamicHeightExample } from './example2/tab-group-dynamic-height-example';
import { ExpansionOverviewExample } from './card1/expansion-overview-example';
import { TabGroupDynamicHeight2 } from './tab2/tab-group-dynamic-height-2';
import { ExpansionOverview2 } from './card2/expansion-overview2';
import { GridListOverviewExample } from './grid1/grid-list-overview-example';
import { InputOverviewExample } from './input/input-overview-example';
import { DividerOverviewExample } from './resultList/divider-overview-example';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(StepperLazyContentExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));

bootstrapApplication(TabGroupDynamicHeightExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));

bootstrapApplication(ExpansionOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));

bootstrapApplication(TabGroupDynamicHeight2, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));

bootstrapApplication(ExpansionOverview2, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));

bootstrapApplication(GridListOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));

bootstrapApplication(InputOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));

bootstrapApplication(DividerOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));
