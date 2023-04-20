from .. import db
class Profesores(db.Model):
    id = db.Column(db.Integer, primary_key=True,)
    especialidad= db.Column(db.String(100), nullable=False)

    
    def __repr__(self):
        return '<usuarios: %r   >' % (self.especialidad)
    
    def to_json(self):
        profesores_json = {
            'id': self.id,
            'especialidad': str(self.especialidad),
    
        }
        return profesores_json


    @staticmethod
    
    def from_json(profesores_json):
        id = profesores_json.get('id')
        especialidad = profesores_json.get('especialidad')
       

        return Profesores(id=id,
                    especialidad=especialidad,
                    )
