import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTitularesComponent } from './lista-titulares/lista-titulares.component';
import { FormPersonaFisicaComponent } from './form-persona-fisica/form-persona-fisica.component';
import { FormPersonaJuridicaComponent } from './form-persona-juridica/form-persona-juridica.component';

const routes: Routes = [

  { path: '', component: ListaTitularesComponent, pathMatch: 'full' },
  { path: 'crear/personafisica', component: FormPersonaFisicaComponent},
  { path: 'editar/personafisica/:id', component: FormPersonaFisicaComponent},
  { path: 'crear/personajuridica', component: FormPersonaJuridicaComponent},
  { path: 'editar/personajuridica/:id', component: FormPersonaJuridicaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
