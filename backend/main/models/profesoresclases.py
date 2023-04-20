from .. import db

class ProfesoresClases(db.Model):
    id_clase = db.Column(db.Integer, primary_key=True,)
    id_profesor= db.Column(db.Integer, primary_key=True)
   
    
    def __repr__(self):
        return '<usuarios:  >' 
    
    def to_json(self):
        profesoresclases_json = {
            'id_clase': self.id_clase,
            'id_profesor': self.id_profesor,
          


        }
        return profesoresclases_json


    @staticmethod
    
    def from_json(profesoresclases_json):
        id_clase = profesoresclases_json.get('id_clase')
        id_profesor = profesoresclases_json.get('id_profesor')
      
        

        return ProfesoresClases(id_clase=id_clase,
                    id_profesor=id_profesor,
                   )
