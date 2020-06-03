import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPropertiesComponent } from './editor-properties.component';

describe('EditorPropertiesComponent', () => {
  let component: EditorPropertiesComponent;
  let fixture: ComponentFixture<EditorPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
