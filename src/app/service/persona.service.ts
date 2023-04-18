import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://portfolio-backend-production-ca21.up.railway.app/persona/'

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<Persona>{
  return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public save(perso: Persona):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', perso);
    }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }

  public edit(perso: Persona):Observable<any>{
    return this.httpClient.put<any>(this.URL + 'update', perso);
    }
}
