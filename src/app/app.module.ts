
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { MessagesComponent } from './messages/messages.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EditarActividadComponent } from './editar-actividad/editar-actividad.component';
import { ActividadesXdistanciaComponent } from './actividades-xdistancia/actividades-xdistancia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './chat/chat.module';

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
    ActividadesXdistanciaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SharedModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
