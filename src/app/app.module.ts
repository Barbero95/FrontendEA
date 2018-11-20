
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { MessagesComponent } from './messages/messages.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EditarActividadComponent } from './editar-actividad/editar-actividad.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearActividadComponent,
    EditarPerfilComponent,
    VerPerfilComponent,
    MessagesComponent,
    CatalogoComponent,
    MenuPrincipalComponent,
    EditarActividadComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      //aqui añadir la extensión que esta en el fichero de lectura
      apiKey: 'Api de google'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
