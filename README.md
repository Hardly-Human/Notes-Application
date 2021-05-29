# Command line Notes Application

---

### A Notes taking application written in JavaScript in NodeJS environment, which stores data in JSON format.

#### Dependencies

-   yargs --> for parsing command line input.
-   chalk --> for styling output strings.

#### Installation

-   npm install

#### Use

##### Add a Note :

-   _node app.js add --title=`<TITLE>` --body=`<BODY OF NOTE>`_

##### Delete a Note :

-   _node app.js remove --title=`<TITLE>`_

##### List all Notes :

-   _node app.js list_

##### Read a Note :

-   _node app.js read --title=`<TITLE>`_
