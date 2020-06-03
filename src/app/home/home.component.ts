import { Component, OnInit } from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { pluginAGTemplate } from "../models/plugin_ag_template"

import { DtToast } from '@dynatrace/barista-components/toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pluginJson: any;
  uploadError: boolean;
  uploadSuccess: boolean;
  uploadErrorMessage: string;


  loadFromURLForm = new FormGroup({
    url: new FormControl(''),
  });

  constructor(private http: HttpClient, private pluginJsonService: PluginJsonService, private toast: DtToast) {
    this.uploadError = false;
    this.uploadErrorMessage = "";

  }

  ngOnInit(): void {
    this.pluginJsonService.pluginJsonSource.subscribe(pluginJson => this.pluginJson = pluginJson);

  }

  uploadFile(event) {
    let selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");

    fileReader.onload = () => {
      try {
        let parsedJson = JSON.parse(fileReader.result.toString());
        this.pluginJsonService.changePluginJson(parsedJson);
        this.uploadErrorMessage = "";
        this.uploadError = false;
        this.uploadSuccess = true;
        this.toast.create('Plugin uploaded successfully!');
      } catch (e) {
        this.uploadErrorMessage = `Could parse the file!:  ${e}`;
        this.uploadError = true;
      }


    }
    fileReader.onerror = (error) => {
      this.uploadErrorMessage = `Could not upload the file!:  ${error}`;
      this.uploadError = true;
      console.log(error);
    }
  }

  loadFromURL() {
    this.http.get(this.loadFromURLForm.value.url).subscribe(results => console.log(results));
  }

  createFromTemplate() {
    this.pluginJsonService.changePluginJson(pluginAGTemplate);
    this.toast.create('Plugin created successfully!');
  }

}
