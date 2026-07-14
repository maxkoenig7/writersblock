# Daily 1000 Prompt Studio

A small local browser app for generating daily 1,000-word short story prompts.

Open `index.html` in a browser to use it. The app stores saved prompts and your daily writing log in the browser's local storage.

## Features

- Generate story briefs with a title, opening line, scene beats, genre, mood, style, POV, character, setting, conflict, motif, theme, craft focus, ending, and constraint.
- Choose a prompt mode: balanced, cozy, strange, dark, or romantic.
- Adjust story intensity from soft pressure to high stakes.
- Lock prompt parts you like and reroll the rest.
- Save prompts locally.
- Upload, drag-and-drop, or paste a `.txt` / `.md` draft and count the words.
- Log the actual word count for each day.
- Save a current draft locally.
- Use a 15, 25, or 45 minute writing timer.
- Save pre-draft notes.
- Review revision signals after uploading a draft.
- Export the prompt, notes, and draft as a markdown file.
- Track a simple daily streak.

## Mobile Install

The app is PWA-ready. After hosting it over HTTPS:

- iPhone: open the site in a browser, use Share, then Add to Home Screen.
- Android: open the site in Chrome or another PWA-capable browser and use Install App when prompted.

The app shell is cached for offline loading after the first hosted visit. Drafts and logs still use browser storage until the Supabase sync layer is added.

## Sync Layer Next

For cross-device sync, add Supabase Auth and database tables for drafts, daily logs, saved prompts, notes, and settings. Use Row Level Security policies so every row is scoped to the signed-in user.

The starter database schema is in `supabase-schema.sql`.
