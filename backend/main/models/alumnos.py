from .. import db

class Alumnos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    dni = db.Column(db.Integer, nullable=False)
    nro_socio = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<Alumnos: %r %r %r >' % (self.email, self.dni, self.nro_socio)
    
    def to_json(self):
        alumnos_json = {
            'id': self.id,
            'email': str(self.email),
            'dni': self.email,
            'nro_socio': self.nro_socio

        }
        return alumnos_json

    @staticmethod
    
    def from_json(alumnos_json):
        id = alumnos_json.get('id')
        email = alumnos_json.get('email')
        dni = alumnos_json.get('dni')
        nro_socio = alumnos_json.get('nro_socio')
        return Alumnos(id=id,
                    email = email,
                    dni = dni,
                    nro_socio = nro_socio
                    )