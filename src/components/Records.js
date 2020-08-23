import React from "react";
import Record from "./Record";

const Records = ({
  fieldsSelected,
  customFields,
  data,
  setData,
  tags,
  handleDataUpdate,
  setTags,
  customizeGridBar,
  tagsBar,
}) => {
  const updateData = (property, checkValue) => {
    const filterData = data.filter((val) => val[property] !== checkValue);
    setData(filterData);
  };

  const fields = customFields.length
    ? customFields
    : fieldsSelected.filter((val) => val.default === true);

  return (
    <>
      <div className="records-heading">Records</div>
      <div
        className={`records ${
          customizeGridBar || tagsBar ? "mobile-overflow" : ""
        }`}
      >
        <div className="records-header">
          {fields.map((field) => (
            <span key={field.text} className="grid-head">
              {field.default ? field.text : null}
            </span>
          ))}
          <span className="expand">Expand</span>
          <span className="delete">Delete</span>
          <span className="edit">Edit</span>
          <span className="notes">Add Notes</span>
          <span className="tags">Add Tags</span>
        </div>
        <div className="records-other">
          {data.map((record) => (
            <Record
              key={record.id}
              record={record}
              fields={fields}
              fieldsSelected={fieldsSelected}
              updateData={updateData}
              tags={tags}
              setTags={setTags}
              data={data}
              setData={setData}
              handleDataUpdate={handleDataUpdate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Records;
