import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnlacesModel } from '../models/enlaces-model';

const baseUrl = 'http://localhost:8080/api/enlaces';

@Injectable({
  providedIn: 'root'
})
export class EnlacesService {

  constructor(private http: HttpClient) { }

  getBaseUrl() {
    return baseUrl;
  }

  getAll(): Observable<EnlacesModel[]> {
    return this.http.get<EnlacesModel[]>(baseUrl);
  }

  get(id:any): Observable<EnlacesModel> {
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

  findByTitle(titulo:any): Observable<EnlacesModel[]> {
    return this.http.get<EnlacesModel[]>(`${baseUrl}?titulo=${titulo}`);
  }

}
