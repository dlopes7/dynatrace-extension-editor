import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorTopBarComponent } from './editor-top-bar.component';

import {DtTopBarNavigationModule} from '@dynatrace/barista-components/top-bar-navigation';
import { DtIconModule } from '@dynatrace/barista-components/icon';



@NgModule({
  declarations: [EditorTopBarComponent],
  imports: [
    CommonModule,
    DtTopBarNavigationModule,
    DtIconModule
  ],
  exports: [
    EditorTopBarComponent
  ]
})
export class EditorTopBarModule { }
