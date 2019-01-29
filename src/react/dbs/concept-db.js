import ConceptModel from "../models/concept-model";
const Datastore = require("nedb-promises");
const path = require("path");

class ConceptDB {
    constructor() {
        this.dbFactory = null;
        this.database = null;
        this.rArr = [];
    }

    connectDB() {
        this.dbFactory = (fn) => Datastore.create({
            filename: `${path.join(window.require('electron').remote.app.getAppPath(), "dbs")}/dbfile`,
            timestampData: true,
            autoload: true
        });
        this.database = this.dbFactory("concepts.db");
    }

    async insertOne(param) {
        if(this.database === null) return;
        const iObj = ConceptModel(param);
        let rObj = {};
        await this.database.insert(iObj).then((r) => {
            rObj = r;
        });
        return rObj;
    }

    async insertBulk(params) {
        if(this.database === null) return;
        const iArr = [];
        params.map(
            item => iArr.push(ConceptModel(item))
        );
        let rArr = [];
        if(iArr.length < 1) return ;
        await this.database.insert(iArr).then((r) => {
            console.log(r);
        });
        return rArr;
    }

    async findAllConcepts() {
        let rArr = [];
        await this.database.find({ type: "concept" }).sort({ optKey : 1 }).then((r) => {
            rArr = r;
        });
        return rArr;
    }
}

export default ConceptDB;