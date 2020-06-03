import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorPropertiesComponent } from './editor-properties.component';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtKeyValueListModule } from '@dynatrace/barista-components/key-value-list';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtOverlayModule  } from '@dynatrace/barista-components/overlay';



@NgModule({
  providers: [PluginJsonService],
  declarations: [EditorPropertiesComponent],
  imports: [
    CommonModule,
    DtCardModule,
    DtButtonModule,
    DtKeyValueListModule,
    DtIconModule,
    DtOverlayModule 
  ]
})
export class EditorPropertiesModule { }
