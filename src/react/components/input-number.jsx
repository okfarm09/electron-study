import React, { Component } from "react";
import PropTypes from "prop-types";

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: props.textValue
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            textValue: event.target.value
        });
    }

    render() {
        const { elemId, inputClass } = this.props;
        const { textValue } = this.state;
        return (
            <input type="number" id={elemId} className={inputClass} value={(textValue)? textValue : ''} onChange={this.handleChange} />
        );
    }
}

InputNumber.propTypes = {
    elemId: PropTypes.string,
    textValue: PropTypes.number,
    inputClass: PropTypes.string
}

InputNumber.defaultProps = {
    elemId: "",
    textValue: 0,
    inputClass: "input-text-1"
}

export default InputNumber;