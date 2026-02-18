import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSession } from './dropdown-session';

describe('DropdownSession', () => {
  let component: DropdownSession;
  let fixture: ComponentFixture<DropdownSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSession);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
