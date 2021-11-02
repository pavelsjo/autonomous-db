const fetch = require("node-fetch");

class AutonomousDataBase {

    constructor({ordsUrl, user, password}) {
        
        this.ordsUrl = ordsUrl;
        this.user = user;
        this.password = password;

        // internal parameters
        this.URI = `${this.ordsUrl + this.user}/_/sql`
        this.headers = {
            "Content-Type": "application/json",
            "authorization": `Basic ${Buffer.from(this.user + ":" + this.password).toString('base64')}`
        };
    }
    // Oracle Rest Data Services - ORDS
    async query (statementText, limit=1000, offset=0) {
        
        const response = await fetch(this.URI, {
            method: 'POST', 
            headers: this.headers, 
            body: JSON.stringify({statementText, limit, offset})
        });

        const data = await response.json()
        
        return data.items[0].resultSet;
    }
    table (tableName) {
        this.tableName = tableName;
        return this
    }
    async get() {

        // parameters
        const table = this.tableName;

        // query setup
        const query = {statementText:`SELECT ROWID, t.* FROM ${table} t`};

        // fetch data
        const response = await this.query(query);
        const data = await response.json();
        return data.items[0].resultSet.items
    }
    async add(json) {

        // paramaters
        const table = this.tableName;
        const cols = Object.keys(json).join(',');
        const values = Object.values(json).map( x => `'${x}'`).join(',');

        // query setup
        const query = `INSERT INTO ${table}(${cols})VALUES(${values});`

        return this.query({statementText:query});
    }
    async delete() {

        // paramaters
        const table = this.tableName;
        const id = this.id;
        
        // query setup
        const query = `DELETE FROM ${table} WHERE ROWID = ${id};`;

        return this.query({statementText:query});
    }
    row (id) {
        this.id = id;
        return this; 
    }
};

module.exports.AutonomousDataBase = AutonomousDataBase;