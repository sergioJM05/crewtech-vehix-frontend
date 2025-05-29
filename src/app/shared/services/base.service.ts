import {inject} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';

export class BaseService <T>{

  protected httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  protected serverBaseUrl: string = `${environment.serverBaseUrl}`;
  protected resourceEndpoint: string = '/resources';
  protected http: HttpClient = inject(HttpClient);

  protected resourcePath() { return `${this.serverBaseUrl}${this.resourceEndpoint}`;}
  protected handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor() {}

  /**
   * @summary This method is used to GET ALL ARRAY resources from the API
   * @author Julca Minaya Sergio Gino u202318274
   */
  getAllArrays(): Observable<T[]>{
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * @summary This method is used to GET ALL OBJECT resources from the API
   * @author Julca Minaya Sergio Gino u202318274
   */
  getAllObjects(): Observable<T>{
    return this.http.get<T>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * @summary This method is to CREATE object resource and post in the API
   * @author Julca Minaya Sergio Gino u202318274
   */
  public create(resource: T): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(resource), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * @summary This method is used to DELETE object resource from the API
   * @author Julca Minaya Sergio Gino u202318274
   */
  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * @summary This method is used to UPDATE object resource from the API
   * @author Julca Minaya Sergio Gino u202318274
   */
  public update(id: any, resource: T): Observable<T> {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(resource), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}

