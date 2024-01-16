"""
Copyright (c) 2024 Patrick O'Brien-Seitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
"""

import os
import time
import logging
from watchdog.observers import Observer

# from watchdog.observers.api import EventQueue
# from watchdog.events import LoggingEventHandler
from watchdog.events import FileSystemEventHandler
import threading
import src


# +=============================================================================+
# |  Event function that is triggered when watchdog detects a threshhold alert  |
# |  This function will grab the file path of where the change was detected and |
# |   call a wrapper fucntion to generate files to be used in further analysis  |
# +=============================================================================+
def prepareFile(event):
    # Makes the function wait a second so the file can completely upload. There must be a better way to do this!
    file_size = -1
    while file_size != os.path.getsize(event.src_path):
        file_size = os.path.getsize(event.src_path)
        time.sleep(1)

    # Debugging information
    """ 
    print("\n")
    print("===========================================================================")
    print(f"Source: {event.src_path}")  # Gets the location of the file created
    print(f"file size: {os.path.getsize(event.src_path)}")
    """
    print("writing output...")
    print(event.src_path[-14:-4])

    # Generate reports using wrapper function when given source path of watchdog event
    src.writer.generateReports(f"{event.src_path}", f"{event.src_path[-14:-4]}")

    print("Complete!")
    print(f"file size: {os.path.getsize(event.src_path)}")
    print(
        "===========================================================================\n"
    )


# +=============================================================================+
# |                    Watchdog that runs on backround thread                   |
# |     Watches for file changes in a folder and executes code upon detection   |
# |                                                                             |
# |     *Note: Was getting errors before stating file was empty. I belive the   |
# |     program was trying to read the file before it could completely upload.  |
# |         I made it wait for a second so it could have time to upload         |
# |                     before trying to read the file*                         |
# +=============================================================================+
def my_watchdog():
    print("watchdog thread active...")
    # Logs basic info to be printed onto the console when a event occurs
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s -%(process)d -%(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    # Setting the file we want to monitor
    path = "./documents/reports"

    # Determines what to do when a event occurs
    event_handler = FileSystemEventHandler()  # Creating event handler object
    event_handler.on_created = prepareFile  # Telling the event handler what to execute when "on-created" events are detected

    # The entity that will be watching the folder and call the handler when it detects something
    observer = Observer()
    # This tells the observer entity what parameters it will take. Determining how it will function
    observer.schedule(event_handler, path, recursive=False)
    observer.daemon = True  # Making the watchdog thread a "backround" thread
    observer.start()  # Starting the observer

    # The behavior of the watchdog when running
    try:
        while True:
            # print("Watching for changes...")
            time.sleep(1)  # Check in for changes every second. *May make this shorter*
    except KeyboardInterrupt:  # Exeption that will end the thread
        observer.stop()  # Tells the watchdog thread to stop
        # observer.join()


# This file is imported into "app.py" so the code below will run once it is imported
watchdog_thread = threading.Thread(
    target=my_watchdog, name="watchdog_thread"
)  # Creating thread object
watchdog_thread.start()  # Starting thread object
