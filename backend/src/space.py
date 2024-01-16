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

# ---------------- ALERT --------------------------
# * This is the command line program. This is not used *
# * In the future may tie in the CLI for quick access. *
# * However, it may be better to fork it as a standalone program *
import writer
import bar
import histogram
import readline
import sys
import tools


def main():
    print("Hello world!")

    # file_input = sys.argv[1]
    # print(f'You said "{file_input}"')
    # report_date = tools.getReportDate(file_input)
    # print(f"date: {report_date}")

    # writer.createFullOutput(file_input, report_date)
    # writer.createResearchOutput(report_date)
    # writer.createDepartmentOutput(report_date)
    # writer.createCollegesOutput(report_date)
    # writer.csvWriter("research", "research", report_date)
    # writer.csvWriter("departments", "departments", report_date)
    # writer.csvWriter("colleges", "colleges", report_date)

    # histogram.getGroupTotals("research", "2023-08-10")
    # histogram.getGroupHistogram("research", "AFS Groups", "2023-08-10")
    # histogram.getGroupHistogram("research", "Users AFS", "2023-08-10")
    # histogram.getGroupHistogram("research", "Users Panas.", "2023-08-10")
    # histogram.getStackedGroupHistogram("research", "2023-08-10")


if __name__ == "__main__":
    main()
