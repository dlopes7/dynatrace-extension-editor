import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorMetricsComponent } from './editor-metrics.component';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtKeyValueListModule } from '@dynatrace/barista-components/key-value-list';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtOverlayModule  } from '@dynatrace/barista-components/overlay';




@NgModule({
  providers: [PluginJsonService],
  declarations: [EditorMetricsComponent],
  imports: [
    CommonModule,
    RouterModule,
    DtCardModule,
    DtButtonModule,
    DtKeyValueListModule,
    DtIconModule,
    DtOverlayModule 
  ]
})
export class EditorMetricsModule { }
