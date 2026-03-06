import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledList } from './styled-list';

describe('StyledList', () => {
  let component: StyledList;
  let fixture: ComponentFixture<StyledList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyledList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyledList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
