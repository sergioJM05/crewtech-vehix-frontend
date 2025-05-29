import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TechnicalErrorsEntity } from '../../model/technical-errors/technical-errors.entity'
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnicalErrorService {
  private baseUrl = environment.serverBaseUrl;
  private endpoint = environment.obsDataEndpointPath;

  constructor(private http: HttpClient) {}

  getTechnicalErrors(): Observable<TechnicalErrorsEntity[]> {
    return this.http.get<any>(`${this.baseUrl}${this.endpoint}`).pipe(
      map(data => {
        const errors = data.technicalErrors || [];
        return errors.map((item: any) => new TechnicalErrorsEntity({
          id: item.id,
          code: item.code,
          description: item.description,
          suggestion: item.possibleSolution,
          urgency: item.errorType
        }));
      })
    );
  }
}
