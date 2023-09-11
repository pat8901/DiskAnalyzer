import csv
import json


def toJSON():
    data = {}

    # Open a csv reader called DictReader
    with open("./csv/research_9999999.csv", encoding="utf-8") as csvf:
        csvReader = csv.DictReader(csvf)

        # Convert each row into a dictionary
        # and add it to data

        for rows in csvReader:
            # Assuming a column named 'No' to
            # be the primary key

            key = rows["Id"]
            data[key] = rows

    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open("./json/names.json", "w", encoding="utf-8") as jsonf:
        jsonf.write(json.dumps(data, indent=4))


def toJSON2():
    data = {}

    # Open a csv reader called DictReader
    with open("./csv/research_9999999.csv", encoding="utf-8") as csvf:
        csvReader = csv.DictReader(csvf)

        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
            # Assuming a column named 'No' to
            # be the primary key
            key = rows["Id"]
            data[key] = rows

    return data


def csvWriter3():
    input = "research"
    output = "research"
    date = "2023-08-10"
    with open(f"text/grouped_output/{input}_{date}.txt", "r") as f:
        with open(f"csv/{output}_{9999999}.txt", "w", newline="") as file:
            writer = csv.writer(file)
            for line in f:
                trimmedWords = []
                line = line.split("|")
                trimmedWords.append(count)
                for word in line:
                    new_word = word.strip()
                    trimmedWords.append(new_word)
                # writer = csv.writer(file)
                writer.writerow(trimmedWords)
