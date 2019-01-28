import React, { Component } from "react";
import PropTypes from "prop-types";

const comboBoxOptionsDefaultProps = [
    {
        optKey: "0",
        optVal: "",
        optTxt: "select one"
    },
    {
        optKey: "1",
        optVal: "no_value1",
        optTxt: "item1"
    }
];

class ComboBox extends Component {
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
        const { elemId, inputClass, options } = this.props;
        const { textValue } = this.state;
        const opts = options.map(
            item => (<option key={item.optKey} value={item.optVal}>{item.optTxt}</option>)
        );
        return (
            <select id={elemId} className={inputClass} value={(textValue)? textValue : ''} onChange={this.handleChange}>{opts}</select>
        );
    }
}

ComboBox.propTypes = {
    elemId: PropTypes.string,
    textValue: PropTypes.string,
    inputClass: PropTypes.string,
    options: PropTypes.array
}

ComboBox.defaultProps = {
    elemId: "",
    textValue: "",
    inputClass: "input-text-1",
    options: comboBoxOptionsDefaultProps
}

export default ComboBox;