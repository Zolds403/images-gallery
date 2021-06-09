from flask import Flask

app = Flask(__name__)


def hello():
    return "Hello, World!"


app.route("/")(hello)

#@app.route("/")
#def hello():
#    return "Hello, World!"
