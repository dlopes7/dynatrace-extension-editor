import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { PluginWrapper } from '../models/plugin-wrapper';
import { Metric } from '../models/metric';
import { Observable } from 'rxjs';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-editor-metric-details',
  templateUrl: './editor-metric-details.component.html',
  styleUrls: ['./editor-metric-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorMetricDetailsComponent implements OnInit {

  key: string;
  pluginWrapper: PluginWrapper;
  metric: Metric;
  dialogState: string | null;

  constructor(private route: ActivatedRoute,
              private pluginJsonService: PluginJsonService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => this.key = params.key);
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);

    // TODO - beter way to copy this?
    this.metric = JSON.parse(JSON.stringify(this.pluginWrapper.getMetric(this.key)));
  }


  onSave(): void {

    this.pluginWrapper.addOrUpdateMetric(this.metric);
    this.pluginJsonService.changePluginJson(this.pluginWrapper);

    this.dialogState = 'success';
    setTimeout(() => {
      this.clear();
      this.cd.markForCheck();
    }, 2000);
  }

  clear(): void {
    this.dialogState = null;
  }

  onChange(event) {
      this.dialogState = 'dirty';
  }

  removeDimension(dimensionName) {

    this.metric.dimensions = this.metric.dimensions.filter((dimension) => {
      return dimension !== dimensionName;
    });
    this.onChange(dimensionName);
  }

  addDimension(dimensionName) {
    this.metric.dimensions.push(dimensionName);
    this.onChange(dimensionName);
  }

  removeState(stateName) {
    this.metric.states = this.metric.states.filter((state) => {
      return state !== stateName;
    });
    this.onChange(stateName);
  }

  addState(stateName) {
    this.metric.states.push(stateName);
    this.onChange(stateName);
  }

  typeChange(event) {
    this.metric.type = event.value;
    if (this.metric.type === 'timeseries') {
      this.metric.states = null;
    }else {
      this.metric.unit = 'State';
    }
    this.onChange(event);
  }

  changeUnit(event) {
    this.metric.unit = event;
    this.onChange(event);
  }

  entityChange(event) {
    this.metric.entity = event.value;
    this.onChange(event);
  }
}
