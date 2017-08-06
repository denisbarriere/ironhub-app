import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTagsComponent } from './project-tags.component';

describe('ProjectTagsComponent', () => {
  let component: ProjectTagsComponent;
  let fixture: ComponentFixture<ProjectTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
