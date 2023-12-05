import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminPermisosComponent } from './pages/admin-permisos/admin-permisos.component';
import { AlumnoCronogramaComponent } from './pages/alumno-cronograma/alumno-cronograma.component';
import { AlumnoPerfilComponent } from './pages/alumno-perfil/alumno-perfil.component';
import { AlumnoClasesComponent } from './pages/alumno-clases/alumno-clases.component';
import { AlumnoPlanificacionesComponent } from './pages/alumno-planificaciones/alumno-planificaciones.component';
import { ProfesorPerfilComponent } from './pages/profesor-perfil/profesor-perfil.component';
import { ProfesorClasesComponent } from './pages/profesor-clases/profesor-clases.component';
import { ProfesorPlanificacionesComponent } from './pages/profesor-planificaciones/profesor-planificaciones.component';
import { ProfesorPlanificacionParticularComponent } from './pages/profesor-planificacion-particular/profesor-planificacion-particular.component';
import { ProfesorPlanificacionCrearComponent } from './pages/profesor-planificacion-crear/profesor-planificacion-crear.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavAlumnoComponent } from './components/nav-alumno/nav-alumno.component';
import { NavRegisAdminComponent } from './components/nav-regis-admin/nav-regis-admin.component';
import { FrasesComponent } from './components/frases/frases.component';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';
import { VerPlanificacionComponent } from './components/ver-planificacion/ver-planificacion.component';
import { HttpClientModule } from '@angular/common/http'
import { VerCronogramaComponent } from './components/ver-cronograma/ver-cronograma.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearPlanificacionComponent } from './components/crear-planificacion/crear-planificacion.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { FooterEstComponent } from './components/footer-est/footer-est.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    AdminPermisosComponent,
    AlumnoCronogramaComponent,
    AlumnoPerfilComponent,
    AlumnoClasesComponent,
    AlumnoPlanificacionesComponent,
    ProfesorPerfilComponent,
    ProfesorClasesComponent,
    ProfesorPlanificacionesComponent,
    ProfesorPlanificacionParticularComponent,
    ProfesorPlanificacionCrearComponent,
    RegistrarseComponent,
    NavComponent,
    FooterComponent,
    NavAlumnoComponent,
    NavRegisAdminComponent,
    VerUsuariosComponent,
    FrasesComponent,
    VerPlanificacionComponent,
    VerCronogramaComponent,
    CrearPlanificacionComponent,
    EditarPerfilComponent,
    FooterEstComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
