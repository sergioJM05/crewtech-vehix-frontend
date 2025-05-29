import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  apiUrl= environment.serverBaseUrl+environment.repairsEndpointPath;
  constructor(private http: HttpClient) {}

  getRepairs() : Observable<[]>{
    return this.http.get<[]>(this.apiUrl);
  }
}
