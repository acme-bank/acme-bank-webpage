import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProcessComponent } from './loan-process.component';

describe('ArchitectureLoanComponent', () => {
  let component: LoanProcessComponent;
  let fixture: ComponentFixture<LoanProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
