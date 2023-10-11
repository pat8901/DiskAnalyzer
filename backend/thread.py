import os
import time
import logging
from watchdog.observers import Observer
from watchdog.observers.api import EventQueue
from watchdog.events import LoggingEventHandler
from watchdog.events import FileSystemEventHandler
import threading
import plots


# +=============================================================================+
# |                    Watchdog that runs on backround thread                   |
# |     watches for file changes in a folder and executes code upon detection   |
# |                                                                             |
# |     *Note: Was getting errors before stating file was empty. I belive the   |
# |     program was trying to read the file before it could completely upload.  |
# |         I made it wait for a second so it could have time to upload         |
# |                     before trying to read the file*                         |
# +=============================================================================+
def prepareFile(event):
    # Makes the function wait a second so the file can completely upload
    # There must be a better way to do this!
    file_size = -1
    while file_size != os.path.getsize(event.src_path):
        file_size = os.path.getsize(event.src_path)
        time.sleep(1)

    print("\n")
    print("===========================================================================")
    print(f"Source: {event.src_path}")  # Gets the location of the file created
    print(f"file size: {os.path.getsize(event.src_path)}")

    print("writing output...")
    print(event.src_path[22:-4])

    plots.writer.generateReports(
        f"{event.src_path}", f"{event.src_path[22:-4]}"
    )  # Wrapper to call all functions

    print("Complete!")
    print(f"file size: {os.path.getsize(event.src_path)}")
    print(
        "===========================================================================\n"
    )


def my_watchdog():
    print("watchdog thread active...")
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s -%(process)d -%(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    # Setting the file we want to monitor
    path = "./reports"

    # Determines what to do when a event occurs
    event_handler = FileSystemEventHandler()
    event_handler.on_created = prepareFile

    # The entity that will be watching the folder and call the handler
    # when it detects something
    observer = Observer()
    # This tells the observer entity what parameters it will take. Determining how it will function
    observer.schedule(event_handler, path, recursive=False)
    observer.daemon = True
    observer.start()

    try:
        while True:
            # print("Watching for changes...")
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        # observer.join()


watchdog_thread = threading.Thread(target=my_watchdog, name="watchdog_thread")
watchdog_thread.start()
