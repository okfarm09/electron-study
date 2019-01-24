import React from "react";
import PropTypes from "prop-types";
import inputLabel from "../components/labels";
import inputText from "../components/input-texts";

const inputTextLabelContainer = (props) => {
    return (
        <span>
            <inputLabel inputId={props.inputId} labelText={props.labelText} labelClass={props.labelClass} />
            <inputText inputId={props.inputId} textValue={props.textValue} inputClass={props.inputClass} />
        </span>
    );
}

inputTextLabelContainer.propTypes = {
    inputId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string
}

inputTextLabelContainer.defaultProps = {
    inputId: "",
    labelText: "Empty Label",
    labelClass: "label-1",
    textValue: "",
    inputClass: "input-text-1"
}