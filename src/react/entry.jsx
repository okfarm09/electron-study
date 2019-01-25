import React, { Component } from "react";
import FirstPage from "./containers/first-page";
import InitPage from "./containers/init-page";
import * as pages from "./utils/page-keys";
import { connect } from "react-redux";

class EntryPage extends Component {
    render() {
        const { showPage } = this.props;
        if(showPage === pages.first) {
            return (
                <FirstPage />
            );
        } else if(showPage === pages.initCampaign) {
            return (
                <InitPage />
            );
        } else {
            return (
                <div>빈 화면...</div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    showPage: state.showPage
});

export default connect(mapStateToProps, null)(EntryPage);