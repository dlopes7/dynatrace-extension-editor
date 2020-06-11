import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorMetricDetailsComponent } from './editor-metric-details.component';
import { PluginJsonService } from '../shared/services/plugin-json.service';



@NgModule({
  providers: [PluginJsonService],
  declarations: [EditorMetricDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class EditorMetricDetailsModule { }
