from flask import Flask
from other_module import fn_from_other_module

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World!"