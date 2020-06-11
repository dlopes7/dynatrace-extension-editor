import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMetricDetailsComponent } from './editor-metric-details.component';

describe('EditorMetricDetailsComponent', () => {
  let component: EditorMetricDetailsComponent;
  let fixture: ComponentFixture<EditorMetricDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorMetricDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorMetricDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
