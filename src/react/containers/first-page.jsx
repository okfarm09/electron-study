import React, { Component } from "react";
import PropTypes from "prop-types";
import FirstPageButtons from "./first-page-buttons";
import defalutItems from "../utils/first-default-items";

class FirstPage extends Component {
    render() {
        const { button1, button2, button3, button4 } = this.props.firstPageButtons;
        return (
            <div className="first-page">
                <div className="first-page-title">
                    <h3>캠페인 빌더</h3>
                </div>
                <FirstPageButtons button1={button1} button2={button2} button3={button3} button4={button4} />
            </div>
        );
    }
}

FirstPage.propTypes = {
    firstPageButtons: PropTypes.object
}

FirstPage.defaultProps = {
    firstPageButtons: defalutItems
}

export default FirstPage;