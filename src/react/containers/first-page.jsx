import React, { Component } from "react";
import PropTypes from "prop-types";
import FirstPageButtons from "./first-page-buttons";
import * as pageActions from "../actions/page-action";
import { connect } from "react-redux";
import defalutItems from "../utils/first-default-items";

const closeWindowEvent = () => {
    window.close();
}

class FirstPage extends Component {
    render() {
        const { initCamp, loadCamp, inform } = this.props;
        const { button1, button2, button3, button4 } = this.props.firstPageButtons;
        button1.buttonClickEvent = initCamp;
        button2.buttonClickEvent = loadCamp;
        button3.buttonClickEvent = inform;
        button4.buttonClickEvent = closeWindowEvent;
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

const mapStateToProps = (state) => ({
    showPage: state.pageChangeData.showPage
});

const mapToDispatch = (dispatch) => ({
    first: () => dispatch(pageActions.first()),
    initCamp: () => dispatch(pageActions.initCampaign()),
    loadCamp: () => dispatch(pageActions.loadCampaign()),
    inform: () => dispatch(pageActions.information())
});

FirstPage.propTypes = {
    firstPageButtons: PropTypes.object
}

FirstPage.defaultProps = {
    firstPageButtons: defalutItems
}

export default connect(mapStateToProps, mapToDispatch)(FirstPage);