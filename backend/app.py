import os
from werkzeug.utils import secure_filename
from flask import Flask, send_file, jsonify, request, redirect, url_for, flash
import datetime
from flask_cors import CORS
import sys
import time
import logging
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler
import threading
import plots
import plots.writer
import plots.tools
import json
import converter


x = datetime.datetime.now()
UPLOAD_FOLDER = "./api"
ALLOWED_EXTENSIONS = {"txt", "pdf", "csv"}

# Initializing flask app
app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
# Allows for any website to access my backend server resources. Not secure need to have only specific whitelist
CORS(app)


# +=============================================================================+
# |                                  *TEST*                                     |
# |                         Testing daemon thread                               |
# +=============================================================================+
def backroundTask():
    count = 0
    while True:
        time.sleep(1)
        print(f"Count: {count} hello")
        count += 1


my_thread = threading.Thread(target=backroundTask, daemon=True, name="my_thread")
my_thread.start()


# +=============================================================================+
# |                    Watchdog that runs on backround thread                   |
# |           that watch for file changes in a folder and execute code          |
# +=============================================================================+
def my_watchdog():
    print("I entered watchdog")
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s -%(process)d -%(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    # Setting the file we want to monitor
    # path = sys.argv[1] if len(sys.argv) > 1 else "."
    path = "./api"
    print(path)

    # Determines what to do when a event occurs
    event_handler = LoggingEventHandler()
    event_handler.on_created = testcall
    event_handler.on_modified = testcall
    # The entity that will be watching the folder and call the handler
    # when it detects something
    observer = Observer()
    # This tells the observer entity what parameters it will take. Determining how it will function
    observer.schedule(event_handler, path, recursive=True)
    observer.start()

    try:
        while True:
            print("Watching for changes...")
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        observer.join()


watchdog_thread = threading.Thread(
    target=my_watchdog, daemon=True, name="watchdog_thread"
)
watchdog_thread.start()


def testcall(event):
    print(f"you called a fucntion ")


# +==============================================================================
# |         Takes csv file and makes a json file where names are the key        |
# +==============================================================================
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


# +==============================================================================
# |         Takes csv file and makes a json file where names are the key        |
# +==============================================================================
@app.route("/image", methods=["GET"])
def myapp():
    image = "images/research_totals_2023-08-10.png"
    return send_file(image, mimetype="image/png")


@app.route("/upload", methods=["POST"])
def getUpload():
    status = "good"
    if request.method == "POST":
        # check if the post request has the file part
        if "file" not in request.files:
            flash("No file part")
            return redirect(request.url)
        file = request.files["file"]
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
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
    report_path = "./reports/base/Storage_Rep_2023-08-10.pdf"
    array = plots.writer.nameExtractor()
    return jsonify(array)


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


# +==============================================================================
# |           Runs csv to json converter. Returns json to the browser           |
# +==============================================================================
@app.route("/users", methods=["GET", "POST"])
def user():
    file = converter.toJSON2()
    return jsonify(file)


# +==============================================================================
# |               Sends user data dynamically to frontend based on the          |
# |                         name recived  from the backend                      |
# +==============================================================================
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


# +==============================================================================
# |                              Running app                                    |
# +==============================================================================
if __name__ == "__main__":
    app.run(debug=True)
