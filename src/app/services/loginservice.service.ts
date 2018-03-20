import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginAuthComponent } from '../components/login-component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

const httpOptions = environment.httpOptions;

@Injectable()
export class LoginserviceService {
    private loginUrl = environment.loginUrl;
    private headers = new Headers( { 'Content-Type': 'application/json' } );

    constructor( private http: HttpClient, private https: Http ) { }

    authenticate( loginComponent: LoginAuthComponent ): Observable<LoginAuthComponent> {
        return this.http.post<LoginAuthComponent>( this.loginUrl, JSON.stringify( loginComponent ), httpOptions ).pipe(
            tap( loginDetails => console.log( 'In Login Details' ), catchError( this.handleObservableError( 'In Login Details' ) )
            )
        );
    }

    authenticateUser( loginEmail: string, loginPass: string ): Observable<LoginAuthComponent> {
        if ( loginEmail != null && loginPass != null ) {
            const obj = { loginEmail: loginEmail, loginPass: loginPass };
            return this.http.post<LoginAuthComponent>( this.loginUrl, JSON.stringify( obj ), httpOptions ).pipe(
                tap( loginDetails => console.log( 'In Login Details' ),
                    catchError( this.handleObservableError( 'In Login Details' ) )
                )
            );
        }
    }

    authenticateUserByHttp( loginEmail: string, loginPass: string ): Promise<LoginAuthComponent> {
        const obj = { loginEmail: loginEmail, loginPass: loginPass };
        return this.https.post( this.loginUrl, JSON.stringify( obj ), { headers: this.headers } )
            .toPromise().then( resp => resp.json() ).catch( this.handleError );
    }

    private handleError( error: any ): Promise<any> {
        console.error( 'An error occurred', error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleObservableError<T>( operation = 'operation', result?: T ) {
        return ( error: any ): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error( error ); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log( `${operation} failed: ${error.message}` );

            // Let the app keep running by returning an empty result.
            return of( result as T );
        };
    }

    /**
     * Log all the actions to the console .
     * @param message
     */
    log( message: string ) {
        console.log( message );
    }
}
