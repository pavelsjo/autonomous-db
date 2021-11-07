# Autonomous Data Base (experimental) (unoficcial)

This repository contains the npm package's to work with Oracle Autonomous Data Base for NodeJs developers (unoficcial) name [autonomous-db](https://www.npmjs.com/package/autonomous-db).

## Setup

First you need install [Node](https://nodejs.org/en/) and the [autonomous-db](https://www.npmjs.com/package/autonomous-db) package:

```shell
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

## References

- ORDS
- OML
- SODA
  - [Use Oracle Database Actions with SODA](https://docs.oracle.com/en/cloud/paas/autonomous-json-database/ajdug/use-oracle-database-actions-soda.html)
  - [A Supported SQL*Plus and SQLcl Commands](https://docs.oracle.com/en/database/oracle/sql-developer-web/sdwad/supported-commands.html#GUID-397F6B3F-9EA7-4BF6-A446-E4EFB2A7DA7F)
- JSON
  - [Oracle SQL Function JSON_SERIALIZE](https://docs.oracle.com/en/database/oracle/oracle-database/19/adjsn/oracle-sql-function-json_serialize.html#GUID-667D37FF-F5FB-465D-B8AE-DAE88F191B2F)
  - [JSON_ARRAY SQL/JSON Function](https://docs.oracle.com/en/database/oracle/oracle-database/12.2/adjsn/generation.html#GUID-F942D202-E4BB-4ED8-997E-AEBD6D8ED8C1)
