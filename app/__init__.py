
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
