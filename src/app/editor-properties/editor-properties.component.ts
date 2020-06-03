import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';
import { DtOverlayConfig } from '@dynatrace/barista-components/overlay';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { PluginWrapper } from '../models/plugin-wrapper';

@Component({
  selector: 'app-editor-properties',
  templateUrl: './editor-properties.component.html',
  styleUrls: ['./editor-properties.component.scss']
})
export class EditorPropertiesComponent implements OnInit {

  pluginWrapper: PluginWrapper;

  config: DtOverlayConfig = {
    pinnable: true,
    originY: 'center',
  };


  constructor(private pluginJsonService: PluginJsonService) {
  }

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);
  }



}
