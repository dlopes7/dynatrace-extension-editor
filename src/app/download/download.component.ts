import { Component, OnInit } from '@angular/core';
import { PluginWrapper } from '../models/plugin-wrapper';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  pluginWrapper: PluginWrapper;
  fileUrl;

  constructor(private pluginJsonService: PluginJsonService, private sanitizer: DomSanitizer) {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginWrapper => this.pluginWrapper = pluginWrapper);
  }

  ngOnInit(): void {

    const pluginJson = JSON.stringify(this.pluginWrapper.pluginJson, null, 2);

    const blob = new Blob([pluginJson], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
