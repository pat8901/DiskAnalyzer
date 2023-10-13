import os
from werkzeug.utils import secure_filename
from flask import Flask, send_file, jsonify, request, redirect, url_for, flash
import datetime
from flask_cors import CORS
import sys
import time
import logging
from watchdog.observers import Observer, api
from watchdog.events import LoggingEventHandler
from watchdog.events import FileSystemEventHandler
import threading
import plots.writer
import plots.bar
import json
import converter
import thread  # This import will run if you just import it


x = datetime.datetime.now()
UPLOAD_FOLDER = "./reports"
ALLOWED_EXTENSIONS = {"txt", "pdf", "csv"}
app = Flask(__name__)  # Initializing flask app
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER  # what is "app.config"?
CORS(
    app
)  # Allows for any website to access my backend server resources. Not secure need to have only specific whitelist


# +=============================================================================+
# |         Checks to see if the file extention is allowed for uplaod           |
# +=============================================================================+
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


# +=============================================================================+
# |         Takes csv file and makes a json file where names are the key        |
# +=============================================================================+
@app.route("/image", methods=["GET"])
def myapp():
    image = "images/research_totals_2023-08-10.png"
    return send_file(image, mimetype="image/png")


# +=============================================================================+
# |         Recieve file upload from frontend and save file to storage          |
# +=============================================================================+
@app.route("/upload", methods=["POST"])
def getUpload():
    status = "good"
    if request.method == "POST":
        # POST data should be a formdata object which contain key:value pairs
        # Key should = "file", Value should = Json data
        # If the key ("file") is not found then cancel request
        # For more info find "FileUpload.js" on the frontend server
        if "file" not in request.files:
            flash("No file part")
            return redirect(request.url)
        # Looks for key:value pairs in the POST request.
        # The key it looks for is "file". This was set in "FileUpload.js" on the frontend
        file = request.files["file"]
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        # * I don't believe this is implmented on the frontend yet *
        if file.filename == "":
            flash("No selected file")
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
            # return redirect(url_for("download_file", name=filename))
    return status


# +=============================================================================+
# |         Return array of users to frontend found in specific report          |
# |                                                                             |
# |   *In the future may be able to dynamically return users based off report   |
# |       by using the slug and parsing the path to fid the correct report*     |
# +=============================================================================+
@app.route("/people", methods=["GET"])
def getUsers():
    array = plots.writer.nameExtractor()
    return jsonify(array)


# +=============================================================================+
# |         Takes csv file and makes a json file where names are the key        |
# +=============================================================================+
@app.route("/image/afsGroup", methods=["GET"])
def myapp0():
    image_path = "images/research_AFS Groups_histogram_2023-08-10.png"
    return send_file(image_path, mimetype="image/png")


# +=============================================================================+
# |         Takes csv file and makes a json file where names are the key        |
# +=============================================================================+
@app.route("/image/combined", methods=["GET"])
def myapp1():
    image_path = "images/research_combined_histogram_2023-08-10.png"
    return send_file(image_path, mimetype="image/png")


# +=============================================================================+
# |                      Returns dynamic routes (slug)                          |
# +=============================================================================+
@app.route("/piIMage/<string:Name>")
def sendingImage(Name):
    image = f"pngs/{Name}_user_report_2023-08-10.png"
    return send_file(image, mimetype="image/png")


# +=============================================================================+
# |    Returns dynamic routes with dynamic images based on the date (slug)      |
# +=============================================================================+
@app.route("/piIMage/<string:date>/<string:name>")
def sendingImage2(date, name):
    """add funcion here to create user report dynamically. Should it be stored after wards or discared.
    Probably store it for a little while and delete after some time
    in the function add a check to see if the file was already created and if not create the image to send.
    """
    print(date)

    image = f"pngs/{name}_user_report_{date}.png"
    return send_file(image, mimetype="image/png")


# +=============================================================================+
# |                                 *Test*                                      |
# |      Returns dynamic routes with dynamic images based on the date (slug)    |
# +=============================================================================+
@app.route("/piIMage/<string:year>/<string:date>/<string:name>")
def sendingImage3(year, date, name):
    """add funcion here to create user report dynamically. Should it be stored after wards or discared.
    Probably store it for a little while and delete after some time
    in the function add a check to see if the file was already created and if not create the image to send.
    """
    month = date[0:2]
    if month == "01":
        month = "January"
    if month == "02":
        month = "Feburary"
    if month == "03":
        month = "March"
    if month == "04":
        month = "April"
    if month == "05":
        month = "May"
    if month == "06":
        month = "June"
    if month == "07":
        month = "July"
    if month == "08":
        month = "August"
    if month == "09":
        month = "September"
    if month == "10":
        month = "October"
    if month == "11":
        month = "November"
    if month == "12":
        month = "December"

    group = "research"

    print(f"date: {date}")
    print(year)
    print(month)
    print(name)

    plots.bar.dynamic_getUserBarCharts(year, month, date, name, group)

    image = f"pngs/{year}/{month}/{name}_user_report.png"

    return send_file(image, mimetype="image/png")


# +=============================================================================+
# |           Runs csv to json converter. Returns json to the browser           |
# +=============================================================================+
@app.route("/users", methods=["GET", "POST"])
def user():
    file = converter.toJSON2()
    return jsonify(file)


# +=============================================================================+
# |               Sends user data dynamically to frontend based on the          |
# |                         name recived  from the backend                      |
# +=============================================================================+
@app.route("/user-info/<string:Name>", methods=["GET"])
def sendUserInfo(Name):
    with open("json/names_version2.json", "r") as json_file:
        data = json.load(json_file)

    return jsonify([data[Name]])


# from this route I recive the name of the dynamic route from the frontend. how to I return json data just for the dynamic name recieved?
@app.route("/test", methods=["POST"])
def recieveUsername():
    status = "good"
    content = request.json
    print(f'ID: {content["ID"]}')
    print(f'Name: {content["Name"]}')
    return status


# +=============================================================================+
# |                              Running app                                    |
# +=============================================================================+
if __name__ == "__main__":
    app.run(debug=True)
