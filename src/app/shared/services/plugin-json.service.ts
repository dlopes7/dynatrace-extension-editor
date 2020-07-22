import { Injectable, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {pluginJson} from "./plugin_json";
import { PluginWrapper } from '../../../app/models/plugin-wrapper';

@Injectable({
  providedIn: 'root'
})

export class PluginJsonService {

  pluginJsonSource = new BehaviorSubject<PluginWrapper>(new PluginWrapper());
  pluginWrapper = this.pluginJsonSource.asObservable();

  constructor() {
    this.changePluginJson(new PluginWrapper(pluginJson));
  }

  changePluginJson(pluginWrapper: PluginWrapper) {
    this.pluginJsonSource.next(pluginWrapper);
  }

}
