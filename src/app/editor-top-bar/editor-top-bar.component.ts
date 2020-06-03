import { Component, OnInit, Input} from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { PluginWrapper } from '../models/plugin-wrapper';

@Component({
  selector: 'app-editor-top-bar',
  templateUrl: './editor-top-bar.component.html',
  styleUrls: ['./editor-top-bar.component.scss']
})
export class EditorTopBarComponent implements OnInit {

  pluginWrapper: PluginWrapper;

  @Input()
  drawer: any;

  constructor(private pluginJsonService: PluginJsonService ) { 
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);
  }

  ngOnInit(): void {
  }

}
