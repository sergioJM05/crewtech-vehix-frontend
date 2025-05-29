import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProbabilitiesService {

  apiUrl= environment.serverBaseUrl+environment.generalHealthEndpointPath;
  constructor(private http: HttpClient) {}

  getProbabilitiesFailures<T>(): Observable<T> {
    return this.http.get<T>(this.apiUrl);
  }
}
