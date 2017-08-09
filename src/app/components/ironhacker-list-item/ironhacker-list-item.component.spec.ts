import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronhackerListItemComponent } from './ironhacker-list-item.component';

describe('IronhackerListItemComponent', () => {
  let component: IronhackerListItemComponent;
  let fixture: ComponentFixture<IronhackerListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronhackerListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronhackerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
