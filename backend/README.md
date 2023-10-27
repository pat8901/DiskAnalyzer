# Welcome
This is the backend server designed to create matplotlib plots and serve them to the frontend

# Getting Started

Setup virtual enviroment
---------------------------
It is recommended that you create a virtual enviroment. In the making of this program the virtual enviroment tool that used was `venv` so I will recommend us this one.
For additional information on how to use venv please vist their documentation page at <https://docs.python.org/3/library/venv.html>_.

Installing dependencies
---------------------------
Once the virtual enviroment has been set up you will have required dependencies in order to run the program. The dependencies are stored in a file called `requirments.txt`.
You can install all the packages in `requirments.txt` with following command: \
$ python -m pip install -r requirements.txt  
\
or
\
$ pip install -r requirements.txt

# Running Backend Server

Flask
---------------------------
From the previous steps we should now have a functioning virtual envirment with all the required dependencies installed. 
Flask is a lightwight framework that allows use to create a python based server. The code that dictates its behavior can be found in `app.py`.
To start the server you simply run the following command: $ flask run
You will then be prompted with information about the status of the server. Most importantly take note of the address the server is running on. 

Discalimer 
---------------------------
Please know that this program is still in beta testing and this server is not meant for production. This is a development server only. 
When it is ready for production you must use a production WSGI server instead. 