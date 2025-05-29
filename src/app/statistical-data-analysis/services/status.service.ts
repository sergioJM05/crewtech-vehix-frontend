import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  apiUrl= environment.serverBaseUrl+environment.currentStatusEndpointPath;
  constructor(private http: HttpClient) {}

  getStatus<T>(): Observable<T> {
    return this.http.get<T>(this.apiUrl);
  }
}
