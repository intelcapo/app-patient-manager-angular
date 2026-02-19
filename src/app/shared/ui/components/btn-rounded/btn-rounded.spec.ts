import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRounded } from './btn-rounded';

describe('BtnRounded', () => {
  let component: BtnRounded;
  let fixture: ComponentFixture<BtnRounded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnRounded]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnRounded);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
