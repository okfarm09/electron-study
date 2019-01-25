import React, { Component } from "react";
import FirstPage from "./containers/first-page";
import * as pages from "./utils/page-keys";
import { connect } from "react-redux";

const firstPageButtonsDefaultProps = {
    button1: {
        buttonClass: "btn btn-t1-1",
        elemId: "btn-main-new",
        buttonText: "새로만들기"
    },
    button2: {
        buttonClass: "btn btn-t1-1",
        elemId: "btn-main-load",
        buttonText: "불러오기"
    },
    button3: {
        buttonClass: "btn btn-t1-1",
        elemId: "btn-main-info",
        buttonText: "프로그램정보"
    },
    button4: {
        buttonClass: "btn btn-t1-1",
        elemId: "btn-main-quit",
        buttonText: "종료하기"
    }
};

class EntryPage extends Component {
    render() {
        const { showPage } = this.props;
        if(showPage === pages.first) {
            return (
                <FirstPage {...firstPageButtonsDefaultProps} />
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