import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPermisosComponent } from "./pages/admin-permisos/admin-permisos.component";
import { AlumnoCronogramaComponent } from "./pages/alumno-cronograma/alumno-cronograma.component";
import { AlumnoPerfilComponent } from "./pages/alumno-perfil/alumno-perfil.component";
import { AlumnoClasesComponent } from "./pages/alumno-clases/alumno-clases.component";
import { AlumnoPlanificacionesComponent } from "./pages/alumno-planificaciones/alumno-planificaciones.component";
import { ProfesorPerfilComponent } from "./pages/profesor-perfil/profesor-perfil.component";
import { ProfesorClasesComponent } from "./pages/profesor-clases/profesor-clases.component";
import { ProfesorPlanificacionParticularComponent } from "./pages/profesor-planificacion-particular/profesor-planificacion-particular.component";
import {  ProfesorPlanificacionCrearComponent } from "./pages/profesor-planificacion-crear/profesor-planificacion-crear.component";
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { ProfesorPlanificacionesComponent } from "./pages/profesor-planificaciones/profesor-planificaciones.component";
import { authsessionGuard } from './guards/authsession.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent ,canActivate: [authsessionGuard], data: { roles: ['Admin'] } },
  { path: 'admin_permisos', component: AdminPermisosComponent ,canActivate: [authsessionGuard], data: { roles: ['Admin'] } },
  { path: 'alumno_cronograma', component: AlumnoCronogramaComponent,canActivate: [authsessionGuard], data: { roles: ['Admin', 'Alumno'] } },
  { path: 'alumno_perfil', component: AlumnoPerfilComponent,canActivate: [authsessionGuard], data: { roles: ['Admin', 'Alumno'] } },
  { path: 'alumno_clases', component: AlumnoClasesComponent,canActivate: [authsessionGuard], data: { roles: ['Admin', 'Alumno'] } },
  { path: 'alumno_planificaciones', component: AlumnoPlanificacionesComponent,canActivate: [authsessionGuard], data: { roles: ['Admin', 'Alumno'] } },
  { path: 'profesor_perfil', component: ProfesorPerfilComponent,canActivate: [authsessionGuard], data: { roles: ['Admin', 'Profesor'] } },
  { path: 'profesor_clases', component: ProfesorClasesComponent,canActivate: [authsessionGuard], data: { roles: ['Admin', 'Profesor'] } },
  { path: 'profesor_planificacion_particular', component: ProfesorPlanificacionParticularComponent,canActivate: [authsessionGuard], data: { roles: ['Admin', 'Profesor'] } },
  { path: 'profesor_planificacion_crear', component: ProfesorPlanificacionCrearComponent,canActivate: [authsessionGuard], data: { roles: ['Admin', 'Profesor'] } },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'profesor_planificaciones', component: ProfesorPlanificacionesComponent ,canActivate:[authsessionGuard], data: { roles: ['Admin', 'Profesor'] } },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



  
