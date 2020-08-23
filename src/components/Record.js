import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlusCircle,
  faTrashAlt,
  faStickyNote,
  faTags,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Notes from "./Notes";
import AssignTags from "./AssignTags";
import EditForm from "./EditForm";

const Record = ({
  record,
  fields,
  updateData,
  fieldsSelected,
  handleDataUpdate,
  tags,
  setTags,
  data,
}) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState("");
  const [toggleNote, setToggleNote] = useState("");
  const [toggleTagsBlock, setToggleTagsBlock] = useState("");
  const [assignedTags, setAssignedTags] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [confirmationBox, setConfirmationBox] = useState(false);
  const [editForm, setEditForm] = useState(false);

  const recordRef = useRef(null);

  const handleEditForm = () => {
    setEditForm(!editForm);
  };

  const deleteRecord = (e) => {
    setConfirmationBox(true);
    setDeleteConfirm(true);
  };

  const expandRecord = () => {
    setExpand(!expand);
  };

  const handleNotes = () => {
    setToggleNote(!toggleNote);
  };

  const handleTags = () => {
    setToggleTagsBlock(!toggleTagsBlock);
  };

  const confirmDelete = () => {
    if (deleteConfirm) {
      updateData(
        recordRef.current.childNodes[0].dataset.target,
        recordRef.current.childNodes[0].innerText
      );
      setConfirmationBox(false);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirm(false);
    setConfirmationBox(false);
  };

  return (
    <>
      <div className="record-row" ref={recordRef}>
        {fields.map((field) => (
          <span
            key={field.text}
            data-target={field.dataTag}
            className="record-box"
          >
            {record[field.dataTag]}
          </span>
        ))}
        <span className="record-box expand-icon" onClick={expandRecord}>
          <FontAwesomeIcon icon={expand ? faMinusCircle : faPlusCircle} />
        </span>
        <span className="record-box delete-icon" onClick={deleteRecord}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
        <span className="record-box edit-icon" onClick={handleEditForm}>
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span className="record-box notes-icon" onClick={handleNotes}>
          <FontAwesomeIcon icon={faStickyNote} />
        </span>
        <span className="record-box tags-icon" onClick={handleTags}>
          <div>
            <FontAwesomeIcon icon={faTags} />
          </div>
          <span className="assigned-tags">
            {assignedTags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </span>
        </span>
        {toggleNote && (
          <Notes
            note={note}
            setNote={setNote}
            toggleNote={toggleNote}
            setToggleNote={setToggleNote}
          />
        )}
        {toggleTagsBlock && (
          <AssignTags
            tags={tags}
            setTags={setTags}
            toggleTagsBlock={toggleTagsBlock}
            setToggleTagsBlock={setToggleTagsBlock}
            assignedTags={assignedTags}
            setAssignedTags={setAssignedTags}
            handleDataUpdate={handleDataUpdate}
            record={record}
            data={data}
          />
        )}
        {confirmationBox && (
          <div className="delete-confirm">
            <span className="delete-confirm-text">Delete this record?</span>
            <span className="delete-confirm-buttons">
              <span className="delete-cancel-button" onClick={cancelDelete}>
                Cancel
              </span>
              <span className="delete-confirm-button" onClick={confirmDelete}>
                Confirm
              </span>
            </span>
          </div>
        )}
        {editForm && (
          <EditForm
            record={record}
            data={data}
            handleDataUpdate={handleDataUpdate}
            setEditForm={setEditForm}
          />
        )}
      </div>
      {expand && (
        <div className="expanded-row">
          <div className="records-header-expanded">
            {fieldsSelected.map((field) => (
              <span key={field.text} className="grid-head">
                {field.text}
              </span>
            ))}
          </div>
          <div className="record-row-expanded">
            {fieldsSelected.map((field) => (
              <span
                key={field.text}
                data-target={field.dataTag}
                className="record-box"
              >
                {record[field.dataTag]}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Record;
