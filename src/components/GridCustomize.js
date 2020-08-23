import React, { useState, useEffect } from "react";
import CustomizeGridField from "./CustomizeGridField";

const GridCustomize = ({
  customizeGridBar,
  toggleCustomizeGridBar,
  fieldsSelected,
  handleCustomFieldsUpdate,
  setCustomFields,
}) => {
  const [sliderState, setSliderState] = useState("active");
  const [error, setError] = useState(false);
  const [gridTabs, setGridTabs] = useState([]);

  useEffect(() => {
    setCustomFields([]);
  }, [setCustomFields]);

  const handleClose = () => {
    setSliderState("close");
    setTimeout(() => toggleCustomizeGridBar(false), 1000);
  };

  const handleUpdate = () => {
    if (gridTabs.length === 5) {
      setError(false);
      setCustomFields(gridTabs);
      handleCustomFieldsUpdate();
      handleClose();
    } else {
      setError(true);
    }
  };

  return (
    <div
      className={`grid-customize-container ${
        customizeGridBar ? `${sliderState}-customize-grid` : ""
      }`}
    >
      <div className="grid-customize-header">
        <span className="grid-customize-heading">CUSTOMIZE GRID</span>
        <span className="grid-customize-close" onClick={handleClose}>
          X (CLOSE)
        </span>
      </div>
      <span className="customize-grid-desc">
        Select the five fields to show on top of the grid
      </span>
      {error && (
        <span className="customize-grid-desc error">
          Please select Five Tabs
        </span>
      )}
      <div className="show-fields">
        {fieldsSelected.map((field, index) => (
          <CustomizeGridField
            gridTabs={gridTabs}
            key={field.text}
            text={field.text}
            dataTag={field.dataTag}
            index={index}
            setGridTabs={setGridTabs}
          />
        ))}
      </div>
      <span className="update-button" onClick={handleUpdate}>
        UPDATE
      </span>
    </div>
  );
};
export default GridCustomize;
