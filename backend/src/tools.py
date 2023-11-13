# Copyright (C) 2023  Patrick O'Brien-Seitz

# This file is part of backend.

# backend is free software: you can redistribute it and/or modify it under the terms of the GNU General
# Public License as published by the Free Software Foundation, either version 3 of the License, or (at your
# option) any later version.

# backend is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
# the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License along with backend.
# If not, see <https://www.gnu.org/licenses/>.

import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# import sys
# import csv
# import matplotlib
# from pypdf import PdfReader


# +======================================================================================+
# |       Tool to determine the proper divisor to use when given a pandas dataframe      |
# |             Uses the total storage of a user to calculate the divisor                |
# +======================================================================================+
def getDivisor(input):
    # may be faster to do bit shifting or some other way?
    terabyte = 1000000000
    gigabyte = 1000000
    megabyte = 1000
    kilobyte = 1

    # Using the users total storage, determining where it lies on the scale
    if terabyte <= input:
        return terabyte
    elif gigabyte <= input < terabyte:
        return gigabyte
    elif megabyte <= input < gigabyte:
        return megabyte
    else:
        return kilobyte


# +======================================================================================+
# |  Tool that when given a number will gives its corresponding name in character form   |
# +======================================================================================+
def getChartCounter(input):
    terabyte = 1000000000
    gigabyte = 1000000
    megabyte = 1000
    kilobyte = 1

    if input == terabyte:
        return "Terabytes"
    elif input == gigabyte:
        return "Gigabytes"
    elif input == megabyte:
        return "Megabytes"
    else:
        return "Kilobytes"


# +======================================================================================+
# |                Tool that when given a name will gives its corresponding              |
# |                         name in abbreviated character form                           |
# +======================================================================================+
def getUnit(input):
    # Getting the name string and returning abbreviated name
    if input == "Terabytes":
        return "TB"
    elif input == "Gigabytes":
        return "GB"
    elif input == "Megabytes":
        return "MB"
    else:
        return "KB"


# +======================================================================================+
# |                       Fetches the date of the input report                           |
# +======================================================================================+
def getReportDate(report_file):
    return report_file[-14:-4]


# +======================================================================================+
# |                       Fetches the path of the input report                           |
# +======================================================================================+
def getFilePath(report_file):
    return report_file[-14:-4]


# +======================================================================================+
# |                       Fetches the file name of input report                           |
# +======================================================================================+
def getFileName(report_file):
    return report_file[-26:]


# +======================================================================================+
# |                       Reformates the date to American Standard                       |
# |                              *Feature request*                                       |
# +======================================================================================+
def dateFormatter(date):
    print(date)


# +======================================================================================+
# |                Tool to choose what format you want to save figures in                |
# |                              *Feature request*                                       |
# +======================================================================================+
def getFormat():
    print(f"you selected png")


# +======================================================================================+
# |             *Not Used I believe / Hard coded for research / May delete*              |
# |             This function sums the column of Total Storage and prints                |
# |                           onto the screen in terabytes                               |
# |             *Not Used I believe / Hard coded for research / May delete*              |
# +======================================================================================+
def getTotalStorage():
    # Reading the csv into a pandas dataframe
    df = pd.read_csv("csv/research.csv")
    # Getting the total by summing the total used space column
    total = df["Tot.Used Space"].sum()
    # Converting the units to terabytes
    terabyte = total / 1000000000
    # Displaying info
    print(f"Total Storage (KB): {total}")
    print(f"Total Storage (TB): {terabyte}")


# +======================================================================================+
# |                     *Not Used I believe / May delete*                                |
# |             This fucntion may be helpful in adding labels to graphs                  |
# |                     *Not Used I believe / May delete*                                |
# +======================================================================================+
def addlabels(x, y):
    for i in range(len(x)):
        plt.text(i, y[i], y[i])


# +======================================================================================+
# |                            *This is not really used*                                 |
# |             Creates a list of bin labels to be used with frequency graphs            |
# +======================================================================================+
def binLabelCreator(amount, step, start):
    bin_labels = []
    # Append starting point
    bin_labels.append(f"{start}-{step}")
    left = step  # Set left side of the range to the step i.e. right side
    for i in range(amount - 1):  # Loop though amount
        # Append the left side and right side to create a range label
        bin_labels.append(f"{left}-{left+step}")
        left = left + step  # Set the left to the right
    return bin_labels


# +======================================================================================+
# |                            *This is not really used*                                 |
# |             Creates a list of bin to be used with frequency graphs                   |
# +======================================================================================+
def binCreator(amount, step, start):
    bins = []
    bins.append(start)  # Append the first bin
    left = step
    # Loop through the range of amount
    for i in range(amount):
        bins.append(left)  # Append left
        left = left + step  # Set left equal to step
    return bins


# +======================================================================================+
# |             *Not Used / Testing function / Will proabably delete soon*               |
# |       Tool to determine the proper divisor to use when given a pandas dataframe      |
# |             Uses the total storage of a user to calculate the divisor                |
# |             *Not Used / Testing function / Will proabably delete soon*               |
# +======================================================================================+
def getDivisorArray(inputArray):
    # may be faster to do bit shifting?
    terabyte = 1000000000
    gigabyte = 1000000
    megabyte = 1000
    kilobyte = 1
    outputArray = np.zeros(len(inputArray))

    np.array(inputArray)
    for i in range(inputArray):
        if terabyte <= input:
            outputArray = np.insert(outputArray, i, terabyte)
        elif gigabyte <= input < terabyte:
            outputArray = np.insert(outputArray, i, gigabyte)
        elif megabyte <= input < gigabyte:
            outputArray = np.insert(outputArray, i, megabyte)
        else:
            outputArray = np.insert(outputArray, i, kilobyte)

    return outputArray
