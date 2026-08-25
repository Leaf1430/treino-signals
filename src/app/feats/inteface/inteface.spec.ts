import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inteface } from './inteface';

describe('Inteface', () => {
  let component: Inteface;
  let fixture: ComponentFixture<Inteface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inteface],
    }).compileComponents();

    fixture = TestBed.createComponent(Inteface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
