import React from "react";
import PropTypes from "prop-types";

const InputText = (props) => {
    return (
        <input type="text" id={props.elemId} className={props.inputClass} value={props.textValue} />
    );
}

InputText.propTypes = {
    elemId: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string
}

InputText.defaultProps = {
    elemId: "",
    textValue: "",
    inputClass: "input-text-1"
}

export default InputText;