import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimpleIssuesEntity } from '../../model/simple-issues/simple-issues.entity'
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimpleIssuesService {
  private baseUrl = environment.serverBaseUrl;
  private endpoint = environment.obsDataEndpointPath;

  constructor(private http: HttpClient) {}

  getSimpleIssues(): Observable<SimpleIssuesEntity[]> {
    return this.http.get<any>(`${this.baseUrl}${this.endpoint}`).pipe(
      map(data => {
        const issues = data.simpleIssues || [];
        return issues.map((item: any) => new SimpleIssuesEntity({
          id: item.id,
          description: item.description,
          urgency: item.urgencyLevel
        }));
      })
    );
  }
}
