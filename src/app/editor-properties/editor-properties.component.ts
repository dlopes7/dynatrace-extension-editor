import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';
import { DtOverlayConfig } from '@dynatrace/barista-components/overlay';
import { PluginJsonService } from '../shared/services/plugin-json.service';

@Component({
  selector: 'app-editor-properties',
  templateUrl: './editor-properties.component.html',
  styleUrls: ['./editor-properties.component.scss']
})
export class EditorPropertiesComponent implements OnInit {

  pluginJson: any;
  properties: Property[] = [];


  config: DtOverlayConfig = {
    pinnable: true,
    originY: 'center',
  };


  constructor(private pluginJsonService: PluginJsonService) {
  }

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginJson => this.pluginJson = pluginJson);
    this.createProperties();
  }

  createProperties() {
    this.pluginJson.properties.forEach(pluginProperty => {
      let property = new Property();

      property.key = pluginProperty.key;
      property.type = pluginProperty.type;

      if (this.pluginJson.configUI.properties != undefined) {
        this.pluginJson.configUI.properties.forEach(configUIProperty => {
          if (property.key == configUIProperty.key) {
            property.displayName = configUIProperty.displayName;
            property.displayHint = configUIProperty.displayHint;
            property.displayOrder = configUIProperty.displayOrder;
          }
        });
      }

      this.properties.push(property);

    });
  }

}
