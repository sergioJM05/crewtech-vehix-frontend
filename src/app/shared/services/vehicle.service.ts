import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl= environment.serverBaseUrl+environment.vehiclesEndpointPath;
  constructor(private http: HttpClient) {}

  getVehicles() : Observable<[]>{
    return this.http.get<[]>(this.apiUrl);
  }

}
