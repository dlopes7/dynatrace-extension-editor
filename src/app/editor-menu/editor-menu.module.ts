import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorMenuComponent } from './editor-menu.component';
import {DtMenuModule} from '@dynatrace/barista-components/menu';
import {DtDrawerModule} from '@dynatrace/barista-components/drawer';
import {DtIconModule} from '@dynatrace/barista-components/icon';

@NgModule({
  declarations: [EditorMenuComponent],
  imports: [
    CommonModule,
    DtMenuModule,
    DtDrawerModule,
    DtIconModule,
    RouterModule
  ],
  exports: [EditorMenuComponent]
})
export class EditorMenuModule { }
