import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAction } from './btn-action';

describe('BtnAction', () => {
  let component: BtnAction;
  let fixture: ComponentFixture<BtnAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
