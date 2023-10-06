# * This file is not used. code has been migrated to app.py *

import sys
import time
import logging
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler
import threading
import time

if __name__ == "__main__":

    def my_watchdog():
        print("hello im here")
        logging.basicConfig(
            level=logging.INFO,
            format="%(asctime)s -%(process)d - %(message)s",
            datefmt="%Y-%m-%d %H:%M:%S",
        )

        # Setting the file we want to monitor
        path = sys.argv[1] if len(sys.argv) > 1 else "."
        print(path)

        # Determines what to do when a event occurs
        event_handler = LoggingEventHandler()
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


def dogThread():
    my_thread = threading.Thread(target=my_watchdog, daemon=True, name="my_watchdog")
    my_thread.start()


# my_watchdog()
