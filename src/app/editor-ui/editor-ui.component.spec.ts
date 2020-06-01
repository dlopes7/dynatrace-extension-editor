import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorUiComponent } from './editor-ui.component';

describe('EditorUiComponent', () => {
  let component: EditorUiComponent;
  let fixture: ComponentFixture<EditorUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
