import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../components/labels";
import TextArea from "../components/textarea";

const TextAreaLabelContainer = (props) => {
    return (
        <div className={props.wrapClass}>
            <InputLabel elemId={props.elemId} labelText={props.labelText} labelClass={props.labelClass} />
            <TextArea elemId={props.elemId} textValue={props.textValue} inputClass={props.inputClass} />
        </div>
    );
}

TextAreaLabelContainer.propTypes = {
    elemId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string,
    wrapClass: PropTypes.string
}

TextAreaLabelContainer.defaultProps = {
    elemId: "",
    labelText: "Empty Label",
    labelClass: "label-1",
    textValue: "",
    inputClass: "input-text-1",
    wrapClass: "wrap-1"
}

export default TextAreaLabelContainer;