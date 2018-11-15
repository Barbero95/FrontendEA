
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { MessagesComponent } from './messages/messages.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EditarActividadComponent } from './editar-actividad/editar-actividad.component';
import { PanelComponent } from './panel/panel.component';

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
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
