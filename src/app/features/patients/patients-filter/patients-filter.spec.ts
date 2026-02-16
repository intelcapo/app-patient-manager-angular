import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsFilter } from './patients-filter';

describe('PatientsFilter', () => {
  let component: PatientsFilter;
  let fixture: ComponentFixture<PatientsFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
