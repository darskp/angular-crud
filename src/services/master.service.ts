import { Injectable } from '@angular/core';
import { apiResponseModel } from '../app/model/interface/role';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

export class MasterService {
  private apiUrl = 'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation';

  constructor(private http: HttpClient) { }

  fetchDesignation(): Observable<apiResponseModel> {
    return this.http.get<apiResponseModel>(this.apiUrl);
  }
}
