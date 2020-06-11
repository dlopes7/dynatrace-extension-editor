import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { PluginWrapper } from '../models/plugin-wrapper';
import { Metric } from '../models/metric';

@Component({
  selector: 'app-editor-metric-details',
  templateUrl: './editor-metric-details.component.html',
  styleUrls: ['./editor-metric-details.component.scss']
})
export class EditorMetricDetailsComponent implements OnInit {

  key: string;
  pluginWrapper: PluginWrapper;
  metric: Metric;

  constructor(private route: ActivatedRoute, private pluginJsonService: PluginJsonService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => this.key = params["key"]);
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);
    this.metric = this.pluginWrapper.getMetric(this.key);
  }



}
