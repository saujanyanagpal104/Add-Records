import React, { useState } from "react";

const TagsBar = ({ toggleTagsBar, tagsBar, tags, setTags }) => {
  const [sliderState, setSliderState] = useState("active");
  const [tag, setTag] = useState("");

  const handleClose = () => {
    setSliderState("close");
    setTimeout(() => toggleTagsBar(false), 1000);
  };

  const createTag = (e) => {
    e.preventDefault();
    setTags([tag, ...tags]);
  };

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <div
      className={`tags-container ${tagsBar ? `${sliderState}-tags-bar` : ""}`}
    >
      <div className="tags-header">
        <span className="tags-heading">Tags</span>
        <span className="tags-close" onClick={handleClose}>
          X (CLOSE)
        </span>
      </div>
      <span className="tags-desc">Create Tags</span>

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
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TagsBar;
