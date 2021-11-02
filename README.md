# Autonomous Data Base (unoficcial)

This repository contains the npm package's code to work with Oracle Autonomous Data Base for NodeJs developers (unoficcial) name [autonomous-db](https://www.npmjs.com/package/autonomous-db).

## Setup

First you must be installed [Node](https://nodejs.org/en/):

```shell
npm install autonomous-db
```

And the parameters required come from your `Autonomous Data Warehouse (ADW) / Autonomous Transaction Procesing (ATP)` and look for [Oracle Rest Data Services URL](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/ords-access.html), finaly, the user must be ORDS permisions too.

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
