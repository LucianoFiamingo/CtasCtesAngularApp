import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonaFisica, Titular } from '../interfaces';
import { PersonaFisicaService } from '../services/persona-fisica.service';
import { TitularesService } from '../services/titulares.service';

@Component({
  selector: 'app-lista-titulares',
  templateUrl: './lista-titulares.component.html',
  styleUrls: ['./lista-titulares.component.css']
})
export class ListaTitularesComponent implements OnInit {

  listaTitulares!: Observable<Titular[]>;
  
  Titular!: Titular;
  obj : any = {};
  esPersonaFisica : boolean = false;
  es : boolean | undefined;

  constructor(protected titularesService : TitularesService, protected personaFisicaService: PersonaFisicaService, private router : Router) {
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.getLista();    
    }, 100);
  }

  public getLista(){
    this.listaTitulares = this.titularesService.getLista();
    
    this.listaTitulares.subscribe(
      result => this.susListaTitulares(result),
      error => console.log(error)
    );
  }

  editarPersona(id: number){
    console.log(this.personaFisicaService.obtener(id));
    this.personaFisicaService.obtener(id).subscribe(
      result => {this.pudoSuscribirPersonaFisica(result), console.log("True")},
      error => {console.log(error), console.log("False")}
    );
    
    setTimeout(() => {
      this.redirrecionarParaEditar(id);
    }, 100);
    
  }

  redirrecionarParaEditar(id : number) {
    if (this.esPersonaFisica) {
      this.router.navigate(['editar/personafisica/' + id]);
    }else{
      this.router.navigate(['editar/personajuridica/' + id]);
    }
  }

  public eliminar(titular : Titular){
    this.obj = titular;
  }

  public confirmarEliminar(){
    
    this.titularesService.eliminar(this.obj.id);
    
    setTimeout(() => {
      this.ngOnInit();
    }, 100);
  }

  susListaTitulares(result : Titular[]){
    console.log(result);
  }

  pudoSuscribirPersonaFisica(result : PersonaFisica){
    this.esPersonaFisica = true;
    console.log(this.esPersonaFisica)
  }
}
