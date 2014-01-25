
from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

# TODO: move configuration to a separate file
app = Flask(__name__, static_folder='../static', template_folder='../templates')
app.debug = True

# Create dummy secrey key so we can use sessions
app.config['SECRET_KEY'] = '123456790'

# Create in-memory database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)

app.config['SAML'] = dict(
    assertion_consumer_service_url='http://localhost:7070/saml/consume',
    issuer='python-saml',
    name_identifier_format='urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
    idp_sso_target_url='https://app.onelogin.com/saml/signon/24295206',
)

