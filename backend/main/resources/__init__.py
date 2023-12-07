#Cambiar el nombre en la importación para clarificar y evitar conflictos
from .usuario import Usuario as UsuarioResource
from .usuario import Usuarios as UsuariosResource
from .usuario import UsuarioAlumno as UsuarioAlumnoResource
from .usuario import UsuariosAlumnos as UsuariosAlumnosResource
from .usuario import UsuarioProfesor as UsuarioProfesorResource
from .usuario import UsuariosProfesores as UsuariosProfesoresResource
from .planificacion import PlanificacionAlumno as PlanificacionAlumnoResource
from .planificacion import PlanificacionProfesor as PlanificacionProfesorResource
from .planificacion import PlanificacionesProfesores as PlanificacionesProfesoresResource
from .clase import Clase as ClaseResource
from .clase import Clases as ClasesResource
from .clase import ProfesorClases as ProfesorClasesResource
from .clase import ProfesorClase as ProfesorClaseResource
from .pago import Pago as PagoResource
from .login import Login as LoginResource
from .permiso import Permiso as PermisoResource
from .permiso import Permisos as PermisosResource