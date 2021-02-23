import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormCuentaCorrienteComponent } from '../form-cuenta-corriente/form-cuenta-corriente.component';
import { CuentaCorriente, PersonaJuridica } from '../interfaces';
import { PersonaJuridicaService } from '../services/persona-juridica.service';
  
@Component({
  selector: 'app-form-persona-juridica',
  templateUrl: './form-persona-juridica.component.html',
  styleUrls: ['./form-persona-juridica.component.css']
})
export class FormPersonaJuridicaComponent extends FormCuentaCorrienteComponent  implements OnInit {

  form = new FormGroup({
    id: new FormControl(),
    razonSocial: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    anioFundacion: new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.min(1900), Validators.max(2021), Validators.minLength(4), Validators.maxLength(4)]),
    rut : new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(8)])
  });
  
  params!: Params;
  creandoVar: boolean = false;
  titular!: Observable<PersonaJuridica>;
  titularSus!: PersonaJuridica;
  cc!:CuentaCorriente;
  cuentas : CuentaCorriente[] = [];

  constructor(protected personaJuridicaService: PersonaJuridicaService, private router: Router, 
    private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params;
    this.creandoVar = this.creando();
  }

  creando(): boolean {
    let id = this.params.id;
    if (!id) {
      return true;
    }
    return this.editando(id);
  }

  editando(id: number) {
    this.titular = this.personaJuridicaService.obtener(id);
    this.titular.subscribe(
      result => { this.susTitular(result); },
      error => { console.error(error); }
    );
    return false;
  }

  susTitular(per: PersonaJuridica): void {
    this.titularSus = per;
    this.setValueForm(this.titularSus);
  }

  guardar(): void {

    if (this.creandoVar) {

      if (this.validarForm()) {
        this.formInvalido = false;
        this.crear();
      }else{
        this.formInvalido = true;
      }
    } else {
      if (this.validarFormEditando()) {
        this.formInvalido = false;
        this.editar();
      }else{
        this.formInvalido = true;
      }
    }
  }

  crear() {
    this.titularSus = this.form.value;
    this.cuentas.push(this.formCuenta.value );
    this.titularSus.cuentasCorrientes = this.cuentas;
    
    console.log(this.titularSus)
    this.personaJuridicaService.crear(this.titularSus);
    this.router.navigate(['/']);
  }

  editar() {
    this.personaJuridicaService.editar(this.form.value);
    this.router.navigate(['/']);
  }

  validarForm(): boolean {
    let formCuentaValido = this.validarFormCuenta();
    if (this.form.valid && formCuentaValido) {
      console.log("Formulario correcto!");
      return true;
    }
    console.log("Formulario incorrecto");
    console.log(formCuentaValido);
    return false;
  }

  validarFormEditando(): boolean {
    if (this.form.valid) {
      console.log("Formulario correcto!");
      return true;
    }
    console.log("Formulario incorrecto");
    return false;
  }

  get razonSocial() { return this.form.get('razonSocial'); }
  get anioFundacion() { return this.form.get('anioFundacion'); }
  get f(){ return this.form.controls; }

  setValueForm(t: PersonaJuridica) {
    console.log(t)
    this.form.setValue({ id: t.id, razonSocial: t.razonSocial, anioFundacion: t.anioFundacion, rut: t.rut });
  }

}
