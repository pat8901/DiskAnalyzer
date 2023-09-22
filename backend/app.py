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
# Allows for any website to access my backend server resources. Not secure need to have only specific whitelist
CORS(app)


# Route for seeing a data
@app.route("/data")
def get_time():
    # Returning an api for showing in  reactjs
    return {"Name": "John Doe", "Age": "10000", "Date": x, "programming": "python"}


def sendImage():
    image_path = "pngs/Patrick Joseph Flynn_user_report_2023-08-10.png"
    # img_dir = "backend/images"
    # img_list = os.listdir(img_dir)
    # img_path = os.path.join(img_dir, random.choice(img_list))
    return image_path


def sendImage2():
    image_path = f"pngs/_user_report_2023-08-10.png"
    # img_dir = "backend/images"
    # img_list = os.listdir(img_dir)
    # img_path = os.path.join(img_dir, random.choice(img_list))
    return image_path


@app.route("/getUser2", methods=["POST"])
def getUser2():
    status = "good"
    content = request.json
    name = content["result"]
    image_path = f"pngs/{name}_user_report_2023-08-10.png"
    print(f"Type: {type(name)}")
    print(f"Name recieved: {name}")
    return image_path


@app.route("/image")
def myapp():
    image = sendImage()
    return send_file(image, mimetype="image/png")


# I am working on this currently
@app.route("/piIMage/<string:Name>")
def sendingImage(Name):
    image = f"pngs/{Name}_user_report_2023-08-10.png"
    return send_file(image, mimetype="image/png")


@app.route("/getImage")
def getImage():
    image = getUser2()
    return send_file(image, mimetype="image/png")


@app.route("/getUser", methods=["POST"])
def getUser():
    status = "good"
    content = request.json
    name = content["result"]
    image_path = f"pngs/{name}_user_report_2023-08-10.png"
    print(f"Type: {type(name)}")
    print(f"Name recieved: {name}")
    return image_path


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
    status = "good"
    content = request.json
    print(f'ID: {content["ID"]}')
    print(f'Name: {content["Name"]}')
    return status


# Running app
if __name__ == "__main__":
    app.run(debug=True)
