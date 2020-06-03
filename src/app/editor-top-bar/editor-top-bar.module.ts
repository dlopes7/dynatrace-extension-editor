import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorTopBarComponent } from './editor-top-bar.component';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import {DtTopBarNavigationModule} from '@dynatrace/barista-components/top-bar-navigation';
import { DtIconModule } from '@dynatrace/barista-components/icon';



@NgModule({
  providers: [PluginJsonService],
  declarations: [EditorTopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    DtTopBarNavigationModule,
    DtIconModule
  ],
  exports: [
    EditorTopBarComponent
  ]
})
export class EditorTopBarModule { }
