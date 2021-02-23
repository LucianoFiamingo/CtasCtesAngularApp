import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Titular } from '../interfaces';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': 'my-auth-token',
  })
}

@Injectable({ providedIn: 'root' })
export class TitularesService {

  baseUrl: string;

  constructor(protected http: HttpClient, @Inject("BASE_URL_JAVA_API") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public obtener(id: number) : Observable<Titular>{
    return this.http.get<Titular>(this.baseUrl + 'api/titular/obtener/' + id);
  }

  public getLista(): Observable<Titular[]> {
    return this.http.get<Titular[]>(this.baseUrl + "api/titular/listar/conCuentas")
  }

  public crear(titular : Titular) {
    this.http.post<Titular>(this.baseUrl + 'api/personaFisica/crear',
      titular, httpOptions)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }

  public eliminar(id: number) {
    this.http.delete<Titular>(this.baseUrl + 'api/titular/eliminar/' + id)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }
}