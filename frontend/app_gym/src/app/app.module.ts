import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminAlumnoComponent } from './pages/admin-alumno/admin-alumno.component';
import { AdminEditarAlumnoComponent } from './pages/admin-editar-alumno/admin-editar-alumno.component';
import { AdminEditarProfesorComponent } from './pages/admin-editar-profesor/admin-editar-profesor.component';
import { AdminProfesorComponent } from './pages/admin-profesor/admin-profesor.component';
import { AlumnoCronogramaComponent } from './pages/alumno-cronograma/alumno-cronograma.component';
import { AlumnoPerfilComponent } from './pages/alumno-perfil/alumno-perfil.component';
import { AlumnoPerfilModifComponent } from './pages/alumno-perfil-modif/alumno-perfil-modif.component';
import { AlumnoPlanificacionesComponent } from './pages/alumno-planificaciones/alumno-planificaciones.component';
import { ProfesorPerfilComponent } from './pages/profesor-perfil/profesor-perfil.component';
import { ProfesorPerfilModifComponent } from './pages/profesor-perfil-modif/profesor-perfil-modif.component';
import { ProfesorPlanificacionesComponent } from './pages/profesor-planificaciones/profesor-planificaciones.component';
import { ProfesorPlanificacionParticularComponent } from './pages/profesor-planificacion-particular/profesor-planificacion-particular.component';
import { ProfesorPlanificacionParticularEditarComponent } from './pages/profesor-planificacion-particular-editar/profesor-planificacion-particular-editar.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { NavAlumnoComponent } from './components/nav-alumno/nav-alumno.component';
import { NavRegisAdminComponent } from './components/nav-regis-admin/nav-regis-admin.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { FrasesComponent } from './components/frases/frases.component';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';
import { VerPlanificacionComponent } from './components/ver-planificacion/ver-planificacion.component';
import { HttpClientModule } from '@angular/common/http'
import { VerCronogramaComponent } from './components/ver-cronograma/ver-cronograma.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    AdminAlumnoComponent,
    AdminEditarAlumnoComponent,
    AdminEditarProfesorComponent,
    AdminProfesorComponent,
    AlumnoCronogramaComponent,
    AlumnoPerfilComponent,
    AlumnoPerfilModifComponent,
    AlumnoPlanificacionesComponent,
    ProfesorPerfilComponent,
    ProfesorPerfilModifComponent,
    ProfesorPlanificacionesComponent,
    ProfesorPlanificacionParticularComponent,
    ProfesorPlanificacionParticularEditarComponent,
    RegistrarseComponent,
    NavComponent,
    FooterComponent,
    NavAdminComponent,
    NavAlumnoComponent,
    NavRegisAdminComponent,
    EditarUsuarioComponent,
    VerUsuariosComponent,
    FrasesComponent,
    VerPlanificacionComponent,
    VerCronogramaComponent,
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
