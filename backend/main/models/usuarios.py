from .. import db

class Usuarios(db.Model):
    id = db.Column(db.Integer, primary_key=True,)
    rol= db.Column(db.String(100), nullable=False)
    nombre= db.Column(db.String(100), nullable=False)
    apellido= db.Column(db.String(100), nullable=False)
    contraseña= db.Column(db.String(100), nullable=False)
    telefono= db.Column(db.Integer, nullable=False)
    profesor= db.relationship("Profesores", uselist=False,back_populates="usuario",cascade="all, delete-orphan",single_parent=True)
    alumno=db.relationship("Alumnos", uselist=False, back_populates="usuario", cascade="all, delete-orphan",single_parent=True)
    def __repr__(self):
        return '<usuarios: %r %r %r %r  >' % (self.rol,self.nombre,self.apellido,self.telefono)
    
    def to_json(self):
        usuarios_json = {
            'id': self.id,
            'rol': str(self.rol),
            'nombre':str(self.nombre),
            'apellido':str(self.apellido),
            'contraseña':str(self.contraseña),
            'telefono': self.telefono,


        }
        return usuarios_json
    
    


    @staticmethod
    
    def from_json(usuarios_json):
        id = usuarios_json.get('id')
        rol = usuarios_json.get('rol')
        nombre = usuarios_json.get('nombre')
        apellido= usuarios_json.get('apellido')
        contraseña = usuarios_json.get('contraseña')
        telefono = usuarios_json.get('telefono')

        return Usuarios(id=id,
                    rol=rol,
                    nombre=nombre,
                    apellido=apellido,
                    contraseña=contraseña,
                    telefono=telefono,

                    )
