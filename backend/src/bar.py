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

# *Note* Need to makes functions dynamic when selecting the group. Also dynamically change save location based on group
import pandas as pd
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.style as mplstyle
import numpy as np
from . import tools
import time
import os


# +======================================================================================+
# |           Official bar chart function that creates batches of user charts            |
# +======================================================================================+
def getUserBarCharts(input, date):
    # Read csv file into pandas dataframe
    df = pd.read_csv(f"./documents/csv/{input}_{date}.csv")
    # Getting the amount of rows in dataframe
    row_count = len(df.index)

    # Generating a chart for each user found in "users" array
    for i in range(row_count):
        # Getting the divisor to divide row by
        divisor = tools.getDivisor(df.iloc[i]["Tot.Used Space"])
        # Getting the unit the numbers are in
        counter = tools.getChartCounter(divisor)
        # Dividing the cells the current selected row by the divisor
        df["AFS Groups"].iloc[i] = df.iloc[i]["AFS Groups"] / divisor
        df["Users AFS"].iloc[i] = df.iloc[i]["Users AFS"] / divisor
        df["Users Panas."].iloc[i] = df.iloc[i]["Users Panas."] / divisor
        df["Tot.Used Space"].iloc[i] = df.iloc[i]["Tot.Used Space"] / divisor

        # Printing user info to the terminal
        # print(f"User Index: {i}")
        # print(f'Name {df.iloc[i]["Full Name"]}')
        # print(f'Amount {df.iloc[i]["Tot.Used Space"]}')
        # print(f"divsior: {divisor}")
        # print(f"counter: {counter}")

        fig, ax = plt.subplots()  # Instantiating the plot interface

        # Create bars for AFS Groups, Users AFS, Panasas if data is not 0
        if df.iloc[i]["AFS Groups"] != 0:
            p1 = ax.bar(
                df.iloc[i]["Full Name"],
                df.iloc[i]["AFS Groups"],
                width=0.5,
                color="tab:blue",
                label="AFS Group",
            )
            ax.bar_label(p1, label_type="center")

        if df.iloc[i]["Users AFS"] != 0:
            p2 = ax.bar(
                df.iloc[i]["Full Name"],
                df.iloc[i]["Users AFS"],
                width=0.5,
                color="tab:green",
                bottom=df.iloc[i]["AFS Groups"],
                label="AFS User",
            )
            ax.bar_label(p2, label_type="center")

        if df.iloc[i]["Users Panas."] != 0:
            p3 = ax.bar(
                df.iloc[i]["Full Name"],
                df.iloc[i]["Users Panas."],
                width=0.5,
                color="orange",
                bottom=df.iloc[i]["AFS Groups"] + df.iloc[i]["Users AFS"],
                label="Panasas User",
            )
            ax.bar_label(p3, label_type="center")

        # Setting yaxis label and plot title
        ax.set(
            ylabel=counter, title=f"{df.iloc[i]['Full Name']}'s Storage Amounts {date}"
        )
        # Setting axis limits
        ax.set_xlim(left=-0.7, right=0.7)
        ylimits = ax.get_ylim()
        ax.set_ylim(bottom=None, top=(ylimits[1] + ylimits[1] * 0.15))
        # Displaying total on top of bar
        total = np.float64(
            np.format_float_positional(df.iloc[i]["Tot.Used Space"], precision=4)
        )
        ax.text(
            0,
            total + (total * 0.07),
            f"Total: {total}",
            ha="center",
            weight="bold",
            color="black",
        )
        # Generating legend
        lgd = ax.legend(bbox_to_anchor=(1.05, 1), loc="upper left")
        # Saving the figure
        plt.savefig(
            f"./images/batches/{df.iloc[i]['Full Name']}_user_report_{date}.png",
            dpi=300,
            format="png",
            bbox_extra_artists=(lgd,),
            bbox_inches="tight",
        )
        plt.close(fig)  # Closing plot to save memory


# +======================================================================================+
# |      Official function for when getting a user's storage bar chart dynamically       |
# +======================================================================================+
def dynamic_getUserBarCharts(year, month, date, name, group):
    # Setting backend to a non-interactive backend. This cuts down on graph generation time
    matplotlib.use("agg")
    # These seem to have no affect. look into more before deleting
    matplotlib.rcParams["path.simplify"] = True
    # These seem to have no affect. look into more before deleting
    matplotlib.rcParams["path.simplify_threshold"] = 1.0
    # These seem to have no affect. look into more before deleting
    mplstyle.use("fast")

    # overhead_start = time.time()

    # Finding the specified file and loading into dataframe
    # print(f"current workng directory {os.getcwd()}")
    # Setting parent path
    parent_path = os.listdir(f"./documents/csv/{year}/{month}")
    my_files = []  # list to hold files paths
    # Checking each file in parent path if it matches search string
    for file in parent_path:
        # Checking if correct file name
        if file.startswith(f"{group}_{year}-{date[0:2]}"):
            my_files.append(file)  # add file to list
    # Read csv file into pandas dataframe
    df = pd.read_csv(f"./documents/csv/{year}/{month}/{my_files[0]}")
    # Debugging info
    # print(f'row number {df[df["Full Name"] == f"{name}"].index}')
    # print(df[df["Full Name"] == f"{name}"].index[0])
    # Seeting i to search index of user being searched for
    i = df[df["Full Name"] == f"{name}"].index[0]

    # overhead_end = time.time()
    # print(f"Overhead execution time: {overhead_end-overhead_start}")

    # unitcoversion_start = time.time()

    # Getting the divisor to divide row by
    divisor = tools.getDivisor(df.iloc[i]["Tot.Used Space"])
    # print(f'raw storage amount: {df.iloc[i]["Tot.Used Space"]}')
    # print(f"divisor: {divisor}")
    # Getting the unit the numbers are in
    counter = tools.getChartCounter(divisor)
    # unit = plots.tools.getUnit(counter)

    # Dividing the cells the current selected row by the divisor
    df["AFS Groups"] = df["AFS Groups"].div(divisor)
    df["Users AFS"] = df["Users AFS"].div(divisor)
    df["Users Panas."] = df["Users Panas."].div(divisor)
    df["Tot.Used Space"] = df["Tot.Used Space"].div(divisor)

    # Using numpy to create an array to house total values.
    array = np.array(df["Tot.Used Space"])
    total = array[i]
    # unitconversion_end = time.time()
    # print(f"Unit conversion time: {unitconversion_end-unitcoversion_start}")

    # generatinggraph_start = time.time()

    # *Note* to fix the small bar issue. I could choose to not display if the bar value is below a certain threshhold which dynamicall changes based on the divsor unit or maybe the other values of the bars

    # print(f"User index: {i}")
    fig, ax = plt.subplots()  # Instantiating the plot interface
    # Create bars for AFS Groups, Users AFS, Panasas if data is not 0
    if df.iloc[i]["AFS Groups"] != 0:
        p1 = ax.bar(
            df.iloc[i]["Full Name"],
            df.iloc[i]["AFS Groups"],
            width=0.5,
            color="tab:blue",
            label="AFS Group",
        )
        ax.bar_label(p1, label_type="center")

    if df.iloc[i]["Users AFS"] != 0:
        p2 = ax.bar(
            df.iloc[i]["Full Name"],
            df.iloc[i]["Users AFS"],
            width=0.5,
            color="tab:green",
            bottom=df.iloc[i]["AFS Groups"],
            label="AFS User",
        )
        ax.bar_label(p2, label_type="center")

    if df.iloc[i]["Users Panas."] != 0:
        p3 = ax.bar(
            df.iloc[i]["Full Name"],
            df.iloc[i]["Users Panas."],
            width=0.5,
            color="tab:orange",
            bottom=df.iloc[i]["AFS Groups"] + df.iloc[i]["Users AFS"],
            label="Panasas User",
        )
        ax.bar_label(p3, label_type="center")

    # Setting axis and title labels
    ax.set(ylabel=counter, title=f"{df.iloc[i]['Full Name']}'s Storage Amounts")
    # Setting axis limits
    ax.set_xlim(left=-0.7, right=0.7)
    ylimits = ax.get_ylim()  # getting the current yaxis limits
    ax.set_ylim(bottom=None, top=(ylimits[1] + ylimits[1] * 0.15))
    # Displaying total on top of bar
    # print(f"total value: {array[i]}")
    total = np.float64(np.format_float_positional(total, precision=4))
    # print(total)
    ax.text(
        0,
        total + (total * 0.07),
        f"Total: {total}",
        ha="center",
        weight="bold",
        color="black",
    )
    # lgd = ax.legend(bbox_to_anchor=(1.05, 1), loc="upper left")
    lgd = ax.legend(bbox_to_anchor=(1, 1), prop={"size": 6})
    # generatinggraph_end = time.time()
    # print(f"Generating graph time: {generatinggraph_end-generatinggraph_start}")

    # Saving the graph
    # savegraph_start = time.time()
    # Checking to see if year directory exist
    year_save_path = f"./images/userStorageCharts/{year}"
    year_is_exist = os.path.exists(year_save_path)
    # If the directory does not exist then make it
    if not year_is_exist:
        os.makedirs(year_save_path)
        # print(f"Directory {year_save_path} was created!")
    # Checking to see if month directory exist
    month_save_path = f"./images/userStorageCharts/{year}/{month}"
    month_is_exist = os.path.exists(month_save_path)
    # If the directory does not exist then make it
    if not month_is_exist:
        os.makedirs(month_save_path)
        # print(f"Directory {month_save_path} was created!")

    # Saving the figure
    fig.savefig(
        f"./images/userStorageCharts/{year}/{month}/{df.iloc[i]['Full Name']}_user_report.png",
        dpi=150,
        format="png",
        bbox_extra_artists=(lgd,),
        # bbox_inches="tight", # not havng this may make saving faster
    )
    # savegraph_end = time.time()
    # print(f"saving time: {savegraph_end-savegraph_start}")


# +======================================================================================+
# |             Testing function for when getting a user's bar chart of storages         |
# |                         Only creates one user at a time                              |
# |                                                                                      |
# |                     This function is used as a testing ground                        |
# |                 before implementing the function into production                     |
# +======================================================================================+
def test_getUserBarCharts(input):
    date = input[9:]  # Parsing the date from input
    i = 0  # Selecting row index in dataframe
    # Read csv file into pandas dataframe
    df = pd.read_csv(f"./documents/csv/2023/2023_07_01/{input}.csv")

    # Getting the divisor to divide row by
    divisor = tools.getDivisor(df.iloc[i]["Tot.Used Space"])
    # Getting the unit the numbers are in
    counter = tools.getChartCounter(divisor)
    # Getting the abbreviated unit
    # unit = plots.tools.getUnit(counter)

    # Dividing the cells the current selected row by the divisor
    df["AFS Groups"] = df["AFS Groups"].div(divisor)
    df["Users AFS"] = df["Users AFS"].div(divisor)
    df["Users Panas."] = df["Users Panas."].div(divisor)
    df["Tot.Used Space"] = df["Tot.Used Space"].div(divisor)

    # Using numpy to create an array to house total values.
    array = np.array(df["Tot.Used Space"])
    total = array[i]

    # print(f"User index: {i}")
    fig, ax = plt.subplots()  # Instantiating the plot interface

    # Create bars for AFS Groups, Users AFS, Panasas if data is not 0
    if df.iloc[i]["AFS Groups"] != 0:
        p1 = ax.bar(
            df.iloc[i]["Full Name"],
            df.iloc[i]["AFS Groups"],
            width=0.5,
            color="lightblue",
            label="AFS Group",
        )
        ax.bar_label(p1, label_type="center")

    if df.iloc[i]["Users AFS"] != 0:
        p2 = ax.bar(
            df.iloc[i]["Full Name"],
            df.iloc[i]["Users AFS"],
            width=0.5,
            color="lightgreen",
            bottom=df.iloc[i]["AFS Groups"],
            label="AFS User",
        )
        ax.bar_label(p2, label_type="center")

    if df.iloc[i]["Users Panas."] != 0:
        p3 = ax.bar(
            df.iloc[i]["Full Name"],
            df.iloc[i]["Users Panas."],
            width=0.5,
            color="lightcoral",
            bottom=df.iloc[i]["AFS Groups"] + df.iloc[i]["Users AFS"],
            label="Panasas User",
        )
        ax.bar_label(p3, label_type="center")

    # Setting yaxis label and title
    ax.set(ylabel=counter, title=f"{df.iloc[i]['Full Name']}'s Storage Amounts")
    # Setting axis limits
    ax.set_xlim(left=-0.7, right=0.7)
    ylimits = ax.get_ylim()  # getting the current yaxis limits
    ax.set_ylim(bottom=None, top=(ylimits[1] + ylimits[1] * 0.15))
    # Displaying total on top of bar
    total = np.float64(np.format_float_positional(total, precision=4))
    # print(total)
    ax.text(
        0,
        total + (total * 0.07),
        f"Total: {total}",
        ha="center",
        weight="bold",
        color="black",
    )
    # Generating legend
    lgd = ax.legend(bbox_to_anchor=(1.05, 1), loc="upper left")
    # Saving the figure
    plt.savefig(
        f"../images/userStorageCharts/{df.iloc[i]['Full Name']}_user_report_{date}.png",
        dpi=300,
        format="png",
        bbox_extra_artists=(lgd,),
        bbox_inches="tight",
    )
