import { Component, OnInit } from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { DtOverlayConfig } from "@dynatrace/barista-components/overlay";
import { Metric } from "../models/metric";
import { PluginWrapper } from '../models/plugin-wrapper';

@Component({
  selector: 'app-editor-metrics',
  templateUrl: './editor-metrics.component.html',
  styleUrls: ['./editor-metrics.component.scss']
})
export class EditorMetricsComponent implements OnInit {

  pluginWrapper: PluginWrapper;

  config: DtOverlayConfig = {
    pinnable: true,
    originY: 'center',
  };

  constructor(private pluginJsonService: PluginJsonService) { }

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);
  }


}
