import React, { Component } from "react";
import PropTypes from "prop-types";
import LeftAnchor from "../components/left-a";
import { connect } from "react-redux";
import defalutItems from "../utils/left-nav-default-items";

class LeftNavigation extends Component {
    render() {
        const { anchor1, anchor2, anchor3, anchor4, anchor5 } = this.props.leftNavigationAnchors;
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

export default connect(mapStateToProps, null)(LeftNavigation);