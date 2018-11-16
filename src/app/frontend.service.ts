import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { MessageService } from './message.service';
import { Actividad } from './actividad';
import { Usuario } from './usuario';
import { Denuncia } from './denuncia';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class FrontendService {
  // URL to web api
  private usuariosUrl: string = 'http://localhost:3000/users';
  private actividadesUrl: string = 'http://localhost:3000/actividades';
  private denunciasUrl: string = 'http://localhost:3000/denuncias';
 
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
  //get de todas las actividades de un usuario
  getDenuncias(denuncia: Denuncia): Observable<Denuncia[]> {
    const url = `${this.denunciasUrl}`;
    return this.http.get<Denuncia[]>(url)
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

  //crear denúncia
  postDenuncia (denuncia: Denuncia): Observable<Denuncia> {
    return this.http.post<Denuncia>(this.denunciasUrl, denuncia, httpOptions).pipe(
      tap((denuncia: Denuncia) => this.log(`added denuncia`)),
      catchError(this.handleError<Denuncia>('adddenuncia'))
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

  //deshabilita actividad

  deshabilitarActividad (denuncia: Denuncia): Observable<any> {
    const url = `${this.actividadesUrl}/deshabilitar/${denuncia.denunciado}/${denuncia.idActividadDenunciada}`;
    return this.http.put(url, httpOptions).pipe(
      tap(_ => this.log(`deshabilitar actividad=${denuncia.idActividadDenunciada}`)),
      catchError(this.handleError<any>('deshabilitarActivity'))
    );
  }
// habilita actividad
  habilitarActividad (denuncia: Denuncia): Observable<any> {
    const url = `${this.actividadesUrl}/habilitar/${denuncia.denunciado}/${denuncia.idActividadDenunciada}`;
    return this.http.put(url, httpOptions).pipe(
      tap(_ => this.log(`deshabilitar actividad=${denuncia.idActividadDenunciada}`)),
      catchError(this.handleError<any>('deshabilitarActivity'))
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
  deleteDenuncia (denuncia: Denuncia): Observable<any> {
    const url = `${this.denunciasUrl}/${denuncia._id}`;
    return this.http.delete(url,httpOptions).pipe(
      tap(_ => this.log(`borrado de denuncia=${denuncia._id}`)),
      catchError(this.handleError<any>('DeleteDenuncia'))
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