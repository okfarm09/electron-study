import React from "react";
import PropTypes from "prop-types";

const inputLabel = (props) => {
    return (
        <label htmlFor={props.inputId} className={props.labelClass}>{props.labelText}</label>
    );
}

inputLabel.propTypes = {
    inputId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string
}

inputLabel.defaultProps = {
    inputId: "",
    labelText: "Empty Label",
    labelClass: "label-1"
}

exports.inputLabel = inputLabel;