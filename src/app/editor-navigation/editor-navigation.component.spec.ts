import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorNavigationComponent } from './editor-navigation.component';

describe('EditorNavigationComponent', () => {
  let component: EditorNavigationComponent;
  let fixture: ComponentFixture<EditorNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
