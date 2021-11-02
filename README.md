# Autonomous Data Base (unoficcial)

This repository contains the npm package's to work with Oracle Autonomous Data Base for NodeJs developers (unoficcial) name [autonomous-db](https://www.npmjs.com/package/autonomous-db).

## Setup

First you need install [Node](https://nodejs.org/en/) and the [autonomous-db](https://www.npmjs.com/package/autonomous-db) package:

```shel
npm install autonomous-db
```

The config's values come from your `Autonomous Data Warehouse (ADW) / Autonomous Transaction Procesing (ATP)`, look for [Oracle Rest Data Services (ORDS) URL](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/ords-access.html), finally, this user must to have ORDS permissions too.

## Example

```javascript
const adb = require('autonomous-db');

const config = {
    ordsUrl : "https://<host>.adb.<region>.oraclecloudapps.com/ords/",
    user : "user",
    password : "password",
};

const db = new adb.AutonomousDataBase(config);

db.query("SELECT sysdate FROM dual")
.then(data => console.log(data))
  .catch(err => console.log(err));
```
