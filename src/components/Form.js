import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";

const Form = ({ data, setData, recordsPage, setTogglePage }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [formFields, setFormFields] = useState({});
  const [fileData, setSelectedFile] = useState();
  const [date, setDate] = useState(moment(new Date()).format("DD-MM-YYYY"));
  const [fileInfo, setFileInfo] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedfile, setFile] = useState('');

  const handleFormFields = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
      id: startDate.getTime(),
    });
  };

  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDate = (date) => {
    let formatDate = moment(date).format("DD-MM-YYYY");
    setStartDate(date);
    setDate(formatDate);
  };

  const upload = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const data = new FormData();
    data.append("file", fileData);
    await axios
      .post("https://sheltered-hamlet-69701.herokuapp.com/upload", data)
      .then((res) => {
        setFileInfo({ fileName: res.data.filename, size: res.data.size });
        setFile(res.data.filename);
      }
      );
    setIsUploading(false);
    setIsUploaded(true);
  };

  const clearUpload = () => {
    setIsUploading(false);
    setIsUploaded(false);
    setFileInfo({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([{ ...formFields, date, uploadedfile }, ...data]);
    setTogglePage(!recordsPage);
  };

  return (
    <div className="record-form">
      <span className="form-heading">ADD RECORD FORM</span>
      <form>
        <label>
          Full Name:
          <input
            type="text"
            value={formFields.fullname || ""}
            onChange={handleFormFields}
            name="fullname"
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={formFields.username || ""}
            onChange={handleFormFields}
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={formFields.password || ""}
            onChange={handleFormFields}
            name="password"
          />
        </label>
        <div className="label">
          Date:
          <div className="date-pick">
            <DatePicker selected={startDate} onChange={handleDate} />
          </div>
        </div>
        <label>
          Upload File:
          {isUploading ? (
            <span>Uploading...</span>
          ) : isUploaded ? (
            <span className="upload-details">
              <span className='file-detail'>Filename: {fileInfo.fileName}</span>
              <span className='file-detail'>Size: {fileInfo.size}</span>
              <span className='upload-again-button' onClick={clearUpload}>Upload Again</span>
            </span>
          ) : (
            <div className="upload-pair">
              <input type="file" name="uploadedfile" onChange={handleFile} />
              <button className="upload-button" onClick={upload}>
                Upload
              </button>
            </div>
          )}
        </label>
        <label>
          Description:
          <textarea
            value={formFields.desc || ""}
            onChange={handleFormFields}
            name="desc"
          ></textarea>
        </label>
        <label>
          Mobile:
          <input
            type="text"
            value={formFields.phone || ""}
            onChange={handleFormFields}
            name="phone"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={formFields.email || ""}
            onChange={handleFormFields}
            name="email"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={formFields.city || ""}
            onChange={handleFormFields}
            name="city"
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={formFields.state || ""}
            onChange={handleFormFields}
            name="state"
          />
        </label>
        <button className="form-submit-button" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
