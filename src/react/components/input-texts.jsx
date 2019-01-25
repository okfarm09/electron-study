import React, { Component } from "react";
import PropTypes from "prop-types";

class InputText extends Component {
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
            <input type="text" id={elemId} className={inputClass} value={(textValue)? textValue : ''} onChange={this.handleChange} />
        );
    }
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