# Welcome
This is the backend server designed to create matplotlib plots and serve them to the frontend

# Getting Started

Setup virtual enviroment
---------------------------
It is recommended that you create a virtual enviroment. I recommend using a python virtual enviroment tool called `venv`.\
To create a virtual enviroment use the command `$ python -m venv venv`.\
For additional information on how to use `venv` please vist the documentation page at <https://docs.python.org/3/library/venv.html>.

Installing dependencies
---------------------------
Once connected to a virtual enviroment, install the required dependencies. The dependencies are stored in a file called `requirements.txt`. \
You can install all the packages in `requirements.txt` by first navigating to the root directory (i.e., /path/to/backend) and using the command: \
`$ python -m pip install -r requirements.txt `

# Running Backend Server

Flask
---------------------------
(At this point we should now have a functioning virtual enviroment with all the required dependencies installed). \
\
Flask is a lightwight framework that allows us to create a server using python. \
For documentation on Flask navigate to <https://flask.palletsprojects.com/en/3.0.x/>. \
For a quickstart guide navigate to <https://flask.palletsprojects.com/en/3.0.x/quickstart/>. \
\
The code that dictates Flask's server behavior can be found in `app.py`. \
To start the server navigate to the root directory and run the command: `$ flask run` \
The server will begin to run prompting you with information about the status of the server. Please take note of the address the server is running on. 

Discalimer 
---------------------------
Please know that this program is still in beta testing and this server is not meant for production. This is a development server only. 
When it is ready for production you must use a production WSGI server instead. 