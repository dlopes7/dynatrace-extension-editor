import { Component, OnInit } from '@angular/core';
import { PluginJsonService } from '../shared/services/plugin-json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pluginJson: any;
  uploadError: boolean;
  uploadErrorMessage: string;

  constructor(private pluginJsonService: PluginJsonService) { 
    this.pluginJson = pluginJsonService.pluginJson;
    this.uploadError = false;
    this.uploadErrorMessage = "";
  }

  ngOnInit(): void {
  }

  uploadFile(event) {
    let selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");

    fileReader.onload = () => {
      try{
        let parsedJson = JSON.parse(fileReader.result.toString());
        this.pluginJson = parsedJson;
        this.uploadErrorMessage = "";
        this.uploadError = false;
      } catch (e) {
        this.uploadErrorMessage = `Could not upload the file!:  ${e}`;
        this.uploadError = true;
      }
     
     
    }
    fileReader.onerror = (error) => {
      this.uploadErrorMessage = `Could not upload the file!:  ${error}`;
      this.uploadError = true;
      console.log(error);
    }
  }

}
