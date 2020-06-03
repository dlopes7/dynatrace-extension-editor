import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editor-ui',
  templateUrl: './editor-ui.component.html',
  styleUrls: ['./editor-ui.component.scss']
})
export class EditorUiComponent implements OnInit {

  constructor(private router:Router) {}

  getRouter() : Router {
    return this.router;
  }

  ngOnInit(): void {

  }



}
