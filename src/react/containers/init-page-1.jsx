import React from "react";
import PropTypes from "prop-types";
import InputTextLabelContainer from "./input-text-label-container";

const capmaignTitleDefaultObject = {
    elemId: "camp-title",
    labelText: "캠페인 타이틀",
    labelClass: "input-label",
    textValue: "",
    inputClass: "input-text",
    wrapClass: "full-form-wrap"
};
const capmaignPointDefaultObject = {
    elemId: "camp-point",
    labelText: "캠페인 포인트",
    labelClass: "input-label",
    textValue: "0",
    inputClass: "input-text",
    wrapClass: "full-form-wrap"
};

const InitPage1 = (props) => {
    return (
        <div className="init-page-container">
            <form>
                <InputTextLabelContainer {...props.capmaignTitle} />
                <InputTextLabelContainer {...props.capmaignPoint} />
            </form>
        </div>
    );
}

InitPage1.propTypes = {
    capmaignTitle: PropTypes.object,
    capmaignPoint: PropTypes.object
}

InitPage1.defaultProps = {
    capmaignTitle: capmaignTitleDefaultObject,
    capmaignPoint: capmaignPointDefaultObject
}

export default InitPage1;