from .. import db
from werkzeug.security import generate_password_hash, check_password_hash

class Usuarios(db.Model):
    id = db.Column(db.Integer, primary_key=True,)
    rol = db.Column(db.String(10), nullable=False, server_default="Alumno")
    dni = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(100), nullable=False)
    nombre= db.Column(db.String(100), nullable=False)
    apellido= db.Column(db.String(100), nullable=False)
    contraseña = db.Column(db.String(128), nullable=False)
    telefono= db.Column(db.Integer, nullable=False)
    profesor= db.relationship("Profesores", uselist=False,back_populates="usuario",cascade="all, delete-orphan",single_parent=True)
    alumno=db.relationship("Alumnos", uselist=False, back_populates="usuario", cascade="all, delete-orphan",single_parent=True)

    #Getter de la contraseña plana no permite leerla
    @property
    def plain_contraseña(self):
        raise AttributeError('Contraseña no puede ser leida')
    #Setter de la contraseña toma un valor en texto plano
    # calcula el hash y lo guarda en el atributo password
    @plain_contraseña.setter
    def plain_contraseña(self, contraseña):
        self.contraseña = generate_password_hash(contraseña)
    #Método que compara una contraseña en texto plano con el hash guardado en la db
    def validate_pass(self,contraseña):
        return check_password_hash(self.contraseña, contraseña)

    def __repr__(self):
        return '<usuarios: %r %r %r %r %r >' % (self.rol,self.nombre,self.apellido,self.telefono,self.email,self.dni)
    
    def to_json(self):
        usuarios_json = {
            'id': self.id,
            'dni': self.dni,
            'rol': str(self.rol),
            'nombre':str(self.nombre),
            'apellido':str(self.apellido),
            'contraseña':str(self.contraseña),
            'telefono': self.telefono,
            'email': str(self.email),
        }
        return usuarios_json
    

    @staticmethod
    
    def from_json(usuarios_json):
        id = usuarios_json.get('id')
        dni = usuarios_json.get('dni')
        rol = usuarios_json.get('rol')
        nombre = usuarios_json.get('nombre')
        apellido= usuarios_json.get('apellido')
        contraseña = usuarios_json.get('contraseña')
        telefono = usuarios_json.get('telefono')
        email =usuarios_json.get('email')

        return Usuarios(id=id,
                    dni=dni,
                    rol=rol,
                    nombre=nombre,
                    apellido=apellido,
                    plain_contraseña=contraseña,
                    telefono=telefono,
                    email=email,
                    )
