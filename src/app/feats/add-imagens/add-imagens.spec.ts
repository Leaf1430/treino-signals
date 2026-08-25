import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImagens } from './add-imagens';

describe('AddImagens', () => {
  let component: AddImagens;
  let fixture: ComponentFixture<AddImagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddImagens],
    }).compileComponents();

    fixture = TestBed.createComponent(AddImagens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
