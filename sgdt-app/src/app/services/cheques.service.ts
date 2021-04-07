import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChequesModel } from '../models/cheques-model';

const baseUrl = 'http://localhost:8080/api/cheques';

@Injectable({
  providedIn: 'root'
})
export class ChequesService {

  constructor(private http: HttpClient) { }
  
  getBaseUrl() {
    return baseUrl;
  }

  getAll(pagina:any): Observable<any> {
    return this.http.get<any>(`${baseUrl}?pagina=${pagina}`);
  }

  getAndCountAll(pagina:any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/count/?pagina=${pagina}`);
  }

  get(id:any): Observable<ChequesModel> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findBy(numero:any): Observable<ChequesModel[]> {
    return this.http.get<ChequesModel[]>(`${baseUrl}?numero=${numero}`);
  }
  
  rowsCount(): Observable<any> {
    return this.http.get(`${baseUrl}/contar`);
  }

}
