import { Component, OnInit} from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { PluginWrapper } from '../models/plugin-wrapper';

@Component({
  selector: 'app-editor-metadata',
  templateUrl: './editor-metadata.component.html',
  styleUrls: ['./editor-metadata.component.scss']
})
export class EditorMetadataComponent implements OnInit {
  
  pluginWrapper: PluginWrapper;

  constructor(private pluginJsonService: PluginJsonService) {}

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);
  }

}
