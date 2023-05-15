from .. import db
from datetime import datetime

profesores_clases = db.Table("profesores_clases",
    db.Column("id_clase",db.Integer,db.ForeignKey("clases.id"),primary_key=True),
    db.Column("id_profesor",db.Integer,db.ForeignKey("profesores.id"),primary_key=True)
    )


class Clases(db.Model):
    id = db.Column(db.Integer, primary_key=True,)
    nombre_clase= db.Column(db.String(100), nullable=False)
    horario_clase= db.Column(db.DateTime, nullable=False)
    profesores = db.relationship('Profesores', secondary=profesores_clases, backref=db.backref('clases', lazy='dynamic'))

    def __repr__(self):
        return '<usuarios: %r %r   >' % (self.nombre_clase,self.horario_clase)
    
    def to_json(self):
        clases_json = {
            'id': self.id,
            'nombre_clase': str(self.nombre_clase),
            'horario_clase': str(self.horario_clase.strftime("%d/%m/%Y, %H:%M:%S"))
        }
        return clases_json

    @staticmethod
    def from_json(clases_json):
        id = clases_json.get('id')
        nombre_clase = clases_json.get('nombre_clase')
        horario_clase = datetime.strptime(clases_json.get('horario_clase'),"%d/%m/%Y, %H:%M:%S")
        return Clases(id=id,
                    nombre_clase=nombre_clase,
                    horario_clase=horario_clase,
                    )
