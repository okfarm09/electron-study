import React from "react";
import PropTypes from "prop-types";

const InputLabel = (props) => {
    return (
        <label htmlFor={props.elemId} className={props.labelClass}>{props.labelText}</label>
    );
}

InputLabel.propTypes = {
    elemId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string
}

InputLabel.defaultProps = {
    elemId: "",
    labelText: "Empty Label",
    labelClass: "label-1"
}

export default InputLabel;