import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonaJuridicaComponent } from './form-persona-juridica.component';

describe('FormPersonaJuridicaComponent', () => {
  let component: FormPersonaJuridicaComponent;
  let fixture: ComponentFixture<FormPersonaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPersonaJuridicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
