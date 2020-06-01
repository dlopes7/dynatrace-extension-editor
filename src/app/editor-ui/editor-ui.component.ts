import { Component, OnInit } from '@angular/core';
import * as PluginJson from "./plugin.json";


@Component({
  selector: 'app-editor-ui',
  templateUrl: './editor-ui.component.html',
  styleUrls: ['./editor-ui.component.scss']
})
export class EditorUiComponent implements OnInit {

  pluginJson = JSON.parse(JSON.stringify(PluginJson));

  constructor() { 
    console.log(PluginJson.name);
  }

  ngOnInit(): void {
  }


}
