import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditorSourceComponent } from './editor-source.component';
import { PluginJsonService } from '../shared/services/plugin-json.service';

import {DtCardModule} from '@dynatrace/barista-components/card';
import {DtButtonModule} from '@dynatrace/barista-components/button';
import {DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import {DtInputModule } from '@dynatrace/barista-components/input';
import {DtInlineEditorModule } from '@dynatrace/barista-components/inline-editor';


@NgModule({
  declarations: [EditorSourceComponent],
  providers: [PluginJsonService],
  imports: [
    CommonModule,
    FormsModule,
    DtCardModule,
    DtButtonModule,
    DtFormFieldModule,
    DtInputModule,
    DtInlineEditorModule
  ],
  exports: [EditorSourceComponent]
})
export class EditorSourceModule { }
