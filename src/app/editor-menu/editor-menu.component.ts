import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor-menu',
  templateUrl: './editor-menu.component.html',
  styleUrls: ['./editor-menu.component.scss']
})
export class EditorMenuComponent implements OnInit {

  @Input()
  drawer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
