import { Metric } from './metric';
import { Property } from './property';

export class PluginWrapper {

    pluginJson: any;
    problems: number;
    metrics: Metric[];
    properties: Property[];

    constructor(obj?: any);

    constructor(pluginJson?: any) {
        if (pluginJson !== undefined) {
            this.pluginJson = pluginJson;
            this.problems = 0;
            this.metrics = [];
            this.properties = [];

            this.createMetrics();

            this.problems += this.metrics.filter((metric) => {
                return metric.inCharts === 0 && metric.inKeyCharts === 0;

            }).length;

            this.createProperties();
            this.problems += this.properties.filter((property) => {
                return !property.displayName || !property.displayOrder;

            }).length;
        }

    }

    refresh() {
        this.problems = 0;
        this.problems += this.metrics.filter((metric) => {
            return metric.inCharts === 0 && metric.inKeyCharts === 0;
        }).length;
    }

    createMetrics() {
        this.pluginJson.metrics.forEach(pluginMetric => {
            const metric = new Metric(pluginMetric.timeseries != undefined ? pluginMetric.timeseries.key : pluginMetric.statetimeseries.key);

            metric.entity = pluginMetric.entity != undefined ? pluginMetric.entity : this.pluginJson.entity;
            metric.inCharts = 0;
            metric.inKeyCharts = 0;
            metric.isKeyMetric = false;
            metric.type = pluginMetric.timeseries != undefined ? 'timeseries' : 'statetimeseries';
            metric.displayname = pluginMetric.timeseries != undefined ? pluginMetric.timeseries.displayname : pluginMetric.statetimeseries.displayname;

            if (metric.type === 'timeseries') {
                metric.dimensions = pluginMetric.timeseries.dimensions !== undefined ? pluginMetric.timeseries.dimensions : [];
            } else {
                metric.dimensions = pluginMetric.statetimeseries.dimensions !== undefined ? pluginMetric.statetimeseries.dimensions : [];
                metric.states = pluginMetric.statetimeseries.states !== undefined ? pluginMetric.statetimeseries.states : [];
            }
            metric.unit = metric.type === 'timeseries' ? pluginMetric.timeseries.unit : 'State';

            // If we do not define charts, don't even bother checking
            if (this.pluginJson.ui !== undefined) {

                // Check how many charts
                if (this.pluginJson.ui.charts !== undefined) {
                    this.pluginJson.ui.charts.forEach(chart => {
                        chart.series.forEach(serie => {
                            if (serie.key === metric.key) {
                                metric.inCharts += 1;
                            }
                        });
                    });
                }

                // Check how many keycharts
                if (this.pluginJson.ui.keycharts !== undefined) {
                    this.pluginJson.ui.keycharts.forEach(chart => {
                        chart.series.forEach(serie => {
                            if (serie.key === metric.key) {
                                metric.inKeyCharts += 1;
                            }
                        });
                    });
                }

                // Check if it is a keymetric
                if (this.pluginJson.ui.keymetrics !== undefined) {
                    this.pluginJson.ui.keymetrics.some(keymetric => {
                        if (keymetric.key === metric.key) {
                            metric.isKeyMetric = true;
                        }
                    });
                }
            }

            this.metrics.push(metric);
        });
    }

    createProperties() {
        this.pluginJson.properties.forEach(pluginProperty => {
          const property = new Property();

          property.key = pluginProperty.key;
          property.type = pluginProperty.type;

          if (this.pluginJson.configUI.properties !== undefined) {
            this.pluginJson.configUI.properties.forEach(configUIProperty => {
              if (property.key === configUIProperty.key) {
                property.displayName = configUIProperty.displayName;
                property.displayHint = configUIProperty.displayHint;
                property.displayOrder = configUIProperty.displayOrder;
              }
            });
          }

          this.properties.push(property);

        });
      }


      getMetric(key: string): Metric {

        // Can't use forEach because of early exit
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.metrics.length; i++) {
            const metric = this.metrics[i];
            if (metric.key === key){
                return metric;
            }
        }
        return new Metric(key);
      }


      addOrUpdateMetric(newMetric: Metric) {

        for (let i = 0; i < this.metrics.length; i++) {
            const metric = this.metrics[i];
            if (metric.key === newMetric.key){
                this.metrics[i] = newMetric;
                return;
            }
        }
        this.metrics.push(newMetric);
        this.pluginJson.metrics = this.metrics;
    }

}
