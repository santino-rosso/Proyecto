from .. import db
from . import UsuariosModel

class Profesores(db.Model):
    id = db.Column(db.Integer, primary_key=True,)
    especialidad= db.Column(db.String(100), nullable=False)
    id_usuario = db.Column(db.Integer, db.ForeignKey("usuarios.id"), primary_key=True)
    
    usuario = db.relationship("Usuarios", uselist=False, back_populates="profesor", cascade = 'all, delete-orphan', single_parent=True)
    planificaciones = db.relationship("Planificaciones", back_populates='profesor', cascade='all, delete-orphan')
    

    def __repr__(self):
        return '<usuarios: %r   >' % (self.especialidad)
    
    def to_json(self):
        self.usuario = db.session.query(UsuariosModel).get_or_404(self.id_usuario)
        profesores_json = {
            'id': self.id,
            'especialidad': str(self.especialidad),
            'usuario': self.usuario.to_json()
        }
        return profesores_json

    def to_json_complete(self):
        planificaciones = [planificacion.to_json() for planificacion in self.planificaciones]
        
        profesores_json = {
            'id': self.id,
            'especialidad': str(self.especialidad),
            'usuario': self.usuario.to_json(),
            'planificaiones':planificaciones,
        }
        return profesores_json


    @staticmethod   
    def from_json(profesores_json):
        id = profesores_json.get('id')
        especialidad = profesores_json.get('especialidad')
        id_usuario = profesores_json.get('id_usuario')
        return Profesores(id=id,
                    especialidad=especialidad,
                    id_usuario=id_usuario
                    )
