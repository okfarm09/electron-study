import React, { Component } from "react";
import PropTypes from "prop-types";
import InitPage1 from "./init-page-1";
import LeftNavigation from "./left-nav";
import * as pageActions from "../actions/page-action";
import * as modalActions from "../actions/modal-state-action";
import { connect } from "react-redux";
import defalutItems from "../utils/left-nav-default-items";
import BasicModal from "../components/basic-modal";
import * as modalContent from "../utils/modal-content";

const closeWindowEvent = () => {
    window.close();
}

class InitPage extends Component {
    render() {
        const { first, initCamp, loadCamp, inform, modalShow, modalHide } = this.props;
        const { modalState } = this.props;
        const anchor1 = defalutItems.anchor1;
        const anchor2 = defalutItems.anchor2;
        const anchor3 = defalutItems.anchor3;
        const anchor4 = defalutItems.anchor4;
        const anchor5 = defalutItems.anchor5;

        const leaveBtn = modalContent.confirmQuitBtn;
        const cancelBtn = modalContent.cancelQuitBtn;
        const modalPopup = modalContent.quitApp;

        cancelBtn.anchorClickEvent = modalHide;

        anchor1.anchorClickEvent = () => {
            leaveBtn.anchorClickEvent = () => {
                first();
                modalHide();
            };
            leaveBtn.aText = "떠나기";
            modalPopup.title = "페이지를 떠나시겠어요?";
            modalPopup.content = "저장하지 않은 정보를 잃게 됩니다.";
            modalShow();
        };
        anchor2.anchorClickEvent = () => {
            leaveBtn.anchorClickEvent = () => {
                initCamp();
                modalHide();
            };
            leaveBtn.aText = "떠나기";
            modalPopup.title = "페이지를 떠나시겠어요?";
            modalPopup.content = "저장하지 않은 정보를 잃게 됩니다.";
            modalShow();
        };
        anchor3.anchorClickEvent = () => {
            leaveBtn.anchorClickEvent = () => {
                loadCamp();
                modalHide();
            };
            leaveBtn.aText = "떠나기";
            modalPopup.title = "페이지를 떠나시겠어요?";
            modalPopup.content = "저장하지 않은 정보를 잃게 됩니다.";
            modalShow();
        };
        anchor4.anchorClickEvent = () => {
            leaveBtn.anchorClickEvent = () => {
                inform();
                modalHide();
            };
            leaveBtn.aText = "떠나기";
            modalPopup.title = "페이지를 떠나시겠어요?";
            modalPopup.content = "저장하지 않은 정보를 잃게 됩니다.";
            modalShow();
        };
        anchor5.anchorClickEvent = () => {
            leaveBtn.anchorClickEvent = closeWindowEvent;
            leaveBtn.aText = "종료";
            modalPopup.title = "정말 종료하시겠어요?";
            modalPopup.content = "저장하지 않은 정보를 잃게 됩니다.";
            modalShow();
        };
        const modalBtns = [ leaveBtn, cancelBtn ];
        modalPopup.buttons = modalBtns;

        const modal = modalState === "show"? <BasicModal {...modalPopup} /> : "";

        const leftNavigationAnchors = { anchor1, anchor2, anchor3, anchor4, anchor5 };

        return (
            <div>
                <div className="init-page-container">
                    <LeftNavigation leftNavigationAnchors={leftNavigationAnchors} />
                    <InitPage1 />
                </div>
                {modal}
            </div>
        );
    }
}

InitPage.propTypes = {
    leftNavigationAnchors: PropTypes.object
}

InitPage.defaultProps = {
    leftNavigationAnchors: defalutItems
}

const mapStateToProps = (state) => ({
    modalState: state.modalToggleData.modalState
});

const mapToDispatch = (dispatch) => ({
    first: () => dispatch(pageActions.first()),
    initCamp: () => dispatch(pageActions.initCampaign()),
    loadCamp: () => dispatch(pageActions.loadCampaign()),
    inform: () => dispatch(pageActions.information()),
    modalShow: () => dispatch(modalActions.show()),
    modalHide: () => dispatch(modalActions.hide())
});

export default connect(mapStateToProps, mapToDispatch)(InitPage);