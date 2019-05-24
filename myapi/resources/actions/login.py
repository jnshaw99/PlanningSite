from flask_restful import Resource, reqparse
from resources.dbaccess.logindb import LoginActor

class Login(Resource):

    parser= reqparse.RequestParser()

    def get(self):
        self.parser.add_argument('username')
        self.parser.add_argument('password')
        arg = self.parser.parse_args()
        return LoginActor.login_request(arg['username'],arg['password'])
    def post(self):
        self.parser.add_argument('username')
        self.parser.add_argument('password')
        arg = self.parser.parse_args()
        return LoginActor.login_request(arg['username'],arg['password'])
