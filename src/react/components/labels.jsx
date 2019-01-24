import React from "react";
import PropTypes from "prop-types";

const inputLabel = (props) => {
    return (
        <label htmlFor={props.elemId} className={props.labelClass}>{props.labelText}</label>
    );
}

inputLabel.propTypes = {
    elemId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string
}

inputLabel.defaultProps = {
    elemId: "",
    labelText: "Empty Label",
    labelClass: "label-1"
}

exports.inputLabel = inputLabel;