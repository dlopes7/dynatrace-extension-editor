import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editor-ui',
  templateUrl: './editor-ui.component.html',
  styleUrls: ['./editor-ui.component.scss']
})
export class EditorUiComponent implements OnInit {


  constructor() { 
    
  }

  ngOnInit(): void {
    // this.parseProperties();
  }

  // parseProperties(): void {

  //   if (!this.pluginJson.configUI) {
  //     this.pluginJson.configUI = {
  //       "displayName": this.pluginJson.name,
  //       "properties": []
  //     };
  //   }

  //   this.pluginJson.properties.forEach(property => {
      
      
  //     property.configUIProperty = this.pluginJson.configUI.properties.find((prop) => {
  //       if (prop.key == property.key) {
  //         return prop;
  //       }
  //     });
  //     console.log(property);

  //   });
  // }

}
