import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
private myAppUrl='https://localhost:44340/';
private myApiUrl='api/Tarjeta/'

  constructor(private http:HttpClient) { }

  getListTarjetas(): Observable <any> {
    return this.http.get(this.myAppUrl   + this.myApiUrl);
  }

  deleteTarjetas(id: number):Observable <any>{
    return this.http.delete(this.myAppUrl   + this.myApiUrl + id);
  }

  saveTarjeta(tarjeta:any): Observable<any>{
    return this.http.post(this.myAppUrl   + this.myApiUrl, tarjeta);
  }

  updateTarjeta(id:number, tarjeta:any): Observable<any>{
    return this.http.put(this.myAppUrl   + this.myApiUrl +id, tarjeta);
  }

}
