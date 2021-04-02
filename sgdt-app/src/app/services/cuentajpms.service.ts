import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentajpmsModel } from '../models/cuentajpms-model';

const baseUrl = 'http://localhost:8080/api/cuentasjpm';

@Injectable({
  providedIn: 'root'
})
export class CuentajpmsService {

  constructor(private http: HttpClient) { }

  getBaseUrl() {
    return baseUrl;
  }

  getAll(): Observable<CuentajpmsModel[]> {
    return this.http.get<CuentajpmsModel[]>(baseUrl);
  }

  get(id:any): Observable<CuentajpmsModel> {
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

  findByCuenta(cuenta:any): Observable<CuentajpmsModel[]> {
    return this.http.get<CuentajpmsModel[]>(`${baseUrl}?cuenta=${cuenta}`);
  }

}
