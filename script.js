const BASE_URL = "https://your-app-name.onrender.com/api/journals"; // replace with your actual Render link

function fetchAllEntries() {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((entries) => renderEntries(entries));
}

function submitJournal() {
  const mood = document.getElementById("mood").value;
  const text = document.getElementById("entry").value;

  if (!mood || !text) {
    alert("Please select a mood and write an entry.");
    return;
  }

  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mood, text }),
  })
    .then((res) => res.json())
    .then(() => {
      alert("Entry saved!");
      document.getElementById("entry").value = "";
      fetchAllEntries();
    });
}

function deleteEntry(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then(() => fetchAllEntries());
}

function renderEntries(entries) {
  const list = document.getElementById("journalList");
  list.innerHTML = "";

  entries.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <strong>Mood:</strong> ${entry.mood}<br>
      <strong>Date:</strong> ${new Date(
        entry.createdAt
      ).toLocaleDateString()}<br>
      <p>${entry.text}</p>
      <button onclick="deleteEntry('${entry._id}')">Delete</button>
    `;
    list.appendChild(div);
  });
}

window.onload = fetchAllEntries;
