import React from "react";
import PropTypes from "prop-types";

const inputText = (props) => {
    return (
        <input type="text" id={props.inputId} className={props.inputClass} value={props.textValue} />
    );
}

inputText.propTypes = {
    inputId: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string
}

inputText.defaultProps = {
    inputId: "",
    textValue: "",
    inputClass: "input-text-1"
}

exports.inputText = inputText;