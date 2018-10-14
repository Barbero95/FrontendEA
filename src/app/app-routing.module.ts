import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/menuPrincipal', pathMatch: 'full' },
  { path: 'crearActividad', component: CrearActividadComponent },
  { path: 'menuPrincipal', component: MenuPrincipalComponent },
  { path: 'editarPerfil', component: EditarPerfilComponent },
  { path: 'perfil', component: VerPerfilComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
