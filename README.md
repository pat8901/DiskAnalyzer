# PI Tracker
This repository contains both the frontend and backend programs that will be used together to create the full application. \
Before you can run this program you will need to configure both the frontend and backend servers. \
Each server has it's own seperate README file explaining how to set them up. \
\
Once each server has their coressponding depedencies installed you need to make sure to set backend server address on the frontend.\
This will tell the frontend where it needs to go to talk to the backend.\
This setting can be found in `/path/to/frontend/package.json`. \
You will need to insert `"proxy": "http://localhost:5000",` above `"dependencies": {`\
\
**important** This method may need to change when the servers are push to a production enviroment