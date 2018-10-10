import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  HTTP_RETRIES: number = 3;
  XSRF_HEADER_NAME: string = 'XSRF-HEADER';

  constructor(private httpClient: HttpClient) {
    this.applySettings();
  }

  applySettings() {
    // no-op
  }

  doGet<T>(url: string, withCreds: boolean = false, authToken?: string, customHeaders?: CustomHeader[]) {
    const httpOptions = this.getHttpOptions(url, withCreds, authToken, customHeaders);
    return this.httpClient.get(url, httpOptions).pipe(
      retry(this.HTTP_RETRIES),
      catchError(this.handleError)
    );
  }

  doPost<T>(url: string, data: any, withCreds: boolean = false, authToken?: string, customHeaders?: CustomHeader[]) {
    const httpOptions = this.getHttpOptions(url, withCreds, authToken, customHeaders);

    return this.httpClient.post(url, data, httpOptions).pipe(
      retry(this.HTTP_RETRIES),
      catchError(this.handleError)
    );
  }

  doPut<T>(url: string, data: any, withCreds: boolean = false) {
    return this.httpClient.put(url, data, { withCredentials: withCreds}).pipe(
      retry(this.HTTP_RETRIES),
      catchError(this.handleError)
    );
  }

  /**
   * Handle the error and determine if network/backend
   * Returns user friendly response
   * @param {HttpErrorResponse} error
   * @returns {ErrorObservable}
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.warn('An network error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.warn('A backend error occured:', error.message);
    }
    // return an ErrorObservable with a user-facing error message
    return new Observable(
      error.error);
  }

  private getHttpOptions(url: string, withCreds: boolean, authToken?: string, customHeaders?: CustomHeader[]) {
    const newHeaders: {} = {};
    let contentType: string = 'application/json';

    if (customHeaders) {
      const contentTypeHeader = customHeaders.find((header: CustomHeader) => {
        return header.headerName === 'Content-Type';
      });

      if (contentTypeHeader) {
        console.log('Custom content type included');
        contentType = contentTypeHeader.headerValue;
      }

      customHeaders.forEach((header: CustomHeader) => {
        if (header.headerName !== 'Content-Type') {
          newHeaders[header.headerName] = header.headerValue;
        }
      });
    }

    if (this.isAuthenticatedApi(url) && authToken) {
      newHeaders[this.XSRF_HEADER_NAME] = authToken;
      newHeaders['Content-Type'] = contentType;
    } else {
      newHeaders['Content-Type'] = contentType;
    }
    const httpOptions = {
      withCredentials: withCreds,
      headers: new HttpHeaders(newHeaders)
    };
    return httpOptions;
  }

  private isAuthenticatedApi(url: string) {
    return true;
  }

}

export interface CustomHeader {
  headerName?: string;
  headerValue?: string;
}

export interface HttpOptionsInterface {
  XSRF_HEADER_NAME: string;
  HTTP_RETRIES: number;

}
