from .. import db
from . import ProfesoresModel
from . import ClasesModel

class ProfesoresClases(db.Model):
    id_clase = db.Column(db.Integer, db.ForeignKey("clases.id"), primary_key=True)
    id_profesor= db.Column(db.Integer, db.ForeignKey("profesores.id"), primary_key=True)
    profesor=db.relationship("Profesores", back_populates="profesoresclases",uselist=False, single_parent=True)
    clase=db.relationship("Clases", back_populates="profesoresclases",uselist=False, single_parent=True)

   
    
    def __repr__(self):
        return '<Planificaciones: %r %r  >'  % (self.id_clase, self.id_profesor,)
    
    def to_json(self):
        self.profesor = db.session.query(ProfesoresModel).get_or_404(self.id_profesor)
        self.clase = db.session.query(ClasesModel).get_or_404(self.id_clase)
        profesoresclases_json = {
            'id_clase': self.id_clase,
            'id_profesor': self.id_profesor,
            'profesor': self.profesor.to_json(),
            'clase':self.clase.to_json()
          


        }
        return profesoresclases_json


    @staticmethod
    
    def from_json(profesoresclases_json):
        id_clase = profesoresclases_json.get('id_clase')
        id_profesor = profesoresclases_json.get('id_profesor')
      
        

        return ProfesoresClases(id_clase=id_clase,
                    id_profesor=id_profesor,
                   )
