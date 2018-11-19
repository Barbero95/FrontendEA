import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { MessageService } from './message.service';
import { Actividad } from './actividad';
import { Usuario } from './usuario';
 
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
  getUsuario(username: string): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${username}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => this.log(`El Nick es ${username}`)),
      catchError(this.handleError<Usuario>(`error`))
    );
  }

  //get de todas las actividades de un usuario
  getActividadesPropietario(actividad: Actividad): Observable<Actividad[]> {
    const url = `${this.actividadesUrl}/propietario/${actividad.propietario}`;
    return this.http.get<Actividad[]>(url)
    //.pipe(
    //  tap(_ => this.log(`El propietario=${actividad.propietario}`)),
     // catchError(this.handleError<Actividad>(`error`))
 //   );
 ;
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
  
  ////GPS dame todas las actividades cerca de mi y con este tag
  postActividadesGPS (info: JSON): Observable<Actividad[]> {
    const url = `${this.actividadesUrl}/busqueda/GPS`;
    return this.http.post<Actividad[]>(url, info, httpOptions).pipe(
      tap((info: JSON) => this.log(`Busqueda de actividades cercanas`)),
      catchError(this.handleError<Actividad[]>('error en la busqueda de las actividades cercanas'))
    );
  }
  getActividadesGPS (): Observable<Actividad[]> {
    const url = `${this.actividadesUrl}/busqueda/GPS`;
    return this.http.get<Actividad[]>(url).pipe(
      tap(() => this.log(`get search gps por defecto`)),
      catchError(this.handleError<Actividad[]>('error en la busqueda de prueba'))
    );
  }

// Esto sirve para editar catalogo
   getActividadDePropietario(actividad: Actividad): Observable<Actividad> {
    const url = `${this.actividadesUrl}/pidiendo/${actividad.propietario}/${actividad.titulo}`;
    return this.http.get<Actividad>(url).pipe(
      tap(_ => this.log('')),
      catchError(this.handleError<Actividad>(`error`)));
  }
 
  /** PUT: update the user on the server */

  /** PUT: update the activity on the server */
  //modificar una actividad
  updateActividad (actividad: Actividad, title: string): Observable<any> {
    const url = `${this.actividadesUrl}/update/${title}`;
    return this.http.put(url, actividad, httpOptions).pipe(
      tap(_ => this.log(`updated de actividad=${actividad.titulo}`)),
      catchError(this.handleError<any>('updateActivity'))
    );
  }
  updateUsuario (usuario: Usuario): Observable<any> {
    const url = `${this.usuariosUrl}/${usuario.nick}`;
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(_ => this.log(`updated de usuario=${usuario.nick}`)),
      catchError(this.handleError<any>('updateActivity'))
    );
  }


  /** DELETE: Delete an activity from an user*/
  //borrar una actividad
  deleteActividad (actividad: Actividad): Observable<any> {
    const url = `${this.actividadesUrl}/${actividad.propietario}/${actividad.titulo}`;
    return this.http.delete(url,httpOptions).pipe(
      tap(_ => this.log(`borrado de actividad=${actividad.titulo}`)),
      catchError(this.handleError<any>('DeleteActivity'))
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