import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../components/labels";
import InputText from "../components/input-texts";

const InputTextLabelContainer = (props) => {
    return (
        <div className={props.wrapClass}>
            <InputLabel elemId={props.elemId} labelText={props.labelText} labelClass={props.labelClass} />
            <InputText elemId={props.elemId} textValue={props.textValue} inputClass={props.inputClass} />
        </div>
    );
}

InputTextLabelContainer.propTypes = {
    elemId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string,
    wrapClass: PropTypes.string
}

InputTextLabelContainer.defaultProps = {
    elemId: "",
    labelText: "Empty Label",
    labelClass: "label-1",
    textValue: "",
    inputClass: "input-text-1",
    wrapClass: "wrap-1"
}

export default InputTextLabelContainer;