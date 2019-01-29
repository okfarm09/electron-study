import React, { Component } from "react";
import PropTypes from "prop-types";
import LeftAnchor from "../components/left-a";
import * as pageActions from "../actions/page-action";
import { connect } from "react-redux";
import defalutItems from "../utils/left-nav-default-items";

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
    leftNavigationAnchors: defalutItems
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

export default connect(mapStateToProps, mapToDispatch)(LeftNavigation);