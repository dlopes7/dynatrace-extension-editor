import { Component, OnInit } from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { PluginWrapper } from '../models/plugin-wrapper';

@Component({
  selector: 'app-editor-metrics',
  templateUrl: './editor-metrics.component.html',
  styleUrls: ['./editor-metrics.component.scss']
})
export class EditorMetricsComponent implements OnInit {

  pluginWrapper: PluginWrapper;

  constructor(private pluginJsonService: PluginJsonService) { }

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);
  }


}
