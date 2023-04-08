#Cambiar el nombre en la importación para clarificar y evitar conflictos
from .usuario import Usuario as UsuarioResource
from .usuario import Usuarios as UsuariosResource
from .usuario import UsuarioAlumno as UsuarioAlumnoResource
from .usuario import UsuariosAlumnos as UsuariosAlumnosResource
from .usuario import UsuarioProfesor as UsuarioProfesorResource

from .profesor import Profesores as ProfesoresResource