import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comments } from './comments.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsHttpService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.url)
      .pipe(
        catchError(this.handleError<Comments[]>('getComments', []))
      );
  }
  addOrder(order: Comments): Observable<Comments> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Comments>(this.url, order, httpOptions)
      .pipe(
        catchError(this.handleError<Comments>('addOrder'))
      );
  }
  editOrder(order : Comments, id : number): Observable<Comments> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Comments>(this.url + "/"+ id, order, httpOptions)
      .pipe(
        catchError(this.handleError<Comments>('editOrder'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
