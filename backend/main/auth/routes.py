from flask import request, jsonify, Blueprint
from .. import db
from main.models import UsuariosModel
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

auth = Blueprint('auth', __name__, url_prefix='/auth')

#Método de login
@auth.route('/login', methods=['POST'])
def login():
    #Busca el usuario en la db por mail
    usuario = db.session.query(UsuariosModel).filter(UsuariosModel.email == request.get_json().get("email")).first_or_404()
    #Valida la contraseña
    if usuario.validate_pass(request.get_json().get("contraseña")):
        #Genera un nuevo token
        #Pasa el objeto usuario como identidad
        access_token = create_access_token(identity=usuario)
        #Devolver valores y token
        data = {
            'id': str(usuario.id),
            'email': usuario.email,
            'access_token': access_token
        }
        return data, 200
    else:
        return 'Contraseña Incorecta', 401

#Método de registro
@auth.route('/register', methods=['POST'])
def register():
    #Obtener usuario
    usuario = UsuariosModel.from_json(request.get_json())
    #Verificar si el mail ya existe en la db
    exists = db.session.query(UsuariosModel).filter(UsuariosModel.email == usuario.email).scalar() is not None
    if exists:
        return 'Email duplicado', 409
    else:
        try:
            #Agregar usuario a DB
            db.session.add(usuario)
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            return str(error), 409
        return usuario.to_json() , 201