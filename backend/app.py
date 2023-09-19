# Import flask and datetime module for showing date and time
from flask import Flask, send_file, jsonify, request
import datetime
import os
import csv
import json
import converter
from datetime import timedelta
from functools import update_wrapper
from flask_cors import CORS


x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app)


# Route for seeing a data
@app.route("/data")
def get_time():
    # Returning an api for showing in  reactjs
    return {"Name": "John Doe", "Age": "10000", "Date": x, "programming": "python"}


def sendImage():
    image_path = "images/research_combined_histogram_2023-08-10.png"
    # img_dir = "backend/images"
    # img_list = os.listdir(img_dir)
    # img_path = os.path.join(img_dir, random.choice(img_list))
    return image_path


@app.route("/image")
def myapp():
    image = sendImage()
    return send_file(image, mimetype="image/png")


@app.route("/users", methods=["GET", "POST"])
def user():
    file = converter.toJSON2()
    return jsonify(file)


@app.route("/username", methods=["GET", "POST"])
def sendUsername():
    id = 1
    user = "John Smith"
    response = [
        {
            "id": "1",
            "name": "Patrick Joseph Flynn",
            "DepCode": "CSE",
            "AFS Groups": "154246196295",
            "Users AFS": "18783536436",
            "Users Panas.": "43559500120",
            "total": "216589232851",
        }
    ]
    # print(jsonify(response))
    return response


@app.route("/test", methods=["POST"])
def recieveUsername():
    id = 1
    user = "John Smith"
    data = request.json()
    print(data.get("whisper"))
    return data


# Running app
if __name__ == "__main__":
    app.run(debug=True)
