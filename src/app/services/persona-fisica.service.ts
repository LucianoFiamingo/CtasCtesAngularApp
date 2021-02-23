import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonaFisica } from '../interfaces';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': 'my-auth-token',
  })
}

@Injectable({ providedIn: 'root' })
export class PersonaFisicaService {

  baseUrl: string;

  constructor(protected http: HttpClient, @Inject("BASE_URL_JAVA_API") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public obtener(id: number) : Observable<PersonaFisica>{
    return this.http.get<PersonaFisica>(this.baseUrl + 'api/personaFisica/obtener/' + id);
  }

  public getLista(): Observable<PersonaFisica[]> {
    return this.http.get<PersonaFisica[]>(this.baseUrl + "api/personaFisica/listar")
  }

  public crear(personaFisica : PersonaFisica) {
    this.http.post<PersonaFisica>(this.baseUrl + 'api/personaFisica/crear',
      personaFisica, httpOptions)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }

  public eliminar(id: number) {
    this.http.delete<PersonaFisica>(this.baseUrl + 'api/personaFisica/eliminar/' + id)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }

  public editar(personaFisica : PersonaFisica) {
    this.http.put<PersonaFisica>(this.baseUrl + 'api/personaFisica/actualizar',
      personaFisica, httpOptions)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }
}