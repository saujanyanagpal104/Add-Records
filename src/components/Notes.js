import React from "react";

const Notes = ({ note, setNote, toggleNote, setToggleNote }) => {
  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setToggleNote(!toggleNote);
  };

  return (
    <div className="note-container">
      <form>
        <textarea
          value={note}
          onChange={handleChange}
          className="note-text-box"
          placeholder="Write notes here..."
        ></textarea>
        <button className="notes-save-button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Notes;
