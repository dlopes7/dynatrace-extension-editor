import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditorMetadataComponent } from './editor-metadata.component';
import { PluginJsonService } from '../shared/services/plugin-json.service';

import {DtCardModule} from '@dynatrace/barista-components/card';
import {DtButtonModule} from '@dynatrace/barista-components/button';
import {DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import {DtInputModule } from '@dynatrace/barista-components/input';
import {DtInlineEditorModule } from '@dynatrace/barista-components/inline-editor';



@NgModule({
  providers: [PluginJsonService],
  declarations: [EditorMetadataComponent],
  imports: [
    CommonModule,
    FormsModule,
    DtCardModule,
    DtButtonModule,
    DtFormFieldModule,
    DtInputModule,
    DtInlineEditorModule
  ],
  exports: [
    EditorMetadataComponent
  ]
})
export class EditorMetadataModule { }
