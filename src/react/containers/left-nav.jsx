import React, { Component } from "react";
import PropTypes from "prop-types";
import LeftAnchor from "../components/left-a";
import * as pageActions from "../actions/page-action";
import { connect } from "react-redux";

const leftNavigationAnchorsDefaultProps = {
    anchor1: {
        bgColor: "#3498db",
        elemId: "left-anchor-first",
        anchorClass: "left-anchor",
        aText: "초기화면",
        anchorClickEvent: () => console.log("main page anchor1 clicked! by FirstPage")
    },
    anchor2: {
        bgColor: "#27ae60",
        elemId: "left-anchor-init",
        anchorClass: "left-anchor",
        aText: "새 캠페인",
        anchorClickEvent: () => console.log("main page anchor2 clicked! by FirstPage")
    },
    anchor3: {
        bgColor: "#2980b9",
        elemId: "left-anchor-load",
        anchorClass: "left-anchor",
        aText: "불러오기",
        anchorClickEvent: () => console.log("main page anchor3 clicked! by FirstPage")
    },
    anchor4: {
        bgColor: "#2c3e50",
        elemId: "left-anchor-info",
        anchorClass: "left-anchor",
        aText: "정보",
        anchorClickEvent: () => console.log("main page anchor4 clicked! by FirstPage")
    },
    anchor5: {
        bgColor: "#c0392b",
        elemId: "left-anchor-quit",
        anchorClass: "left-anchor",
        aText: "종료",
        anchorClickEvent: () => console.log("main page anchor5 clicked! by FirstPage")
    }
};

const closeWindowEvent = () => {
    window.close();
}

class LeftNavigation extends Component {
    render() {
        const { first, initCamp, loadCamp, inform } = this.props;
        const { anchor1, anchor2, anchor3, anchor4, anchor5 } = this.props.leftNavigationAnchors;
        anchor1.anchorClickEvent = first;
        anchor2.anchorClickEvent = initCamp;
        anchor3.anchorClickEvent = loadCamp;
        anchor4.anchorClickEvent = inform;
        anchor5.anchorClickEvent = closeWindowEvent;
        return (
            <div className="left-nav">
                <LeftAnchor {...anchor1} />
                <LeftAnchor {...anchor2}  />
                <LeftAnchor {...anchor3}  />
                <LeftAnchor {...anchor4}  />
                <LeftAnchor {...anchor5}  />
            </div>
        );
    }
}

LeftNavigation.propTypes = {
    leftNavigationAnchors: PropTypes.object
}

LeftNavigation.defaultProps = {
    leftNavigationAnchors: leftNavigationAnchorsDefaultProps
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

export default connect(mapStateToProps, mapToDispatch)(LeftNavigation);