import React from "react";
import PropTypes from "prop-types";
import FirstPageButtons from "./first-page-buttons";

const firstPageButtonsDefaultProps = {
    button1: {
        buttonClass: "btn btn-t1-1",
        elemId: "btn-main-new",
        buttonText: "새로만들기",
        buttonClickEvent: () => console.log("main page button1 clicked! by FirstPage")
    },
    button2: {
        buttonClass: "btn btn-t1-1",
        elemId: "btn-main-load",
        buttonText: "불러오기",
        buttonClickEvent: () => console.log("main page button2 clicked! by FirstPage")
    },
    button3: {
        buttonClass: "btn btn-t1-1",
        elemId: "btn-main-info",
        buttonText: "프로그램정보",
        buttonClickEvent: () => console.log("main page button3 clicked! by FirstPage")
    },
    button4: {
        buttonClass: "btn btn-t1-1",
        elemId: "btn-main-quit",
        buttonText: "종료하기",
        buttonClickEvent: () => console.log("main page button4 clicked! by FirstPage")
    }
};

const FirstPage = (props) => {
    return (
        <div className="first-page">
            <div className="first-page-title">
                <h3>캠페인 빌더</h3>
            </div>
            <FirstPageButtons {...props.firstPageButtons} />
        </div>
    );
}

FirstPage.propTypes = {
    firstPageButtons: PropTypes.object
}

FirstPage.defaultProps = {
    firstPageButtons: firstPageButtonsDefaultProps
}

export default FirstPage;