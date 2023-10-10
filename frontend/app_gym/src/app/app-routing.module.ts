import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminAlumnoComponent } from "./pages/admin-alumno/admin-alumno.component";
import { AdminEditarAlumnoComponent } from "./pages/admin-editar-alumno/admin-editar-alumno.component";
import { AdminProfesorComponent } from "./pages/admin-profesor/admin-profesor.component";
import { AdminEditarProfesorComponent } from "./pages/admin-editar-profesor/admin-editar-profesor.component";
import { AlumnoCronogramaComponent } from "./pages/alumno-cronograma/alumno-cronograma.component";
import { AlumnoPerfilComponent } from "./pages/alumno-perfil/alumno-perfil.component";
import { AlumnoPerfilModifComponent } from "./pages/alumno-perfil-modif/alumno-perfil-modif.component";
import { AlumnoPlanificacionesComponent } from "./pages/alumno-planificaciones/alumno-planificaciones.component";
import { ProfesorPerfilComponent } from "./pages/profesor-perfil/profesor-perfil.component";
import { ProfesorPerfilModifComponent } from "./pages/profesor-perfil-modif/profesor-perfil-modif.component";
import { ProfesorPlanificacionParticularComponent } from "./pages/profesor-planificacion-particular/profesor-planificacion-particular.component";
import {  ProfesorPlanificacionParticularEditarComponent } from "./pages/profesor-planificacion-particular-editar/profesor-planificacion-particular-editar.component";
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { ProfesorPlanificacionesComponent } from "./pages/profesor-planificaciones/profesor-planificaciones.component";
import { authsessionGuard } from './guards/authsession.guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent ,canActivate:[authsessionGuard]},
  { path: 'admin_alumno', component: AdminAlumnoComponent ,canActivate:[authsessionGuard] },
  { path: 'admin_editar_alumno', component: AdminEditarAlumnoComponent ,canActivate:[authsessionGuard]},
  { path: 'admin_profesor', component: AdminProfesorComponent ,canActivate:[authsessionGuard]},
  { path: 'admin_editar_profesor', component: AdminEditarProfesorComponent,canActivate:[authsessionGuard] },
  { path: 'alumno_cronograma', component: AlumnoCronogramaComponent,canActivate:[authsessionGuard] },
  { path: 'alumno_perfil', component: AlumnoPerfilComponent,canActivate:[authsessionGuard] },
  { path: 'alumno_perfil_modif', component: AlumnoPerfilModifComponent,canActivate:[authsessionGuard] },
  { path: 'alumno_planificaciones', component: AlumnoPlanificacionesComponent,canActivate:[authsessionGuard] },
  { path: 'profesor_perfil', component: ProfesorPerfilComponent,canActivate:[authsessionGuard] },
  { path: 'profesor_perfil_modif', component: ProfesorPerfilModifComponent,canActivate:[authsessionGuard] },
  { path: 'profesor_planificacion_particular', component: ProfesorPlanificacionParticularComponent,canActivate:[authsessionGuard] },
  { path: 'profesor_planificacion_particular_editar', component: ProfesorPlanificacionParticularEditarComponent,canActivate:[authsessionGuard] },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'profesor_planificaciones', component: ProfesorPlanificacionesComponent ,canActivate:[authsessionGuard]},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
