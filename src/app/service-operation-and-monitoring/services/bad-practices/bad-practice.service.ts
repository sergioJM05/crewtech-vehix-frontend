import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BadPracticesEntity } from '../../model/bad-practices/bad-practices.entity';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BadPracticeService {
  private apiUrl = `${environment.serverBaseUrl}${environment.badPracticesEndpointPath}`;

  constructor(private http: HttpClient) {}

  getAllBadPractices(): Observable<BadPracticesEntity[]> {
    return this.http
      .get<BadPracticesEntity[]>(this.apiUrl)
      .pipe(
        map((data) => data.map(item => new BadPracticesEntity(item)))
      );
  }
}
