import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../components/labels";
import InputNumber from "../components/input-number";

const InputNumberLabelContainer = (props) => {
    return (
        <div className={props.wrapClass}>
            <InputLabel elemId={props.elemId} labelText={props.labelText} labelClass={props.labelClass} />
            <InputNumber elemId={props.elemId} textValue={props.textValue} inputClass={props.inputClass} />
        </div>
    );
}

InputNumberLabelContainer.propTypes = {
    elemId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string,
    textValue: PropTypes.number,
    inputClass: PropTypes.string,
    wrapClass: PropTypes.string
}

InputNumberLabelContainer.defaultProps = {
    elemId: "",
    labelText: "Empty Label",
    labelClass: "label-1",
    textValue: 0,
    inputClass: "input-text-1",
    wrapClass: "wrap-1"
}

export default InputNumberLabelContainer;