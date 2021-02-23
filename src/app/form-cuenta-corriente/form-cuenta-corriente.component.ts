import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CuentaCorriente } from '../interfaces';

@Component({
  selector: 'app-form-cuenta-corriente',
  templateUrl: './form-cuenta-corriente.component.html',
  styleUrls: ['./form-cuenta-corriente.component.css']
})
export class FormCuentaCorrienteComponent implements OnInit {

  formCuenta = new FormGroup({
    idCuenta: new FormControl(),
    numero : new FormControl('', [Validators.required,  Validators.pattern("^[0-9]+(\\,[0-9]{1,2})?$"),  Validators.minLength(8), Validators.maxLength(8)]),
    saldo : new FormControl(),
    moneda : new FormControl(),
    titular : new FormControl()
  });

  formCuentaNueva = new FormGroup({
    idCuenta: new FormControl(),
    numero : new FormControl(),
    saldo : new FormControl('', [Validators.required,  Validators.pattern("^[0-9]+(\\,[0-9]{1,2})?$")]),
    moneda : new FormControl('', [Validators.required]),
    titular : new FormControl()
  });
  
  cc! : CuentaCorriente;
  sinCuenta : boolean = false;
  formInvalido! : boolean;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarFormCuenta(){
    this.sinCuenta = true;
  }
  
  validarFormCuenta() : boolean {
    let formCuenta;
    if (this.sinCuenta){
      this.formCuenta.reset();
      formCuenta = this.formCuentaNueva.valid;
    }else {
      formCuenta = this.formCuenta.valid;
    }
    return formCuenta;
  }

  setValueFormCuenta(cc: CuentaCorriente) {
    this.formCuenta.setValue({ numero: cc.numero});
  }

  get idCuenta() { return this.formCuenta.get('idCuenta'); }
  
  get numero() { return this.formCuenta.get('numero'); }
  get saldo() { return this.formCuentaNueva.get('saldo'); }
  get moneda() { return this.formCuentaNueva.get('moneda'); }
  
  get fCuenta(){ return this.formCuenta.controls; }
  get fCuentaNueva(){ return this.formCuentaNueva.controls; }

}
