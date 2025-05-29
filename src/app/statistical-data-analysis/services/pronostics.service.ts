import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PronosticsService {

  apiUrl= environment.serverBaseUrl+environment.pronosticsCarEndpointPath;
  constructor(private http: HttpClient) {}

  getPronostics<T>(): Observable<T> {
    return this.http.get<T>(this.apiUrl);
  }
}
