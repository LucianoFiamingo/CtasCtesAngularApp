import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListaTitularesComponent } from './lista-titulares/lista-titulares.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TitularesService } from './services/titulares.service';
import { PersonaFisicaService } from './services/persona-fisica.service';
import { FormPersonaFisicaComponent } from './form-persona-fisica/form-persona-fisica.component';
import { FormPersonaJuridicaComponent } from './form-persona-juridica/form-persona-juridica.component';
import { FormCuentaCorrienteComponent } from './form-cuenta-corriente/form-cuenta-corriente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ListaTitularesComponent,
    FormPersonaFisicaComponent,
    FormPersonaJuridicaComponent,
    FormCuentaCorrienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TitularesService, PersonaFisicaService, PersonaFisicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
