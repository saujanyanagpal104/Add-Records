import React, { useState } from "react";

const AssignTags = ({
  tags,
  setTags,
  setToggleTagsBlock,
  toggleTagsBlock,
  assignedTags,
  setAssignedTags,
  handleDataUpdate,
  record,
  data,
}) => {
  const [tag, setTag] = useState("");

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const createTag = (e) => {
    e.preventDefault();
    setTags([tag, ...tags]);
  };

  const handleClose = () => {
    setToggleTagsBlock(!toggleTagsBlock);
  };

  const assignTags = (e) => {
    setAssignedTags([e.target.innerText, ...assignedTags]);
    const filterRecord = data.findIndex(
      (val) => val["fullname"] === record.fullname
    );
    data[filterRecord].tags = assignedTags;
    handleDataUpdate(data);
  };

  return (
    <div className="assign-tags-container">
      <div className="tags-header">
        <span className="tags-heading">Tags</span>
        <span className="tags-close" onClick={handleClose}>
          X (CLOSE)
        </span>
      </div>
      <div className="create-tags">
        <form>
          <input
            type="text"
            value={tag}
            placeholder="Create Tag"
            onChange={handleChange}
          />
          <button className="create-tag-button" onClick={createTag}>
            Save Tag
          </button>
        </form>
      </div>
      <div className="all-tags-heading">
        <span>Available Tags</span>
      </div>
      <div className="all-tags">
        {tags.map((tag, index) => (
          <span className="tag" key={index} onClick={assignTags}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AssignTags;
