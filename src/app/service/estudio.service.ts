import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  url = "https://portfolio-backend-production-ca21.up.railway.app/estudios/";

  constructor(private httpClient:HttpClient) { }
  public lista(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.url + `detail/${id}`);
  }

  public save(educacion: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', educacion);
  }

  public update(id: number, educacion: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }


}

