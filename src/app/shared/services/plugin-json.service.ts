import { Injectable } from '@angular/core';

import {pluginJson} from "./plugin_json";

@Injectable({
  providedIn: 'root'
})

export class PluginJsonService {

  pluginJson: any;

  constructor() {
    this.pluginJson = pluginJson;
   }


}
