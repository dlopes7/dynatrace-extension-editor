import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMetricsComponent } from './editor-metrics.component';

describe('EditorMetricsComponent', () => {
  let component: EditorMetricsComponent;
  let fixture: ComponentFixture<EditorMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
