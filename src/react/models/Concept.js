const Document = require("camo").Document;

class ConceptModel extends Document {
    constructor() {
        super();

        this.optKey = Number;
        this.optVal = String;
        this.optTxt = String;
    }
}

export default ConceptModel;