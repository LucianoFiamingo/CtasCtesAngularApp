import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CuentaCorriente, PersonaJuridica } from '../interfaces';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': 'my-auth-token',
  })
}

@Injectable({ providedIn: 'root' })
export class PersonaJuridicaService {

  baseUrl: string;

  constructor(protected http: HttpClient, @Inject("BASE_URL_JAVA_API") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public obtener(id: number) : Observable<PersonaJuridica>{
    return this.http.get<PersonaJuridica>(this.baseUrl + 'api/personaJuridica/obtener/' + id);
  }

  public getLista(): Observable<PersonaJuridica[]> {
    return this.http.get<PersonaJuridica[]>(this.baseUrl + "api/personaJuridica/listar")
  }

  public crear(personaJuridica : PersonaJuridica) {
    this.http.post<PersonaJuridica>(this.baseUrl + 'api/personaJuridica/crear',
      personaJuridica, httpOptions)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }
  
  public eliminar(id: number) {
    this.http.delete<PersonaJuridica>(this.baseUrl + 'api/personaJuridica/eliminar/' + id)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }

  public editar(personaJuridica : PersonaJuridica) {
    this.http.put<PersonaJuridica>(this.baseUrl + 'api/personaJuridica/actualizar',
      personaJuridica, httpOptions)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }
}