from flask import Flask
from flask_restful import Api, Resource
from resources.actions.login import Login
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(Login, '/Login')

if __name__ == '__main__':
    app.run(debug=False)