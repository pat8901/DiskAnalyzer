# Note: Make better names for functions
import os
from werkzeug.utils import secure_filename
from flask import Flask, send_file, jsonify, request, redirect, url_for, flash
from flask_cors import CORS
from watchdog.observers import Observer, api
from watchdog.events import LoggingEventHandler
from watchdog.events import FileSystemEventHandler
import plots.writer
import plots.bar
import json
import backend.src.converter as converter
import backend.src.thread as thread  # This import will run if you just import it. *Is this how one should be doing this?*

# import datetime
# import sys
# import time
# import logging
# import threading

# When a report is uploaded it will be saved into this directory
UPLOAD_FOLDER = "./reports"
# The only allowed extentions that can be uploaded. *Probably just be .pdf*
ALLOWED_EXTENSIONS = {"txt", "pdf", "csv"}
# Initializing flask app
app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER  # what is "app.config"?
# Allows for any website to access my backend server resources. *Not secure need to have only specific whitelist*
CORS(app)


# +=============================================================================+
# |         Checks to see if the file extention is allowed for uplaod           |
# +=============================================================================+
def allowed_file_extension(filename):
    # Parses the filename to find the extenstion, which is then compared against the allowed extensions
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


# +=============================================================================+
# |                     Recieve file upload from frontend and                   |
# |                 save file to storage if it passes the tests                 |
# +=============================================================================+
@app.route("/upload", methods=["POST"])
def getUpload():
    status = "good"  # may need to change this to a better status code for returning
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
        # If the file passes the allowed file extension then accept the file and continue to process it
        if file and allowed_file_extension(file.filename):
            # Pass the file name through this function to make the file name more secure
            filename = secure_filename(file.filename)
            # Save the file to specified path
            file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
    return status


# +=============================================================================+
# |         Return array of users to frontend found in specific report          |
# |                                                                             |
# |   *In the future may be able to dynamically return users based off report   |
# |       by using the slug and parsing the path to fid the correct report*     |
# |                                 *Test this*                                 |
# +=============================================================================+
@app.route("/people", methods=["GET"])
def getUsers():
    array = plots.writer.nameExtractor()  # List of names found in reports
    return jsonify(array)  # Return the list in JSON format to the frontend


# +=============================================================================+
# |                     Returns research totals graph                           |
# |                 *Need to make this dynamic based on date*                   |
# +=============================================================================+
@app.route("/image", methods=["GET"])
def sendResearchTotalGraph():
    image = "images/research_totals_2023-08-10.png"
    return send_file(image, mimetype="image/png")  # Sending png to the frontend


# +=============================================================================+
# |                 Returns research AFS Groups histogram graph                 |
# |                 *Need to make this dynamic based on date*                   |
# +=============================================================================+
@app.route("/image/afsGroup", methods=["GET"])
def sendResearchAfsGraph():
    image_path = "images/research_AFS Groups_histogram_2023-08-10.png"
    return send_file(image_path, mimetype="image/png")  # Sending png to the frontend


# +=============================================================================+
# |              Returns research combined groups histogram graph               |
# |                 *Need to make this dynamic based on date*                   |
# +=============================================================================+
@app.route("/image/combined", methods=["GET"])
def sendResearchCombinedGraph():
    image_path = "images/research_combined_histogram_2023-08-10.png"
    return send_file(image_path, mimetype="image/png")  # Sending png to the frontend


# +=============================================================================+
# |             Returns dynamic images based on routes (slug)                   |
# |                             *Deprecated*                                    |
# +=============================================================================+
@app.route("/piIMage/<string:Name>")
def sendingImage(Name):
    image = f"pngs/{Name}_user_report_2023-08-10.png"
    return send_file(image, mimetype="image/png")


# +=============================================================================+
# |             Returns dynamic images based on the date (slug)                 |
# |                             *Deprecated*                                    |
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
# |                                 *Main*                                      |
# |             Returns dynamic images based on the date (slug)                 |
# |                                                                             |
# | This route is split up by year/month/name This is to allow for paths that   |
# |  make more sense. Doing it this way also help with regardless of what date  |
# |     pick in the month you will also recieve the graph for that month        |
# +=============================================================================+
@app.route("/piIMage/<string:year>/<string:date>/<string:name>")
def sendingImage3(year, date, name):
    """
    Probably store it for a little while and delete after some time
    in the function add a check to see if the file was already created and if not create the image to send.
    """
    # Extracting the month from the given date. Based on the month it will be changed from number format to words
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

    # Group is hardcoded to be research. *Fix this to be dynamic in the future*
    group = "research"

    # Debugging info
    # print(f"date: {date}")
    # print(year)
    # print(month)
    # print(name)

    # Create an image based on the given route
    plots.bar.dynamic_getUserBarCharts(year, month, date, name, group)
    # Store created image into variable
    image = f"pngs/{year}/{month}/{name}_user_report.png"
    # Send the image to the frontend
    return send_file(image, mimetype="image/png")


# +=============================================================================+
# |           Runs csv to json converter. Returns json to the browser           |
# +=============================================================================+
@app.route("/users", methods=["GET", "POST"])
def sendCsvJson():
    file = converter.toJSON2()
    return jsonify(file)


# +=============================================================================+
# |               Sends user data dynamically to frontend based on the          |
# |                         name recived  from the backend                      |
# +=============================================================================+
@app.route("/user-info/<string:Name>", methods=["GET"])
def sendUserInfo(Name):
    with open("json/names_version2.json", "r") as json_file:  # Reading json file
        data = json.load(json_file)  # Loading JSON data into variable

    return jsonify([data[Name]])  # return JSON datadyamically based on name given


# +=============================================================================+
# |                              Running app                                    |
# +=============================================================================+
if __name__ == "__main__":
    # When app goes to production get rid of debug and use proper calls
    app.run(debug=True)
