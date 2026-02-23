import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIcon } from './header-icon';

describe('HeaderIcon', () => {
  let component: HeaderIcon;
  let fixture: ComponentFixture<HeaderIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
