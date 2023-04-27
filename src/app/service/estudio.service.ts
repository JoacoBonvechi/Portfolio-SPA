import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  URL = "https://portfolio-joaquin-b6373.web.app/estudios/";

  constructor(private httpClient : HttpClient) { }

  public lista():Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.URL + `lista`);
  }

  public detail(id:number):Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.URL + `detail/${id}`)
  }

  public save(estudio : Estudio): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, estudio);
  }

  public update(id:number, estudio:Estudio): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, estudio)
  }

  public delete (id:number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

