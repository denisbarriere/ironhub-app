import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubComponent } from './header-sub.component';

describe('HeaderSubComponent', () => {
  let component: HeaderSubComponent;
  let fixture: ComponentFixture<HeaderSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
