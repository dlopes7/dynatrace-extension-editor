import { Injectable, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {pluginJson} from './plugin_json';
import { PluginWrapper } from '../../models/plugin-wrapper';

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
    console.log('Received  pluginWrapper', pluginWrapper);
    this.pluginJsonSource.next(pluginWrapper);
    console.log('New plugin.json', this.pluginJsonSource.getValue().pluginJson);
    localStorage.setItem('pluginJson', JSON.stringify(pluginWrapper.pluginJson));
  }

}
