import React, { Component } from "react";
import FirstPage from "./containers/first-page";
import InitPage from "./containers/init-page";
import * as pages from "./utils/page-keys";
import { connect } from "react-redux";
import * as pageActions from "./actions/page-action";
import * as modalActions from "./actions/modal-state-action";
import leftNavItems from "./utils/left-nav-default-items";
import firstItems from "./utils/first-default-items";
import BasicModal from "./components/basic-modal";
import * as modalContent from "./utils/modal-content";
import LeftNavigation from "./containers/left-nav";

const closeWindowEvent = () => {
    window.close();
}

class EntryPage extends Component {
    render() {
        const { first, initCamp, loadCamp, inform, modalShow, modalHide } = this.props;
        const { showPage, modalState } = this.props;

        const button1 = firstItems.button1;
        const button2 = firstItems.button2;
        const button3 = firstItems.button3;
        const button4 = firstItems.button4;

        const anchor1 = leftNavItems.anchor1;
        const anchor2 = leftNavItems.anchor2;
        const anchor3 = leftNavItems.anchor3;
        const anchor4 = leftNavItems.anchor4;
        const anchor5 = leftNavItems.anchor5;

        const leaveBtn = modalContent.confirmQuitBtn;
        const cancelBtn = modalContent.cancelQuitBtn;
        const modalPopup = modalContent.quitApp;

        cancelBtn.anchorClickEvent = modalHide;

        button1.buttonClickEvent = initCamp;
        button2.buttonClickEvent = loadCamp;
        button3.buttonClickEvent = inform;
        button4.buttonClickEvent = () => {
            leaveBtn.anchorClickEvent = closeWindowEvent;
            leaveBtn.aText = "종료";
            modalPopup.title = "정말 종료하시겠어요?";
            modalPopup.content = "";
            modalShow();
        };
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

        const leftNavigationAnchors = {
            anchor1: anchor1,
            anchor2: anchor2,
            anchor3: anchor3,
            anchor4: anchor4,
            anchor5: anchor5
        };

        const firstPageButtons = {
            button1: button1,
            button2: button2,
            button3: button3,
            button4: button4
        };

        const modal = modalState === "show"? <BasicModal {...modalPopup} /> : "";

        let pageDiv = "";
        switch (showPage) {
            case pages.first:
                pageDiv = (
                    <div>
                        <FirstPage firstPageButtons={firstPageButtons} />
                        {modal}
                    </div>
                );
                break;
            
            case pages.initCampaign:
                pageDiv = (
                    <div>
                        <InitPage />
                        <LeftNavigation leftNavigationAnchors={leftNavigationAnchors} />
                        {modal}
                    </div>
                );
                break;
        
            default:
                pageDiv = (
                    <div>
                        빈 화면...
                        <LeftNavigation leftNavigationAnchors={leftNavigationAnchors} />
                        {modal}
                    </div>
                );
                break;
        }

        return pageDiv;
    }
}

const mapStateToProps = (state) => ({
    showPage: state.pageChangeData.showPage,
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

export default connect(mapStateToProps, mapToDispatch)(EntryPage);