import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronhackerDetailsComponent } from './ironhacker-details.component';

describe('IronhackerDetailsComponent', () => {
  let component: IronhackerDetailsComponent;
  let fixture: ComponentFixture<IronhackerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronhackerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronhackerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
