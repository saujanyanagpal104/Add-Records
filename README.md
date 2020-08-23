# Practice Project

Implemented a record form which can be used to add records to a data grid having features like editing, deleting, tagging, adding notes. 

### Folder Structure

```.
|--- api (mock api)
     |--- public(temp folder for storage)
     |--- data.json
     |--- package.json
     |--- server.js
|--- public
     |--- index.html
|--- src
     |--- components
          |--- App.js
          |--- AssignTags.js
          |--- CustomizeGridField.js
          |--- EditForm.js
          |--- Form.js
          |--- GridCustomize.js
          |--- Header.js
          |--- Notes.js
          |--- Record.js
          |--- Records.js
          |--- TagsBar.js
     |--- helpers
          |--- checkDuplicateObject.js
          |--- constants.js
     |--- styles
          |--- index.css
     |--- index.js
|--- package.json
|--- README.md
```

### Follow the steps to run on local machine:

1. Clone the repo https://github.com/saujanyanagpal104/practice.git.
2. Navigate to the code directory.
3. Install all the dependencies by running **npm install** in the terminal.
4. To run the mock api server, navigate to the *api* directory, install all the dependencies by running **npm install** and **npm start** in the terminal.
5. Navigate back to the *main* directory, run **npm start** in the terminal to launch the app on you local machine.

> *This app is initialized using create-react-app.