import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronhackerListComponent } from './ironhacker-list.component';

describe('IronhackerListComponent', () => {
  let component: IronhackerListComponent;
  let fixture: ComponentFixture<IronhackerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronhackerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronhackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
