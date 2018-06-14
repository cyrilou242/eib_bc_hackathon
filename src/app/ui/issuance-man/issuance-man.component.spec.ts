import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuanceManComponent } from './issuance-man.component';

describe('IssuanceManComponent', () => {
  let component: IssuanceManComponent;
  let fixture: ComponentFixture<IssuanceManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuanceManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuanceManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
