from flask import Flask, send_file, jsonify, request
import datetime
import json
import converter
from flask_cors import CORS
import plots
import plots.writer
import plots.tools


x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
# Allows for any website to access my backend server resources. Not secure need to have only specific whitelist
CORS(app)


# +==============================================================================
# |         Takes csv file and makes a json file where names are the key        |
# +==============================================================================
@app.route("/image", methods=["GET"])
def myapp():
    image = "images/research_totals_2023-08-10.png"
    return send_file(image, mimetype="image/png")


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
