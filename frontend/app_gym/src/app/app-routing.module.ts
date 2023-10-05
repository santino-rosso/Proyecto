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
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin_alumno', component: AdminAlumnoComponent },
  { path: 'admin_editar_alumno', component: AdminEditarAlumnoComponent },
  { path: 'admin_profesor', component: AdminProfesorComponent },
  { path: 'admin_editar_profesor', component: AdminEditarProfesorComponent },
  { path: 'alumno_cronograma', component: AlumnoCronogramaComponent },
  { path: 'alumno_perfil', component: AlumnoPerfilComponent },
  { path: 'alumno_perfil_modif', component: AlumnoPerfilModifComponent },
  { path: 'alumno_planificaciones', component: AlumnoPlanificacionesComponent },
  { path: 'profesor_perfil', component: ProfesorPerfilComponent },
  { path: 'profesor_perfil_modif', component: ProfesorPerfilModifComponent },
  { path: 'profesor_planificacion_particular', component: ProfesorPlanificacionParticularComponent },
  { path: 'profesor_planificacion_particular_editar', component: ProfesorPlanificacionParticularEditarComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'profesor_planificaciones', component: ProfesorPlanificacionesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }