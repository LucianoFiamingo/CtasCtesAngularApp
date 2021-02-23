import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormCuentaCorrienteComponent } from '../form-cuenta-corriente/form-cuenta-corriente.component';
import { CuentaCorriente, PersonaFisica, Titular } from '../interfaces';
import { PersonaFisicaService } from '../services/persona-fisica.service';
  
@Component({
  selector: 'app-form-persona-fisica',
  templateUrl: './form-persona-fisica.component.html',
  styleUrls: ['./form-persona-fisica.component.css']
})
export class FormPersonaFisicaComponent extends FormCuentaCorrienteComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
    rut : new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(8)])
  });

  params!: Params;
  creandoVar: boolean = false;
  titular!: Observable<PersonaFisica>;
  titularSus!: PersonaFisica;
  cuentas : CuentaCorriente[] = [];

  constructor(protected personaFisicaService: PersonaFisicaService, private router: Router, 
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
    this.titular = this.personaFisicaService.obtener(id);
    this.titular.subscribe(
      result => { this.susTitular(result); },
      error => { console.error(error); }
    );
    return false;
  }

  susTitular(ti: PersonaFisica): void {
    this.titularSus = ti;
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
    this.personaFisicaService.crear(this.titularSus);
    this.router.navigate(['/']);
  }

  editar() {
    this.personaFisicaService.editar(this.form.value);
    this.router.navigate(['/']);
  }

  validarForm(): boolean {
    
    let formCuentaValido = this.validarFormCuenta();

    if (this.form.valid && formCuentaValido) {
      console.log("Formulario correcto!");
      return true;
    }
    console.log("Formulario incorrecto");
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

  setValueForm(t: PersonaFisica) {
    this.form.setValue({ id: t.id, nombre: t.nombre, apellido: t.apellido, rut: t.rut });
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get f(){ return this.form.controls; }

}
