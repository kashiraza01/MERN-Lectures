"""
Generate Lab Day 26 — Node.js Basics Recap (45-minute lab).
Run: python generate_lab_pdf.py
Output: Lab Day 26.pdf
"""

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT = "Lab Day 26.pdf"
NODE_GREEN = colors.HexColor("#68A063")
DARK = colors.HexColor("#232B2B")
GRAY = colors.HexColor("#5C6C6C")
CODE_BG = colors.HexColor("#F4F4F4")
LIGHT_GREEN = colors.HexColor("#EEF5ED")


def code_block(text, styles):
    return Preformatted(
        text.strip(),
        ParagraphStyle(
            "Code",
            parent=styles["Code"],
            fontName="Courier",
            fontSize=9,
            backColor=CODE_BG,
            borderColor=GRAY,
            borderWidth=0.5,
            borderPadding=8,
            leading=12,
        ),
    )


def build_pdf():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=letter,
        rightMargin=0.75 * inch,
        leftMargin=0.75 * inch,
        topMargin=0.75 * inch,
        bottomMargin=0.75 * inch,
    )
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            "TitleCustom",
            parent=styles["Title"],
            fontSize=22,
            textColor=DARK,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            "Subtitle",
            parent=styles["Normal"],
            fontSize=12,
            textColor=GRAY,
            spaceAfter=16,
        )
    )
    styles.add(
        ParagraphStyle(
            "H2",
            parent=styles["Heading2"],
            fontSize=14,
            textColor=NODE_GREEN,
            spaceBefore=14,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            "Body",
            parent=styles["Normal"],
            fontSize=10.5,
            textColor=DARK,
            leading=14,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            "Tip",
            parent=styles["Normal"],
            fontSize=10,
            textColor=DARK,
            backColor=LIGHT_GREEN,
            borderPadding=8,
            leading=13,
        )
    )

    story = []

    story.append(Paragraph("Lab Day 26 — Node.js Basics Recap", styles["TitleCustom"]))
    story.append(Paragraph("Week 6 · 45 minutes · Individual lab", styles["Subtitle"]))
    story.append(HRFlowable(width="100%", thickness=2, color=NODE_GREEN))
    story.append(Spacer(1, 12))

    story.append(Paragraph("Overview", styles["H2"]))
    story.append(
        Paragraph(
            "This lab reinforces Node.js fundamentals covered in Day 24 (introduction) "
            "and Day 26 (deep recap). You will work inside the <b>lab-starter/</b> folder. "
            "Complete each task in order. Run every file with <font face='Courier'>node &lt;file&gt;.js</font>.",
            styles["Body"],
        )
    )

    prereq_data = [
        ["Prerequisite", "You completed"],
        ["Day 22", "MongoDB basics"],
        ["Day 23", "Express + Mongoose REST API"],
        ["Day 24", "Node.js introduction"],
        ["Day 26 lecture", "Node recap (event loop, fs, http, modules)"],
    ]
    t = Table(prereq_data, colWidths=[1.5 * inch, 4.5 * inch])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), NODE_GREEN),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 9),
                ("GRID", (0, 0), (-1, -1), 0.5, GRAY),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, LIGHT_GREEN]),
            ]
        )
    )
    story.append(t)
    story.append(Spacer(1, 12))

    story.append(Paragraph("Setup", styles["H2"]))
    story.append(
        ListFlowable(
            [
                ListItem(Paragraph("Open terminal in <b>Week 6/Day 26/lab-starter/</b>", styles["Body"])),
                ListItem(Paragraph("Verify Node: <font face='Courier'>node --version</font> (v18+ recommended)", styles["Body"])),
                ListItem(Paragraph("No npm install required — tasks use only built-in Node modules", styles["Body"])),
            ],
            bulletType="bullet",
            start="•",
        )
    )

  # Task 1
    story.append(Paragraph("Task 1 — Event Loop Prediction (8 min)", styles["H2"]))
    story.append(Paragraph("<b>File:</b> <font face='Courier'>task1-event-loop.js</font>", styles["Body"]))
    story.append(
        Paragraph(
            "Before running the file, write the expected console output order on paper. "
            "Then run the file and compare. In a comment at the bottom of the file, explain "
            "WHY each line prints in that order (sync vs microtask vs macrotask).",
            styles["Body"],
        )
    )
    story.append(code_block(
        """// Predict first, then run:
console.log('1: sync');

setTimeout(() => console.log('4: timeout'), 0);

Promise.resolve()
  .then(() => console.log('2: promise'))
  .then(() => console.log('3: chained promise'));

console.log('5: sync end');""",
        styles,
    ))
    story.append(
        Paragraph(
            "<b>Expected answer:</b> 1: sync → 5: sync end → 2: promise → 3: chained promise → 4: timeout",
            styles["Tip"],
        )
    )

    # Task 2
    story.append(Paragraph("Task 2 — path & fs (10 min)", styles["H2"]))
    story.append(Paragraph("<b>File:</b> <font face='Courier'>task2-fs-path.js</font>", styles["Body"]))
    story.append(
        Paragraph(
            "Complete the TODOs to: (1) build a file path with <font face='Courier'>path.join</font>, "
            "(2) write a JSON object to <font face='Courier'>data/users.json</font>, "
            "(3) read it back asynchronously with <font face='Courier'>fs/promises</font>, "
            "(4) print the parsed array length.",
            styles["Body"],
        )
    )
    story.append(
        ListFlowable(
            [
                ListItem(Paragraph("Create the <font face='Courier'>data/</font> folder if it does not exist", styles["Body"])),
                ListItem(Paragraph("Use <font face='Courier'>JSON.stringify(data, null, 2)</font> for pretty output", styles["Body"])),
                ListItem(Paragraph("Handle errors with try/catch", styles["Body"])),
            ],
            bulletType="bullet",
            start="•",
        )
    )

    # Task 3
    story.append(Paragraph("Task 3 — process & Environment (5 min)", styles["H2"]))
    story.append(Paragraph("<b>File:</b> <font face='Courier'>task3-process.js</font>", styles["Body"]))
    story.append(
        Paragraph(
            "Complete the script to print: Node version, platform, current working directory, "
            "and a custom env var <font face='Courier'>LAB_NAME</font>. "
            "Run twice: once normally, once with "
            "<font face='Courier'>set LAB_NAME=NodeLab</font> (Windows) or "
            "<font face='Courier'>LAB_NAME=NodeLab node task3-process.js</font> (macOS/Linux).",
            styles["Body"],
        )
    )

    # Task 4
    story.append(PageBreak())
    story.append(Paragraph("Task 4 — EventEmitter Logger (8 min)", styles["H2"]))
    story.append(Paragraph("<b>File:</b> <font face='Courier'>task4-events.js</font>", styles["Body"]))
    story.append(
        Paragraph(
            "Build a tiny logger class that extends <font face='Courier'>EventEmitter</font>. "
            "It should have a <font face='Courier'>log(level, message)</font> method that emits a "
            "<font face='Courier'>'log'</font> event with <font face='Courier'>{ level, message, timestamp }</font>. "
            "Register a listener that prints: <font face='Courier'>[INFO] 2026-... Your message</font>.",
            styles["Body"],
        )
    )
    story.append(code_block(
        """const { EventEmitter } = require('events');

class Logger extends EventEmitter {
  log(level, message) {
    // TODO: emit 'log' event with { level, message, timestamp: new Date().toISOString() }
  }
}

const logger = new Logger();
logger.on('log', (entry) => {
  // TODO: print formatted line
});

logger.log('INFO', 'Server started');
logger.log('WARN', 'Low disk space');""",
        styles,
    ))

    # Task 5
    story.append(Paragraph("Task 5 — Raw HTTP Server (12 min)", styles["H2"]))
    story.append(Paragraph("<b>File:</b> <font face='Courier'>task5-http-server.js</font>", styles["Body"]))
    story.append(
        Paragraph(
            "Create a server on port <font face='Courier'>4000</font> using only the built-in "
            "<font face='Courier'>http</font> module (no Express). Requirements:",
            styles["Body"],
        )
    )
    story.append(
        ListFlowable(
            [
                ListItem(Paragraph("<font face='Courier'>GET /</font> → JSON <font face='Courier'>{ \"ok\": true, \"message\": \"Node HTTP lab\" }</font>", styles["Body"])),
                ListItem(Paragraph("<font face='Courier'>GET /time</font> → JSON with current ISO timestamp", styles["Body"])),
                ListItem(Paragraph("Any other route → status 404, JSON <font face='Courier'>{ \"error\": \"Not found\" }</font>", styles["Body"])),
                ListItem(Paragraph("Set <font face='Courier'>Content-Type: application/json</font> on every response", styles["Body"])),
                ListItem(Paragraph("Test with browser or <font face='Courier'>curl http://localhost:4000/time</font>", styles["Body"])),
            ],
            bulletType="bullet",
            start="•",
        )
    )
    story.append(
        Paragraph(
            "<b>Bonus (+5):</b> Read the port from <font face='Courier'>process.env.PORT</font> "
            "with fallback 4000. This mirrors how your Express apps from Day 23 should be configured.",
            styles["Tip"],
        )
    )

    # Task 6
    story.append(Paragraph("Task 6 — Modules Refactor (2 min)", styles["H2"]))
    story.append(Paragraph("<b>Files:</b> <font face='Courier'>utils/format.js</font> + update <font face='Courier'>task4-events.js</font>", styles["Body"]))
    story.append(
        Paragraph(
            "Move the log formatting logic into <font face='Courier'>utils/format.js</font> "
            "using <font face='Courier'>module.exports</font>. Import it in task4. "
            "This mirrors how Express projects split routes, models, and helpers.",
            styles["Body"],
        )
    )

    # Submission
    story.append(Paragraph("Submission Checklist", styles["H2"]))
    checklist = [
        "All 5 task files run without errors",
        "Task 1 has a comment explaining event loop order",
        "data/users.json created by Task 2",
        "HTTP server responds correctly on / and /time",
        "utils/format.js exported and used in Task 4/6",
    ]
    story.append(
        ListFlowable(
            [ListItem(Paragraph(item, styles["Body"])) for item in checklist],
            bulletType="bullet",
            start="☐",
        )
    )

    story.append(Spacer(1, 16))
    story.append(HRFlowable(width="100%", thickness=1, color=GRAY))
    story.append(
        Paragraph(
            "Questions? Raise your hand. Stuck for more than 5 minutes on one task — skip ahead and return later.",
            styles["Body"],
        )
    )

    doc.build(story)
    print(f"Saved {OUTPUT}")


if __name__ == "__main__":
    build_pdf()
