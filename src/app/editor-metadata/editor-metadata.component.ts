import { Component, OnInit, Input} from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';

@Component({
  selector: 'app-editor-metadata',
  templateUrl: './editor-metadata.component.html',
  styleUrls: ['./editor-metadata.component.scss']
})
export class EditorMetadataComponent implements OnInit {

  @Input()
  pluginJson: any;

  constructor(private pluginJsonService: PluginJsonService) {
    this.pluginJson = pluginJsonService.pluginJson;
   }

  ngOnInit(): void {
  }

}
