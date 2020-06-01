import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTopBarComponent } from './editor-top-bar.component';

describe('EditorTopBarComponent', () => {
  let component: EditorTopBarComponent;
  let fixture: ComponentFixture<EditorTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
