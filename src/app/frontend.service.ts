import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { MessageService } from './message.service';
import { Actividad } from './actividad';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class FrontendService {
  // URL to web api
  private usuariosUrl: string = 'http://localhost:3000/users';
  private actividadesUrl: string = 'http://localhost:3000/actividades';
 
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
 
  /* GET: De todos los usuarios, de un usuario, de todas las actividades o de una actividad */
  //get de una actividad en concreto
  getActividad(titulo: string): Observable<Actividad> {
    const url = `${this.actividadesUrl}/${titulo}`;
    return this.http.get<Actividad>(url).pipe(
      tap(_ => this.log(`El titulo=${titulo}`)),
      catchError(this.handleError<Actividad>(`error`))
    );
  }

  //get de todas las actividades de un usuario
  getActividadesPropietario(actividad: Actividad): Observable<Actividad> {
    const url = `${this.actividadesUrl}/propietario/${actividad.propietario}`;
    return this.http.get<Actividad>(url).pipe(
      tap(_ => this.log(`El propietario=${actividad.propietario}`)),
      catchError(this.handleError<Actividad>(`error`))
    );
  }


  /*POST: Crear usuario o crear actividad*/
  //////// Save methods //////////
  //crear actividad
  postActividad (actividad: Actividad): Observable<Actividad> {
    return this.http.post<Actividad>(this.actividadesUrl, actividad, httpOptions).pipe(
      tap((actividad: Actividad) => this.log(`added activity`)),
      catchError(this.handleError<Actividad>('addActivity'))
    );
  }
 
  /** PUT: update the user on the server */

  /** PUT: update the activity on the server */
  //modificar una actividad
  updateActividad (actividad: Actividad): Observable<any> {
    const url = `${this.actividadesUrl}/${actividad.titulo}`;
    return this.http.put(url, actividad, httpOptions).pipe(
      tap(_ => this.log(`updated de actividad=${actividad.titulo}`)),
      catchError(this.handleError<any>('updateActivity'))
    );
  }

  //No borrar
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FrontendService: ${message}`);
  }
}