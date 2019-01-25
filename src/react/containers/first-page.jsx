import React, { Component } from "react";
import PropTypes from "prop-types";
import FirstPageButtons from "./first-page-buttons";
import * as pageActions from "../actions/page-action";
import { connect } from "react-redux";

const firstPageButtonsDefaultProps = {
    button1: {
        buttonClass: "main-btn main-btn-t1-1",
        elemId: "btn-main-new",
        buttonText: "새로만들기",
        buttonClickEvent: () => console.log("main page button1 clicked! by FirstPage")
    },
    button2: {
        buttonClass: "main-btn main-btn-t1-1",
        elemId: "btn-main-load",
        buttonText: "불러오기",
        buttonClickEvent: () => console.log("main page button2 clicked! by FirstPage")
    },
    button3: {
        buttonClass: "main-btn main-btn-t1-1",
        elemId: "btn-main-info",
        buttonText: "프로그램정보",
        buttonClickEvent: () => console.log("main page button3 clicked! by FirstPage")
    },
    button4: {
        buttonClass: "main-btn main-btn-t1-1",
        elemId: "btn-main-quit",
        buttonText: "종료하기",
        buttonClickEvent: () => console.log("main page button4 clicked! by FirstPage")
    }
};

const closeWindowEvent = () => {
    window.close();
}

class FirstPage extends Component {
    render() {
        const { initCamp, loadCamp, inform } = this.props;
        const { button1, button2, button3, button4 } = this.props;
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
    showPage: state.showPage
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
    firstPageButtons: firstPageButtonsDefaultProps
}

export default connect(mapStateToProps, mapToDispatch)(FirstPage);