import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EditarActividadComponent } from './editar-actividad/editar-actividad.component';
import { CrearDenunciasComponent } from './crear-denuncias/crear-denuncias.component';
import { VerDenunciasComponent } from './ver-denuncias/ver-denuncias.component';


 
const routes: Routes = [
  { path: '', redirectTo: '/menuPrincipal', pathMatch: 'full' },
  { path: 'crearActividad', component: CrearActividadComponent },
  { path: 'menuPrincipal', component: MenuPrincipalComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'editarPerfil', component: EditarPerfilComponent },
  { path: 'perfil', component: VerPerfilComponent },
  { path: 'editarActividad/:titulo', component: EditarActividadComponent },
  { path: 'crearDenuncias/:titulo', component: CrearDenunciasComponent },
  { path: 'verDenuncias', component: VerDenunciasComponent }

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
