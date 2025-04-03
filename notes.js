 document.addEventListener("DOMContentLoaded", loadNotes);

const addNoteBtn = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");

addNoteBtn.addEventListener("click", addNote);

function addNote() {
    let noteText = prompt("Enter your note:");
    if (noteText) {
        const note = { id: Date.now(), text: noteText };
        saveNoteToLocalStorage(note);
        displayNotes();
    }
}

function saveNoteToLocalStorage(note) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

function loadNotes() {
    displayNotes();
}

function displayNotes() {
    notesContainer.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach(note => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.innerHTML = `
            <p>${note.text}</p>
            <button class="delete" onclick="deleteNote(${note.id})">❌</button>
        `;
        notesContainer.appendChild(noteDiv);
    });
}


// // Firebase Config
// const firebaseConfig = {
//     apiKey: "YOUR_FIREBASE_API_KEY",
//     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_PROJECT_ID.appspot.com",
//     messagingSenderId: "YOUR_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// // Initialize Quill.js Rich Text Editor
// const quill = new Quill('#editor-container', {
//     theme: 'snow'
// });

// document.addEventListener("DOMContentLoaded", loadNotes);

// const addNoteBtn = document.getElementById("addNote");
// const saveNoteBtn = document.getElementById("saveNote");
// const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
// const notesContainer = document.getElementById("notesContainer");

// let editingNoteId = null;

// addNoteBtn.addEventListener("click", () => {
//     quill.root.innerHTML = "";
//     editingNoteId = null;
// });

// saveNoteBtn.addEventListener("click", () => {
//     const noteContent = quill.root.innerHTML;
//     if (editingNoteId) {
//         updateNoteInFirebase(editingNoteId, noteContent);
//     } else {
//         addNoteToFirebase(noteContent);
//     }
// });

// toggleDarkModeBtn.addEventListener("click", () => {
//     docufunction updateNoteInFirebase(id, content) {
//     db.collection("notes").doc(id).update({ content })
//         .then(() => {
//             editingNoteId = null;
//             loadNotes();
//         });
// }

// function deleteNoteFromFirebase(id) {
//     db.collection("notes").doc(id).delete()
//         .then(() => loadNotes());
// }

// function loadNotes() {
//     notesContainer.innerHTML = "";
//     db.collection("notes").orderBy("timestamp", "desc").get()
//         .then(snapshot => {
//             snapshot.forEach(doc => {
//                 const note = doc.data();
//                 const noteDiv = document.createElement("div");
//                 noteDiv.classList.add("note");
//                 noteDiv.innerHTML = `
//                     <div class="note-content">${note.content}</div>
//                     <button class="edit" onclick="editNote('${doc.id}', '${note.content.replace(/"/g, '&quot;')}')">✏️ Edit</button>
//                     <button class="delete" onclick="deleteNoteFromFirebase('${doc.id}')">❌</button>
//                 `;
//                 notesContainer.appendChild(noteDiv);
//             });
//         });
// }

// function editNote(id, content) {
//     editingNoteId = id;
//     quill.root.innerHTML = content;
// }ment.body.classList.toggle("dark-mode");
// });

// // Firebase Functions
// function addNoteToFirebase(content) {
//     db.collection("notes").add({ content, timestamp: firebase.firestore.FieldValue.serverTimestamp() })
//         .then(() => loadNotes());
// }


