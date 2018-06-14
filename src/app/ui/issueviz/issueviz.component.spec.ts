import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuevizComponent } from './issueviz.component';

describe('IssuevizComponent', () => {
  let component: IssuevizComponent;
  let fixture: ComponentFixture<IssuevizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuevizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuevizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
