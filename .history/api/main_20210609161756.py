import requests
from flask import Flask, request

UNSPLASH_URL = 'https://api.unsplash.com/photos/random'
UNSPLASH_KEY = 'QK3iVqi1tJ2jeoEpxnx2ekL9wXviLeX3JzczlavVqkM'

app = Flask(__name__)


@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {"Authorization": "Client-ID " + UNSPLASH_KEY}
    requests.get(url=UNSPLASH_URL, )
    return {"word": word}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
