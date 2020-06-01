import { Component, OnInit} from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';

@Component({
  selector: 'app-editor-metadata',
  templateUrl: './editor-metadata.component.html',
  styleUrls: ['./editor-metadata.component.scss']
})
export class EditorMetadataComponent implements OnInit {
  
  pluginJson: any;

  constructor(private pluginJsonService: PluginJsonService) {}

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginJson => this.pluginJson = pluginJson);
  }

}
