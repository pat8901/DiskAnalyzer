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


# @app.route("/getUser2", methods=["POST"])
# def getUser2():
#     status = "good"
#     content = request.json
#     name = content["result"]
#     image_path = f"pngs/{name}_user_report_2023-08-10.png"
#     print(f"Type: {type(name)}")
#     print(f"Name recieved: {name}")
#     return image_path


# +==============================================================================
# |         Takes csv file and makes a json file where names are the key        |
# +==============================================================================
@app.route("/image", methods=["GET"])
def myapp():
    image = "images/research_totals_2023-08-10.png"
    return send_file(image, mimetype="image/png")


# +==============================================================================
# |         Takes csv file and makes a json file where names are the key        |
# +==============================================================================
@app.route("/image/afsGroup", methods=["GET"])
def myapp0():
    image_path = "images/research_AFS Groups_histogram_2023-08-10.png"
    return send_file(image_path, mimetype="image/png")


# +==============================================================================
# |         Takes csv file and makes a json file where names are the key        |
# +==============================================================================
@app.route("/image/combined", methods=["GET"])
def myapp1():
    image_path = "images/research_combined_histogram_2023-08-10.png"
    return send_file(image_path, mimetype="image/png")


# +==============================================================================
# |                      Returns dynamic routes (slug)                          |
# +==============================================================================
@app.route("/piIMage/<string:Name>")
def sendingImage(Name):
    image = f"pngs/{Name}_user_report_2023-08-10.png"
    return send_file(image, mimetype="image/png")


# @app.route("/getImage")
# def getImage():
#     image = getUser2()
#     return send_file(image, mimetype="image/png")


# @app.route("/getUser", methods=["POST"])
# def getUser():
#     status = "good"
#     content = request.json
#     name = content["result"]
#     image_path = f"pngs/{name}_user_report_2023-08-10.png"
#     print(f"Type: {type(name)}")
#     print(f"Name recieved: {name}")
#     return image_path


# +==============================================================================
# |           Runs csv to json converter. Returns json to the browser           |
# +==============================================================================
@app.route("/users", methods=["GET", "POST"])
def user():
    file = converter.toJSON2()
    return jsonify(file)


# @app.route("/username", methods=["GET", "POST"])
# def sendUsername():

#     response = [
#         {
#             "id": "1",
#             "name": "Patrick Joseph Flynn",
#             "DepCode": "CSE",
#             "AFS Groups": "154246196295",
#             "Users AFS": "18783536436",
#             "Users Panas.": "43559500120",
#             "total": "216589232851",
#         }
#     ]
#     # print(jsonify(response))
#     return response


# from this route I recive the name of the dynamic route from the frontend. how to I return json data just for the dynamic name recieved?
@app.route("/test", methods=["POST"])
def recieveUsername():
    status = "good"
    content = request.json
    print(f'ID: {content["ID"]}')
    print(f'Name: {content["Name"]}')
    return status


# # need a better json source file.One that uses names instead of numbers for indexes
# @app.route("/user-info", methods=["GET"])
# def sendUserInfo():
#     with open("json/names_version2.json", "r") as json_file:
#         data = json.load(json_file)

#     return jsonify([data["Steven A Corcelli"]])


# +==============================================================================
# |               Sends user data dynamically to frontend based on the          |
# |                         name recived  from the backend                      |
# +==============================================================================
@app.route("/user-info/<string:Name>", methods=["GET"])
def sendUserInfo(Name):
    with open("json/names_version2.json", "r") as json_file:
        data = json.load(json_file)

    return jsonify([data[Name]])


# +==============================================================================
# |                              Running app                                    |
# +==============================================================================
if __name__ == "__main__":
    app.run(debug=True)
