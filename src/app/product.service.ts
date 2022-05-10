import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, take, tap, throwError } from 'rxjs';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl + 'products')
    .pipe(
      tap((data: IProduct[]) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number) : Observable<IProduct>{
    return this.http.get<IProduct>(this.productsUrl + "products/" + id)
    .pipe(
      tap((data: IProduct) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  };

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}

