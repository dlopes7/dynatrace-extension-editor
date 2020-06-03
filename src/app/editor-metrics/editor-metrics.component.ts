import { Component, OnInit } from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { DtOverlayConfig } from "@dynatrace/barista-components/overlay";
import { Metric } from "../models/metric";

@Component({
  selector: 'app-editor-metrics',
  templateUrl: './editor-metrics.component.html',
  styleUrls: ['./editor-metrics.component.scss']
})
export class EditorMetricsComponent implements OnInit {

  pluginJson: any;
  metrics: Metric[] = [];

  config: DtOverlayConfig = {
    pinnable: true,
    originY: 'center',
  };

  constructor(private pluginJsonService: PluginJsonService) { }

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginJson => this.pluginJson = pluginJson);
    this.createMetrics();
  }

  createMetrics() {
    this.pluginJson.metrics.forEach(pluginMetric => {
      let metric = new Metric();

      metric.entity = pluginMetric.entity;

      metric.inCharts = 0;
      metric.inKeyCharts = 0;
      metric.isKeyMetric = false;
      metric.type = pluginMetric.timeseries != undefined ? "timeseries" : "statetimeseries";
      metric.displayname = pluginMetric.timeseries != undefined ? pluginMetric.timeseries.displayname : pluginMetric.statetimeseries.displayname;
      metric.key = pluginMetric.timeseries != undefined ? pluginMetric.timeseries.key : pluginMetric.statetimeseries.key;

      if (metric.type == "timeseries") {
        metric.dimensions = pluginMetric.timeseries.dimensions != undefined ? pluginMetric.timeseries.dimensions : [];
      } else {
        metric.dimensions = pluginMetric.statetimeseries.dimensions != undefined ? pluginMetric.statetimeseries.dimensions : [];
      }
      metric.unit = metric.type == "timeseries" ? pluginMetric.timeseries.unit : "State";

      // If we do not define charts, don't even bother checking
      if (this.pluginJson.ui != undefined) {

        // Check how many charts
        if (this.pluginJson.ui.charts != undefined) {
          this.pluginJson.ui.charts.forEach(chart => {
            chart.series.forEach(serie => {
              if (serie.key == metric.key) {
                metric.inCharts += 1;
              }
            });
          });
        }

        // Check how many keycharts
        if (this.pluginJson.ui.keycharts != undefined) {
          this.pluginJson.ui.keycharts.forEach(chart => {
            chart.series.forEach(serie => {
              if (serie.key == metric.key) {
                metric.inKeyCharts += 1;
              }
            });
          });
        }

        // Check if it is a keymetric
        if (this.pluginJson.ui.keymetrics != undefined) {
          this.pluginJson.ui.keymetrics.some(keymetric => {
            if (keymetric.key == metric.key) {
              metric.isKeyMetric = true;
            }
          });
        }
      }

      this.metrics.push(metric);
    });
  }

}
