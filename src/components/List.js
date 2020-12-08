import React, { useState } from "react";
import Note from "./Note";

function List() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      message: "",
    },
  ]);
  const [input, setInput] = useState("");
  const handleSubmit = (e, notes, setNotes) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 0;
    setNotes([...notes, { id: id, message: input }]);
    setInput("");
  };

  const handleEditNotes = (editvalue, id) => {
    const newNotes = [...notes];
    newNotes.forEach((note) => {
      if (note.id === id) {
        note.message = editvalue;
      }
    });
    setNotes(newNotes);
  };

  const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderNotes = notes.map((note) => {
    return (
      <Note
        className="message"
        key={note.id}
        message={note.message}
        id={note.id}
        deleteNote={(id) => deleteNote(id, notes, setNotes)}
        handleEditNotes={handleEditNotes}
        data-testid="message"
      />
    );
  });

  return (
    <div className="list">
      <form onSubmit={(e) => handleSubmit(e, notes, setNotes)}>
        <input
          placeholder="Write a list item..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          data-testid="input"
        />
        <button>Add</button>
      </form>
      {renderNotes}
    </div>
  );
}

export default List;
