Daily Journal – Ink Your Thoughts, Free Your Mind

A simple, beautiful, and responsive Daily Journal Web App that allows users to record their moods and thoughts, store them on a backend server, and manage their entries with ease.

Features

Mood selection to express how you feel

Journal entry section to save daily thoughts

View all saved entries

Delete unwanted entries

Elegant UI with Google Fonts and glassmorphism effect

Project Structure

index.html – Main structure of the app

styles.css – Styling for UI and layout

script.js – Handles fetch, submit, and delete operations

Tech Stack

Frontend: HTML, CSS, JavaScript (Vanilla)

Styling: Google Fonts, Linear Gradient, Glassmorphism

Backend: Node.js/Express REST API (Hosted on Render)

How to Run Locally

Clone the repository:

git clone https://github.com/your-username/daily-journal.git
cd daily-journal


Update the backend URL in script.js with your Render API link

Open index.html in your browser or use VS Code Live Server

API Endpoints

GET /api/journals – Fetch all entries

POST /api/journals – Add a new entry

{ "mood": "Happy", "text": "Had a great day!" }


DELETE /api/journals/:id – Delete entry by ID

Future Enhancements

Mood analytics with charts

Image uploads for entries

User authentication for private journals
