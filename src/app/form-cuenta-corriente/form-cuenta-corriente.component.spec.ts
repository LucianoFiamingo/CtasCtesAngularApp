import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuentaCorrienteComponent } from './form-cuenta-corriente.component';

describe('FormCuentaCorrienteComponent', () => {
  let component: FormCuentaCorrienteComponent;
  let fixture: ComponentFixture<FormCuentaCorrienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCuentaCorrienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCuentaCorrienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
