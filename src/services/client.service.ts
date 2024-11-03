import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResponseModel } from '../app/model/interface/role';
import { Client } from '../app/model/class/client';
import { environment } from '../environments/environment.development';
import { ClientProject } from '../app/model/class/client-project';
import { constant } from '../app/constant/constant';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http:HttpClient) { 
  }

  fetchGetClient(): Observable<apiResponseModel>{
    return this.http.get<apiResponseModel>(`${environment.API_URL}/${constant.API_method.GetAllClients}`)
  }

  testAsyncPipeTest(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  fetchGetEmployee(): Observable<apiResponseModel> {
    return this.http.get<apiResponseModel>(`${environment.API_URL}/${constant.API_method.GetAllEmployee}`)
  }

  fetchGetAllClientProjects():Observable<apiResponseModel>{
    return this.http.get<apiResponseModel>(`${environment.API_URL}/${constant.API_method.GetAllClientProjects}`)
  }
  
  addUpdateClient(obj: Client): Observable<apiResponseModel> {
    return this.http.post<apiResponseModel>(`${environment.API_URL}/${constant.API_method.AddUpdateClient}`,obj)
  }

  addUpdateClientProject(obj: ClientProject): Observable<apiResponseModel> {
    return this.http.post<apiResponseModel>(`${environment.API_URL}/${constant.API_method.AddUpdateClientProject}`, obj)
  }

  deleteClientId(clientId: number): Observable<apiResponseModel> {
    return this.http.delete<apiResponseModel>(`${environment.API_URL}/${constant.API_method.DeleteClientByClientId}?=${clientId}`)
  }



}
