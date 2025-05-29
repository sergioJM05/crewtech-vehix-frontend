import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SystemStatusCheck} from '../../model/SystemStatusCheck/system-status-check.entity';
import {map, Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemStatusService {
  private endpoint = `${environment.serverBaseUrl}${environment.reportEndpointPath}`;

  constructor(private http: HttpClient) {}

  getStatusByVehicle(vehicleId: number): Observable<SystemStatusCheck> {
    return this.http.get<SystemStatusCheck[]>(`${this.endpoint}?vehicleId=${vehicleId}`)
      .pipe(map(result => result[0]));
  }
}
