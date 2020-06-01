import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMetadataComponent } from './editor-metadata.component';

describe('EditorMetadataComponent', () => {
  let component: EditorMetadataComponent;
  let fixture: ComponentFixture<EditorMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
