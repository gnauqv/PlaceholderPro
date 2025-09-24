import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBox } from './explore-box';

describe('ExploreBox', () => {
  let component: ExploreBox;
  let fixture: ComponentFixture<ExploreBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
