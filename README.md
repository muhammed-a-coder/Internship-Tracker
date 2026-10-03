# 🎯 Internship Tracker

A clean, minimal **Kanban board for tracking internship applications** — from the first "Applied" to the final "Offer."

Add a company, drop it in a column, and drag it forward as things progress. Keep notes and recruiter details on every card. No accounts, no cloud, no clutter.

---

## ⚡ Quick Start

Requires **Node.js 24+** (the backend uses Node's built-in `node:sqlite`, so there's no native module to compile).

```bash
git clone https://github.com/muhammed-a-coder/Internship-Tracker.git
cd Internship-Tracker
npm install
npm run dev
```

Then open [http://localhost:5175](http://localhost:5175).

This is a **local web app**. It runs on your machine and isn't deployed anywhere.

---

## 🧭 What It Does

1. **Add** an application with a company, role, location, and date applied.
2. **Autocomplete** suggests companies as you type, with logos and HQ locations, and auto-fills the location.
3. **Track** each application across four stages:
   - 🔘 **Applied**
   - 🟠 **Interviewing**
   - 🟢 **Offer**
   - 🔴 **Rejected**
4. **Drag and drop** cards between columns as your status changes.
5. **Open a card** to edit any field and keep notes and recruiter details.
6. **Stay oriented** with per-column counts and a running total in the header.

---

## ✨ Features

- **Kanban board** — four columns, one glance, full picture of your search.
- **Company autocomplete** — type `go` and get Google, GoDaddy, Goldman Sachs, and more, each with a logo and location.
- **Auto-filled details** — picking a company fills in its location; the date defaults to today.
- **Drag-and-drop** — move an application to a new stage in one motion, powered by `@dnd-kit`.
- **Inline add form** — add an application without leaving the board.
- **Detail panel** — a slide-in panel where every field is editable.
- **Notes** — a large "What they're looking for" box and a separate "Recruiter notes" field.
- **Recruiter contact** — store the recruiter's name and email on the card.
- **Quick remove** — hit the ✕ on any card to delete it.
- **Persistent storage** — everything is saved in a real SQLite database.
- **Friendly empty states** — empty columns say "Nothing here yet."

---

## 🗂️ Application Fields

| Field | Where | Notes |
|---|---|---|
| Company | Add form | Autocomplete from a built-in company directory |
| Role | Add form | e.g. *Software Engineering Intern* |
| Location | Add form | Auto-filled from the company, editable |
| Date applied | Add form | Defaults to today |
| What they're looking for | Detail panel | Large free-text box |
| Recruiter notes | Detail panel | Free text |
| Recruiter name / email | Detail panel | Contact details |

---

## ⚙️ Usage

1. Click **Add application** (top right).
2. Start typing a company name and pick a suggestion.
3. Enter the role, adjust the location or date if needed, and click **Add application**.
4. New applications land in **Applied**. Drag the card to **Interviewing**, **Offer**, or **Rejected** as things change.
5. Open a card to edit its details or add notes and recruiter info.
6. Click the **✕** on a card to remove it.

---

## 💾 Where Is My Data Stored?

In a **SQLite database on your own machine**, at `data/tracker.db`, written by the local Express server.

- It is **not** stored in your browser, so clearing browser data won't erase it.
- It is **not** synced. There are no accounts, no auth, no cloud, and no multi-device support. Your data stays on the machine that runs the app.
- To back it up or move it, copy `data/tracker.db`.

---

## 🛠️ Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite 8 (plain JavaScript, no TypeScript) |
| Styling | Hand-written CSS in a single file, `src/index.css` — no Tailwind, CSS-in-JS, or component library |
| Drag & drop | `@dnd-kit` (core, sortable, utilities) |
| Company logos | `react-icons` Simple Icons in brand colours, plus 7 hand-written multi-colour SVGs (Google, Microsoft, Amazon, Adobe, Slack, LinkedIn, Salesforce) and a grey initial-circle fallback |
| Backend | Express 5 |
| Database | SQLite via Node's built-in `node:sqlite` |

---

## 🗺️ Roadmap

Not built yet, but on the list:

- [ ] Search and filter applications
- [ ] Dark mode (currently light theme only)
- [ ] Export to CSV
- [ ] Interview and deadline reminders

---

## 🤝 Contributing

Suggestions and pull requests are welcome. Open an issue first for anything big so we can talk it through.

---

## 📄 License

MIT. See [LICENSE](LICENSE).

---

**Author:** [Muhammed Azzouz Ali](https://github.com/muhammed-a-coder)
