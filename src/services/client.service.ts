import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResponseModel } from '../app/model/interface/role';
import { Client } from '../app/model/class/client';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http:HttpClient) { 

  }

  fetchGetClient():Observable<Client>{
    return this.http.get<Client>(`${environment.API_URL}/GetAllClients`)
  }

  addUpdateClient(obj:Client): Observable<Client> {
    return this.http.post<Client>(`${environment.API_URL}/AddUpdateClient`,obj)
  }

  deleteClientId(clientId:number): Observable<Client> {
    return this.http.delete<Client>(`${environment.API_URL}/DeleteClientByClientId?=${clientId}`)
  }
}
