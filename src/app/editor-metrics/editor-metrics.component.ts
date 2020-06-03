import { Component, OnInit } from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { DtOverlayConfig } from "@dynatrace/barista-components/overlay";

@Component({
  selector: 'app-editor-metrics',
  templateUrl: './editor-metrics.component.html',
  styleUrls: ['./editor-metrics.component.scss']
})
export class EditorMetricsComponent implements OnInit {

  pluginJson: any;

  config: DtOverlayConfig = {
    pinnable: true,
    originY: 'center',
  };

  constructor(private pluginJsonService: PluginJsonService) { }

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginJson => this.pluginJson = pluginJson);
    this.checkMetrics();
  }

  checkMetrics() {
    this.pluginJson.metrics.some(metric => {
      metric.inCharts = 0;
      metric.keyMetric = false;

      if (this.pluginJson.ui == undefined || this.pluginJson.ui.keycharts == undefined && this.pluginJson.ui.charts == undefined) {
        return
      }

      else {
      this.pluginJson.ui.charts.some(chart => {
        chart.series.some(serie => {
          if (serie.key == metric.timeseries.key) {
            metric.inCharts += 1;
          }
        });
      });

      this.pluginJson.ui.keycharts.some(chart => {
        chart.series.some(serie => {
          if (serie.key == metric.timeseries.key) {
            metric.inCharts += 1;
          }
        });
      });

      if (this.pluginJson.ui.keymetrics != undefined) {
        this.pluginJson.ui.keymetrics.some(keymetric => {
          if (keymetric.key == metric.timeseries.key) {
            metric.keyMetric = true;
          }
        });
      }
    }
    });
  }

}
