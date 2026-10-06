# 🎯 Internship Tracker V2

A clean, minimal **Kanban board for tracking internship and volunteer applications** — from the first "Applied" to the final "Offer."

Add an opportunity, choose whether it's an **Internship** or **Volunteer** position, drop it into a column, and drag it forward as things progress. Keep notes and recruiter details on every card, search for specific opportunities, and keep track of your internship and volunteer applications separately.

No accounts, no cloud, no clutter.

---

## ⚡ Quick Start

Requires **Node.js 24+** (the backend uses Node's built-in `node:sqlite`, so there's no native module to compile).

```bash
git clone [https://github.com/muhammed-a-coder/Internship-Tracker.git](https://github.com/muhammed-a-coder/Internship-Tracker.git)
cd Internship-Tracker
npm install
npm run dev
```

Then open `http://localhost:5175`.
This is a local web app. It runs on your machine and isn't deployed anywhere.

## 🧭 What It Does
* Add an opportunity with a company, role, location, type, and date applied.
* Categorize each opportunity as either an Internship or Volunteer position.
* Autocomplete suggests companies as you type, with logos and HQ locations, and auto-fills the location.
* Search your applications using the search bar to quickly find a specific internship or volunteer opportunity.
* Track each opportunity across four stages:
  * 🔘 Applied
  * 🟠 Interviewing
  * 🟢 Offer
  * 🔴 Rejected
* Drag and drop cards between columns as your status changes.
* Open a card to edit its information and keep notes and recruiter details.
* Track your applications with separate counts for internships and volunteer opportunities.
* Switch between light and dark mode depending on your preference.

## ✨ V2 Features

### 🌙 Dark Mode

V2 introduces a full dark mode for a more comfortable experience, especially when using the tracker at night.
You can switch between the light and dark themes directly from the application.

### 💼 Internship & Volunteer Categories

Every opportunity can now be categorized as either:
* 💼 Internship
* 🤝 Volunteer

This makes it easy to distinguish between internship applications and volunteer opportunities.

### 📊 Separate Opportunity Counts

The dashboard now keeps separate counts for each type of opportunity.
For example:
* Total Opportunities: 24
* 💼 Internships: 16
* 🤝 Volunteers: 8

This gives you an immediate overview of how many internships and volunteer opportunities you're currently tracking.

### 🔎 Search

V2 includes a search bar that lets you quickly find a specific opportunity.
You can search by information such as:
* Company name
* Role
* Internship
* Volunteer
* Other application information

Instead of manually looking through every card, simply search for what you're looking for.

## 🗂️ Application Fields

| Field | Where | Notes |
| :--- | :--- | :--- |
| Company | Add form | Autocomplete from a built-in company directory |
| Type | Add form | Internship or Volunteer |
| Role | Add form | e.g. Software Engineering Intern |
| Location | Add form | Auto-filled from the company, editable |
| Date applied | Add form | Defaults to today |
| What they're looking for | Detail panel | Large free-text box |
| Recruiter notes | Detail panel | Free text |
| Recruiter name / email | Detail panel | Contact details |

## 📌 Application Statuses

Each opportunity can be tracked through four stages:

| Status | Meaning |
| :--- | :--- |
| 🔘 Applied | Application or inquiry has been submitted |
| 🟠 Interviewing | You're currently in the interview or selection process |
| 🟢 Offer | You've received an offer |
| 🔴 Rejected | The application was rejected or the opportunity ended |

Move opportunities between statuses using drag and drop.

## ⚙️ Usage

1. Click **Add application**.
2. Start typing a company name and pick a suggestion.
3. Choose whether the opportunity is an Internship or Volunteer position.
4. Enter the role, adjust the location or date if needed.
5. Click **Add application**.
6. New opportunities land in **Applied**.
7. Drag the card to **Interviewing**, **Offer**, or **Rejected** as things change.
8. Use the search bar to quickly find a specific internship or volunteer opportunity.
9. Open a card to edit its details or add notes and recruiter information.
10. Use the light/dark mode toggle to change the appearance.
11. Click the `✕` on a card to remove it.

## 📊 Internship & Volunteer Tracking

V2 makes it possible to keep internship and volunteer opportunities organized in the same tracker without mixing them together.
Every application has an opportunity type:

| Type | Description |
| :--- | :--- |
| 💼 Internship | A professional internship, work placement, or internship program |
| 🤝 Volunteer | A volunteer position or volunteer opportunity |

The dashboard provides separate counts for both categories while still showing the overall number of opportunities.

## 🔎 Searching Applications

The search bar allows you to quickly locate an opportunity without manually checking every column.
For example, you can search for:
`Google`
to find opportunities associated with Google.

Or:
`Software Engineer`
to find relevant software engineering opportunities.

You can also search for:
`Internship`
or:
`Volunteer`
to help identify opportunities of a particular type.

## 💾 Where Is My Data Stored?

In a SQLite database on your own machine, at `data/tracker.db`, written by the local Express server.

* It is not stored in your browser, so clearing browser data won't erase it.
* It is not synced. There are no accounts, no auth, no cloud, and no multi-device support.
* Your data stays on the machine that runs the app.
* To back it up or move it, copy `data/tracker.db`.

## 🛠️ Tech Stack

| Layer | Choice |
| :--- | :--- |
| Framework | React 19 + Vite 8 (plain JavaScript, no TypeScript) |
| Styling | Hand-written CSS in a single file, `src/index.css` — no Tailwind, CSS-in-JS, or component library |
| Drag & drop | `@dnd-kit` (core, sortable, utilities) |
| Company logos | `react-icons` Simple Icons in brand colours, plus hand-written multi-colour SVGs and a grey initial-circle fallback |
| Backend | Express 5 |
| Database | SQLite via Node's built-in `node:sqlite` |

## 🗺️ Roadmap

Future improvements:
* Export applications to CSV
* Interview and deadline reminders
* More detailed application statistics
* Calendar integration
* Application backup/import
* Additional filtering options

## 🤝 Contributing
Suggestions and pull requests are welcome. Open an issue first for anything big so we can talk it through.

---

## 📄 License

MIT. See [LICENSE](LICENSE).

---

**Author:** [Muhammed Azzouz Ali](https://github.com/muhammed-a-coder)
