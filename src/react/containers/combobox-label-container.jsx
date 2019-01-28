import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../components/labels";
import ComboBox from "../components/combobox";

const ComboBoxLabelContainer = (props) => {
    return (
        <div className={props.wrapClass}>
            <InputLabel elemId={props.elemId} labelText={props.labelText} labelClass={props.labelClass} />
            <ComboBox elemId={props.elemId} textValue={props.textValue} inputClass={props.inputClass} options={props.options} />
        </div>
    );
}

ComboBoxLabelContainer.propTypes = {
    elemId: PropTypes.string,
    labelText: PropTypes.string,
    labelClass: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string,
    wrapClass: PropTypes.string,
    options: PropTypes.array
}

ComboBoxLabelContainer.defaultProps = {
    elemId: "",
    labelText: "Empty Label",
    labelClass: "label-1",
    textValue: "",
    inputClass: "input-text-1",
    wrapClass: "wrap-1",
    options: [
        {
            optKey: "0",
            optVal: "",
            optTxt: "select one"
        },
        {
            optKey: "1",
            optVal: "no_value1",
            optTxt: "item1"
        },
        {
            optKey: "2",
            optVal: "no_value2",
            optTxt: "item2"
        }
    ]
}

export default ComboBoxLabelContainer;