import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/menuPrincipal', pathMatch: 'full' },
  { path: 'crearActividad', component: CrearActividadComponent },
  { path: 'menuPrincipal', component: MenuPrincipalComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'editarPerfil', component: EditarPerfilComponent },
  { path: 'perfil', component: VerPerfilComponent },
  { path: 'image', component: ImageComponent },
  { path: 'login', component: LoginComponent}

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
