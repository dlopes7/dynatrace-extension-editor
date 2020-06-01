import { Injectable, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {pluginJson} from "./plugin_json";

@Injectable({
  providedIn: 'root'
})

export class PluginJsonService {

  pluginJsonSource = new BehaviorSubject<any>({});
  pluginJson = this.pluginJsonSource.asObservable();

  constructor() {
    this.changePluginJson(pluginJson);
   }

  changePluginJson(pluginJson: any) {
    this.pluginJsonSource.next(pluginJson);
  }

}
