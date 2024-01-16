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

# Note: Make better function names
import csv
import json


# +=============================================================================+
# |         Takes csv file and makes a json file where names are the key        |
# +=============================================================================+
def toJSON():
    data = {}
    # Open a csv reader called DictReader
    with open("./documents/csv/research_9999999.csv", encoding="utf-8") as csvf:
        csvReader = csv.DictReader(csvf)
        # Convert each row into a dictionary and add it to data
        for rows in csvReader:
            # Assuming a column named 'Full Name' to be the primary key
            key = rows["Full Name"]
            data[key] = rows
    # Open a json writer, and use the json.dumps() function to dump data
    with open("./documents/json/names_version2.json", "w", encoding="utf-8") as jsonf:
        jsonf.write(json.dumps(data, indent=4))


# +=============================================================================+
# |                             *Testing Function*                              |
# |         Takes csv file and returns JSON (displayed in the browser)          |
# |                          where ID's are the key                             |
# +=============================================================================+
def toJSON2():
    data = {}
    # Open a csv reader called DictReader
    with open("./documents/csv/research_9999999.csv", encoding="utf-8") as csvf:
        csvReader = csv.DictReader(csvf)
        # Convert each row into a dictionary and add it to data
        for rows in csvReader:
            # Assuming a column named 'Id' to be the primary key
            key = rows["Id"]
            data[key] = rows
    return data


# +=============================================================================+
# |                      *Not sure what is does exactly*                        |
# +=============================================================================+
def csvWriter3():
    input = "research"
    output = "research"
    date = "2023-08-10"
    trimmedWords = []
    # Reads a text file containing researcher data
    with open(f"documents/text/research_2023-08-10.txt", "r") as f:
        # Loop through each line in file
        for line in f:
            # Split each line by "|"
            line = line.split("|")
            trimmedWords.append(line[0].strip())
    return trimmedWords
