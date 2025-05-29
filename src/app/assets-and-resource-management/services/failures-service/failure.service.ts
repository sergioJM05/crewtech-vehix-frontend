import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Failure} from '../../model/failure/failure.entity';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FailureService {
  private endpoint  = `${environment.serverBaseUrl}${environment.failuresEndpointPath}`;
  constructor(private http: HttpClient) {}

  getFailuresByVehicle(vehicleId: number): Observable<Failure[]> {
    return this.http.get<Failure[]>(`${this.endpoint}?vehicleId=${vehicleId}`)
  }
}
