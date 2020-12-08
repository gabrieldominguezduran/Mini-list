import React, { useState } from "react";

const Note = ({ message, id, deleteNote, handleEditNotes }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(message);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditNotes(editValue, id);
    } else {
      setEditValue(message);
    }
  };
  let messages = (
    <div className="note">
      {onEdit ? (
        <div className="btns">
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            data-testid="editInput"
          />
          <button className="buttons" onClick={() => handleSave(id)}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>{message}</p>
          <div className="btns">
            <button className="buttons" onClick={() => handleOnEdit(id)}>
              Edit
            </button>
            <button className="buttons" onClick={() => deleteNote(id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
  return <div className="notes-area">{message ? messages : ""}</div>;
};

export default Note;
