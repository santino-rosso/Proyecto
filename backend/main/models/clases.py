from .. import db
import datetime


class Clases(db.Model):
    id = db.Column(db.Integer, primary_key=True,)
    nombre_clase= db.Column(db.String(100), nullable=False)
    horario_clase= db.Column(db.DateTime, nullable=False)

    
    def __repr__(self):
        return '<usuarios: %r %r   >' % (self.nombre_clase,self.horario_clase)
    
    def to_json(self):
        clases_json = {
            'id': self.id,
            'nombre_clase': str(self.nombre_clase),
            'horario_clase': datetime.datetime(self.horario_clase)
            


        }
        return clases_json


    @staticmethod
    
    def from_json(clases_json):
        id = clases_json.get('id')
        nombre_clase = clases_json.get('nombre_clase')
        horario_clase = clases_json.get('horario_clase')
        

        return Clases(id=id,
                    nombre_clase=nombre_clase,
                    horario_clase=horario_clase,
                    )
