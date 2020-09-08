import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(public http: HttpClient) { }

  public fetchLinks(): Observable<any> {
    return this.http.get<any>(`${environment.url}/posts`);
  }

  public addLinks(requestBody): Observable<any> {
    return this.http.post<any>(`${environment.url}/posts`, requestBody);
  }

  public deleteLink(id): Observable<any> {
    return this.http.delete<any>(`${environment.url}/posts/${id}`);
  }

  public updateLink(id, requestBody): Observable<any> {
    return this.http.put<any>(`${environment.url}/posts/${id}`, requestBody);
  }
}
