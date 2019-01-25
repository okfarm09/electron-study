import React, { Component } from "react";
import PropTypes from "prop-types";

class TextArea extends Component {
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
            <textarea id={elemId} className={inputClass} onChange={this.handleChange}>{(textValue)? textValue : ''}</textarea>
        );
    }
}

TextArea.propTypes = {
    elemId: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string
}

TextArea.defaultProps = {
    elemId: "",
    textValue: "",
    inputClass: "input-text-1"
}

export default TextArea;