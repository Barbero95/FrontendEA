
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { MessagesComponent } from './messages/messages.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearActividadComponent,
    EditarPerfilComponent,
    VerPerfilComponent,
    MessagesComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
