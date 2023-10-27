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
