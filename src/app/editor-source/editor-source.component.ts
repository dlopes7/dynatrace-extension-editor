import { Component, OnInit } from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { PluginWrapper } from '../models/plugin-wrapper';

@Component({
  selector: 'app-editor-source',
  templateUrl: './editor-source.component.html',
  styleUrls: ['./editor-source.component.scss']
})
export class EditorSourceComponent implements OnInit {

  pluginWrapper: PluginWrapper;

  constructor(private pluginJsonService: PluginJsonService) {}

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);
  }
}
