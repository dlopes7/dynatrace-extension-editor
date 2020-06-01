import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSourceComponent } from './editor-source.component';

describe('EditorSourceComponent', () => {
  let component: EditorSourceComponent;
  let fixture: ComponentFixture<EditorSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
