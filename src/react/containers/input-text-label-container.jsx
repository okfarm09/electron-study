import React from "react";
import PropTypes from "prop-types";
import inputLabel from "../components/labels";
import inputText from "../components/input-texts";

const inputTextLabelContainer = (props) => {
    return (
        <span>
            <inputLabel inputId={props.elemId} labelText={props.labelText} labelClass={props.labelClass} />
            <inputText inputId={props.elemId} textValue={props.textValue} inputClass={props.inputClass} />
        </span>
    );
}

inputTextLabelContainer.propTypes = {
    elemId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string
}

inputTextLabelContainer.defaultProps = {
    elemId: "",
    labelText: "Empty Label",
    labelClass: "label-1",
    textValue: "",
    inputClass: "input-text-1"
}