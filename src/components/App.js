import React, { useState, useEffect } from "react";
import Form from "./Form";
import Records from "./Records";
import "../styles/index.css";
import Header from "./Header";
import GridCustomize from "./GridCustomize";
import { FIELDS } from "../helpers/constants";
import TagsBar from "./TagsBar";

const App = () => {
  const [recordsPage, setTogglePage] = useState(false);
  const [customizeGridBar, toggleCustomizeGridBar] = useState(false);
  const [fieldsSelected, setFieldsSelected] = useState(FIELDS);
  const [customFields, setCustomFields] = useState([]);
  const [fieldsUpdated, setFieldsUpdated] = useState(false);
  const [data, setData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [tags, setTags] = useState(["testtag1", "testtag2"]);
  const [tagsBar, toggleTagsBar] = useState(false);

  useEffect(() => {
    fetchDummyData();
  }, []);

  const fetchDummyData = async () => {
    const data = await fetch(
      `https://sheltered-hamlet-69701.herokuapp.com/`
    ).then((res) => res.json());
    setData(data);
    setIsFetched(true);
  };

  const handleCustomFieldsUpdate = () => {
    setFieldsUpdated(true);
  };

  const handleDataUpdate = (updatedData) => setData(updatedData);

  return (
    <div className="container">
      <Header
        recordsPage={recordsPage}
        togglePage={setTogglePage}
        customizeGridBar={customizeGridBar}
        toggleCustomizeGridBar={toggleCustomizeGridBar}
        toggleTagsBar={toggleTagsBar}
        tagsBar={tagsBar}
      />

      {recordsPage ? (
        isFetched ? (
          <Records
            fieldsSelected={fieldsSelected}
            customFields={fieldsUpdated ? customFields : []}
            data={data}
            setData={setData}
            tags={tags}
            handleDataUpdate={handleDataUpdate}
            setTags={setTags}
            customizeGridBar={customizeGridBar}
            tagsBar={tagsBar}
          />
        ) : (
          <div className="load">
            <div className="loader"></div>
            <span className="loading">LOADING...</span>
          </div>
        )
      ) : (
        <Form
          data={data}
          setData={setData}
          setTogglePage={setTogglePage}
          recordsPage={recordsPage}
        />
      )}

      {customizeGridBar && (
        <GridCustomize
          customizeGridBar={customizeGridBar}
          toggleCustomizeGridBar={toggleCustomizeGridBar}
          fieldsSelected={fieldsSelected}
          setFieldsSelected={setFieldsSelected}
          setCustomFields={setCustomFields}
          handleCustomFieldsUpdate={handleCustomFieldsUpdate}
        />
      )}
      {tagsBar && (
        <TagsBar
          toggleTagsBar={toggleTagsBar}
          tagsBar={tagsBar}
          tags={tags}
          setTags={setTags}
        />
      )}
    </div>
  );
};

export default App;
