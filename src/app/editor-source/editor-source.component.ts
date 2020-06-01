import { Component, OnInit } from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';

@Component({
  selector: 'app-editor-source',
  templateUrl: './editor-source.component.html',
  styleUrls: ['./editor-source.component.scss']
})
export class EditorSourceComponent implements OnInit {

  pluginJson: any;

  constructor(private pluginJsonService: PluginJsonService) {}

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginJson => this.pluginJson = pluginJson);
  }
}
