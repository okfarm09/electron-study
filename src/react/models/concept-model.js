function ConceptModel(param) {
    const rObj = {
        optKey: param.optKey,
        optVal: param.optVal,
        optTxt: param.optTxt,
        type: "concept"
    };
    if(typeof param._id !== "undefined" && param._id !== null) rObj.id = param._id;
    return rObj;
}

export default ConceptModel;