import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonaFisicaComponent } from './form-persona-fisica.component';

describe('FormPersonaFisicaComponent', () => {
  let component: FormPersonaFisicaComponent;
  let fixture: ComponentFixture<FormPersonaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPersonaFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
