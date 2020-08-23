import React from "react";

const Header = ({
  recordsPage,
  toggleCustomizeGridBar,
  togglePage,
  toggleTagsBar,
  tagsBar,
}) => {
  const handleClick = () => {
    togglePage(!recordsPage);
  };

  const handleTags = () => {
    toggleTagsBar(!tagsBar);
  };

  const handleCustomizeGrid = () => {
    toggleCustomizeGridBar(true);
  };

  return (
    <div className="header">
      <span className="logo">ASSIGNMENT</span>
      <div className="header-buttons">
        {recordsPage && (
          <span className="header-button" onClick={handleTags}>
            TAGS
          </span>
        )}
        {recordsPage && (
          <span className="header-button" onClick={handleClick}>
            ADD RECORD
          </span>
        )}
        {recordsPage && (
          <span className="header-button" onClick={handleCustomizeGrid}>
            CUSTOMIZE GRID
          </span>
        )}
        {!recordsPage && (
          <span className="header-button" onClick={handleClick}>
            RECORDS
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
