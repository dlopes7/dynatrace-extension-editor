import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditorMetricDetailsComponent } from './editor-metric-details.component';
import { PluginJsonService } from '../shared/services/plugin-json.service';

import { DtCardModule } from '@dynatrace/barista-components/card'
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtInlineEditorModule } from '@dynatrace/barista-components/inline-editor';
import { DtConfirmationDialogModule } from '@dynatrace/barista-components/confirmation-dialog';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtSelectModule } from '@dynatrace/barista-components/select';
import { DtTagModule } from '@dynatrace/barista-components/tag';
import { DtRadioModule } from '@dynatrace/barista-components/radio';





@NgModule({
  providers: [PluginJsonService],
  declarations: [EditorMetricDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DtInlineEditorModule,
    DtCardModule,
    DtButtonModule,
    DtIconModule,
    DtConfirmationDialogModule,
    DtFormFieldModule,
    DtInputModule,
    DtSelectModule,
    DtTagModule,
    DtRadioModule

  ]
})
export class EditorMetricDetailsModule { }
