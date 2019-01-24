import React from "react";
import PropTypes from "prop-types";

const inputText = (props) => {
    return (
        <input type="text" id={props.elemId} className={props.inputClass} value={props.textValue} />
    );
}

inputText.propTypes = {
    elemId: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string
}

inputText.defaultProps = {
    elemId: "",
    textValue: "",
    inputClass: "input-text-1"
}

exports.inputText = inputText;