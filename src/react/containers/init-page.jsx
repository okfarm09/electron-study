import React, { Component } from "react";
import PropTypes from "prop-types";
import InitPage1 from "./init-page-1";
import LeftNavigation from "./left-nav";
import defalutItems from "../utils/left-nav-default-items";

class InitPage extends Component {
    render() {
        return (
            <div className="init-page-container">
                <LeftNavigation leftNavigationAnchors={this.props.leftNavigationAnchors} />
                <InitPage1 />
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

export default InitPage;