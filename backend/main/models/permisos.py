from .. import db
from . import UsuariosModel

class Permisos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    resource = db.Column(db.String(50), nullable=False)
    method = db.Column(db.String(50), nullable=False)
    rol= db.Column(db.String(50), nullable=False)
   
    def __repr__(self):
        return '<Permiso: %r %r %r >' % (self.rol,self.resource,self.method)

    def to_json(self):
        permisos_json = {
            'id': self.id,
            'rol': str(self.rol),
            'method': str(self.method),
            'resource': str(self.resource)
        }
        return permisos_json

@staticmethod   
def from_json(permisos_json):
    id = permisos_json.get('id')
    rol = permisos_json.get('rol')
    method = permisos_json.get('method')
    resource = permisos_json.get('resource')
    return Permisos(id=id,
                    rol=rol,
                    method=method,
                    resource=resource)
