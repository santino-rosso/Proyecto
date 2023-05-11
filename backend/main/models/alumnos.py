from .. import db
from . import UsuariosModel

class Alumnos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    dni = db.Column(db.Integer, nullable=False)
    nro_socio = db.Column(db.Integer, nullable=False)
    id_usuario = db.Column(db.Integer, db.ForeignKey("usuarios.id"), primary_key=True)

    usuario = db.relationship("Usuarios", uselist=False, back_populates="alumno", cascade = "all, delete-orphan", single_parent=True)
    planificaciones = db.relationship("Planificaciones", back_populates="alumno", cascade="all, delete-orphan")

    def __repr__(self):
        return '<Alumnos: %r %r %r >' % (self.email, self.dni, self.nro_socio)
    
    def to_json(self):
        self.usuario = db.session.query(UsuariosModel).get_or_404(self.id_usuario)
        alumnos_json = {
            'id': self.id,
            'email': str(self.email),
            'dni': self.email,
            'nro_socio': self.nro_socio,
            'usuario': self.usuario.to_json()
        }
        return alumnos_json

    def to_json_complete(self):
        planificaciones = [planificacion.to_json() for planificacion in self.planificaciones]
        alumnos_json = {
            'id': self.id,
            'email': str(self.email),
            'dni': self.email,
            'nro_socio': self.nro_socio,
            'usuario': self.usuario.to_json(),
            'planificaiones':planificaciones
        }
        return alumnos_json    

    @staticmethod
    def from_json(alumnos_json):
        id = alumnos_json.get('id')
        email = alumnos_json.get('email')
        dni = alumnos_json.get('dni')
        nro_socio = alumnos_json.get('nro_socio')
        id_usuario = alumnos_json.get('id_usuario')
        return Alumnos(id=id,
                    email = email,
                    dni = dni,
                    nro_socio = nro_socio,
                    id_usuario = id_usuario
                    )