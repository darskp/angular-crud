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

  fetchGetClient(): Observable<apiResponseModel>{
    return this.http.get<apiResponseModel>(`${environment.API_URL}/GetAllClients`)
  }

  fetchGetEmployee(): Observable<apiResponseModel> {
    return this.http.get<apiResponseModel>(`${environment.API_URL}/GetAllEmployee`)
  }

  addUpdateClient(obj: Client): Observable<apiResponseModel> {
    return this.http.post<apiResponseModel>(`${environment.API_URL}/AddUpdateClient`,obj)
  }

  deleteClientId(clientId: number): Observable<apiResponseModel> {
    return this.http.delete<apiResponseModel>(`${environment.API_URL}/DeleteClientByClientId?=${clientId}`)
  }


}
