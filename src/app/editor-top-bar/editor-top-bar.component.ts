import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-editor-top-bar',
  templateUrl: './editor-top-bar.component.html',
  styleUrls: ['./editor-top-bar.component.scss']
})
export class EditorTopBarComponent implements OnInit {


  @Input()
  drawer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
