# *Note* When a file is uploaded to the backend we do not know if the data is formated correcly.
# If the cuntions below do not work throw and exception and tell the user that the files are not formated correctly
import sys
import os
from pypdf import PdfReader
import csv
import pandas as pd
import matplotlib
import matplotlib.pyplot as plt
import numpy as np
from . import tools


# +======================================================================================+
# |           Converts input pdf into a txt file to be used in further processing        |
# |                           *Can be optimized further*                                 |
# +======================================================================================+
def createFullOutput(input, date):
    pdf = open(f"{input}", "rb")
    reader = PdfReader(pdf)
    # print(os.getcwd())
    with open(f"./text/full_output/full_output_{date}.txt", "w") as f_output:
        count = 0
        for i in reader.pages:
            page = reader.pages[count]
            text = page.extract_text()
            f_output.write(text + "\n")
            count += 1  # Do I even need to count like this?


# +======================================================================================+
# |           Converts input pdf into a txt file to be used in further processing        |
# |                *Can be optimized further, can probably combine with others*          |
# +======================================================================================+
def createResearchOutput(date):
    begin = "-------------------------------   -------    ------------    ------------    ------------    --------------"
    end = "=========================================|===============|===============|===============|=================|"
    beginFound = False
    with open(f"text/full_output/full_output_{date}.txt", "r") as f_input:
        with open(f"text/grouped_output/research/research_{date}.txt", "w") as f_output:
            for line in f_input:
                if end in line:
                    break
                if beginFound:
                    line = line.strip()
                    line = line[:-1]
                    f_output.write(line + "\n")
                elif begin in line:
                    beginFound = True


# +======================================================================================+
# |           Converts input pdf into a txt file to be used in further processing        |
# |                           *Can be optimized further*                                 |
# +======================================================================================+
def createDepartmentOutput(date):
    header = "                                            Space Used by Departments"
    begin = "-----------------------------------------    ------------    ------------    ------------    --------------"
    end = "=========================================|===============|===============|===============|=================|"
    headerFound = False
    beginFound = False
    with open(f"./text/full_output/full_output_{date}.txt", "r") as f_input:
        with open(
            f"./text/grouped_output/departments/departments_{date}.txt", "w"
        ) as f_output:
            for line in f_input:
                if header in line:
                    headerFound = True
                if headerFound:
                    if end in line:
                        break
                    elif beginFound:
                        line = line.strip()
                        line = line[:-1]
                        f_output.write(line + "\n")
                    elif begin in line:
                        beginFound = True


# +======================================================================================+
# |           Converts input pdf into a txt file to be used in further processing        |
# |                           *Can be optimized further*                                 |
# +======================================================================================+
def createCollegesOutput(date):
    header = "                                            Space Used by Colleges"
    begin = "-----------------------------------------    ------------    ------------    ------------    --------------"
    end = "=========================================|===============|===============|===============|=================|"
    headerFound = False
    beginFound = False
    with open(f"./text/full_output/full_output_{date}.txt", "r") as f_input:
        with open(
            f"./text/grouped_output/colleges/colleges_{date}.txt", "w"
        ) as f_output:
            for line in f_input:
                if header in line:
                    headerFound = True
                if headerFound:
                    if end in line:
                        break
                    elif beginFound:
                        line = line.strip()
                        line = line[:-1]
                        f_output.write(line + "\n")
                    elif begin in line:
                        beginFound = True


# +======================================================================================+
# |           Creates a csv file from previosuly generated csv (text) files              |
# +======================================================================================+
def csvWriter(input, output, date):
    folder_date = date.replace("-", "_")
    folder_year = folder_date[0:-6]

    year_save_path = f"./csv/{folder_year}"
    year_is_exist = os.path.exists(year_save_path)
    if not year_is_exist:
        os.makedirs(year_save_path)
        print(f"Directory {year_save_path} was created!")

    save_path = f"./csv/{folder_year}/{folder_date}"
    is_exist = os.path.exists(save_path)
    if not is_exist:
        os.makedirs(save_path)
        print(f"Directory {save_path} was created!")

    with open(f"./text/grouped_output/{input}/{input}_{date}.txt", "r") as f:
        with open(
            f"./csv/{folder_year}/{folder_date}/{output}_{date}.csv", "w", newline=""
        ) as file:
            writer = csv.writer(file)
            if output == "research":
                headers = [
                    "Full Name",
                    "DepCode",
                    "AFS Groups",
                    "Users AFS",
                    "Users Panas.",
                    "Tot.Used Space",
                ]
                writer.writerow(headers)
            if output == "departments":
                headers = [
                    "Department",
                    "AFS Groups",
                    "Users AFS",
                    "Users Panas.",
                    "Tot.Used Space",
                ]
                writer.writerow(headers)
            if output == "colleges":
                headers = [
                    "College Name",
                    "AFS Groups",
                    "Users AFS",
                    "Users Panas.",
                    "Tot.Used Space",
                ]
                writer.writerow(headers)
            for line in f:
                trimmedWords = []
                line = line.split("|")
                for word in line:
                    new_word = word.strip()
                    trimmedWords.append(new_word)
                # writer = csv.writer(file)
                writer.writerow(trimmedWords)


# +======================================================================================+
# |           Creates a csv file from previosuly generated csv (text) files              |
# |                          *Not sure what is used for*                                 |
# +======================================================================================+
def csvWriter2():
    input = "research"
    output = "research"
    date = "2023-08-10"
    with open(f"text/grouped_output/{input}_{date}.txt", "r") as f:
        with open(f"csv/{output}_{9999999}.csv", "w", newline="") as file:
            writer = csv.writer(file)
            if output == "research":
                headers = [
                    "Id",
                    "Full Name",
                    "DepCode",
                    "AFS Groups",
                    "Users AFS",
                    "Users Panas.",
                    "Tot.Used Space",
                ]
                writer.writerow(headers)
            if output == "departments":
                headers = [
                    "Department",
                    "AFS Groups",
                    "Users AFS",
                    "Users Panas.",
                    "Tot.Used Space",
                ]
                writer.writerow(headers)
            if output == "colleges":
                headers = [
                    "College Name",
                    "AFS Groups",
                    "Users AFS",
                    "Users Panas.",
                    "Tot.Used Space",
                ]
                writer.writerow(headers)
            count = 1
            for line in f:
                trimmedWords = []
                line = line.split("|")
                trimmedWords.append(count)
                count = count + 1
                for word in line:
                    new_word = word.strip()
                    trimmedWords.append(new_word)
                # writer = csv.writer(file)
                writer.writerow(trimmedWords)


# +======================================================================================+
# |       Gets the names found in a group text file and returns an array of names        |
# +======================================================================================+
def nameExtractor():
    groups = ["research", "colleges", "departments"]

    with open("./text/grouped_output/research/research_2023-08-10.txt", "r") as file:
        names = []
        for line in file:
            line = line.split("|")
            name = line[0].strip()
            names.append(name)
    return names


# +======================================================================================+
# |                 creates files of names for each report uploaded                      |
# +======================================================================================+
def nameGenerator(date):
    groups = ["research", "colleges", "departments"]

    month = date.replace("-", "_")
    year = month[0:-6]

    year_save_path = f"./text/names/{year}"
    year_is_exist = os.path.exists(year_save_path)
    if not year_is_exist:
        os.makedirs(year_save_path)
        print(f"Directory {year_save_path} was created!")

    save_path = f"./text/names/{year}/{month}"
    is_exist = os.path.exists(save_path)
    if not is_exist:
        os.makedirs(save_path)
        print(f"Directory {save_path} was created!")

    for group in groups:
        with open(f"./text/grouped_output/{group}/{group}_{date}.txt", "r") as file:
            with open(f"./text/names/{year}/{month}/{group}_{date}.txt", "w") as output:
                for line in file:
                    line = line.split("|")
                    name = line[0].strip()
                    output.write(name + "\n")


# +======================================================================================+
# |                 calls all the functions to generate reports in one go                |
# +======================================================================================+
def generateReports(input, date):
    groups = ["research", "colleges", "departments"]

    createFullOutput(input, date)
    createResearchOutput(date)
    createCollegesOutput(date)
    createDepartmentOutput(date)
    nameGenerator(date)

    for group in groups:
        csvWriter(group, group, date)
