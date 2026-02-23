import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSquare } from './btn-square';

describe('BtnSquare', () => {
  let component: BtnSquare;
  let fixture: ComponentFixture<BtnSquare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSquare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSquare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
