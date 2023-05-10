from .. import db
from datetime import datetime
from . import ProfesoresModel
from . import AlumnosModel

class Planificaciones(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.DateTime, nullable=False)
    tipo = db.Column(db.String(100), nullable=False)
    lunes = db.Column(db.String(100), nullable=False)
    martes = db.Column(db.String(100), nullable=False)
    miercoles = db.Column(db.String(100), nullable=False)
    jueves = db.Column(db.String(100), nullable=False)
    viernes = db.Column(db.String(100), nullable=False)
    sabado = db.Column(db.String(100), nullable=False)
    id_profesor = db.Column(db.Integer, db.ForeignKey("profesores.id"), primary_key=True)
    id_alumno = db.Column(db.Integer, db.ForeignKey("alumnos.id"), primary_key=True)
    profesor= db.relationship("Profesores", back_populates="planificaciones",uselist=False, single_parent=True)
    alumno = db.relationship("Alumnos", back_populates="planificaciones",uselist=False, single_parent=True)

    def __repr__(self):
        return '<Planificaciones: %r %r %r %r %r %r %r %r %r %r >' % (self.fecha, self.tipo, self.lunes, self.martes, self.miercoles, self.jueves, self.viernes, self.sabado,self.id_alumno,self.id_profesor)
    
    def to_json(self):
        self.profesor = db.session.query(ProfesoresModel).get_or_404(self.id_profesor)
        self.alumno = db.session.query(AlumnosModel).get_or_404(self.id_alumno)
        planificaiones_json = {
            'id': self.id,
            'fecha': str(self.fecha.strftime("%d-%m-%Y")),
            'tipo': str(self.tipo),
            'lunes': str(self.lunes),
            'martes': str(self.martes),
            'miercoles': str(self.miercoles),
            'jueves': str(self.jueves),
            'viernes': str(self.viernes),
            'sabado': str(self.sabado),
            'id_profesor': self.id_profesor,
            'id_alumno': self.id_alumno,
            'profesor': self.profesor.to_json(),
            'alumno':self.alumno.to_json()
        }
        return planificaiones_json

    @staticmethod
    
    def from_json(planificaiones_json):
        id = planificaiones_json.get('id')
        fecha =  datetime.strptime(planificaiones_json.get('fecha'), '%d-%m-%Y')
        tipo = planificaiones_json.get('tipo')
        lunes = planificaiones_json.get('lunes')
        martes = planificaiones_json.get('martes')
        miercoles = planificaiones_json.get('miercoles')
        jueves = planificaiones_json.get('jueves')
        viernes = planificaiones_json.get('viernes')
        sabado = planificaiones_json.get('sabado')
        id_profesor = planificaiones_json.get('id_profesor')
        id_alumno = planificaiones_json.get('id_alumno')
        return Planificaciones(id=id,
                    fecha = fecha,
                    tipo = tipo,
                    lunes = lunes,
                    martes = martes,
                    miercoles = miercoles,
                    jueves = jueves,
                    viernes = viernes,
                    sabado = sabado,
                    id_profesor = id_profesor,
                    id_alumno = id_alumno
                    )