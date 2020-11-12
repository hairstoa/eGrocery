import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
// Operation = httpRequest, etc. 
// T = any type
// Function console logs any error messages about requests
  handleError<T>(operation = "operation", result?: T){
    return (error:any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
