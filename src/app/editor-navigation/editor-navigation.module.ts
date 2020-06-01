import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorNavigationComponent } from './editor-navigation.component';
import {DtSecondaryNavModule} from '@dynatrace/barista-components/secondary-nav';



@NgModule({
  declarations: [EditorNavigationComponent],
  imports: [
    CommonModule,
    DtSecondaryNavModule,
    RouterModule
  ],
  exports: [
    EditorNavigationComponent
  ]
})
export class EditorNavigationModule { }
