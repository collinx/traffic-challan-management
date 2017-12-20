import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanComponent } from './challan.component';

describe('ChallanComponent', () => {
  let component: ChallanComponent;
  let fixture: ComponentFixture<ChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
