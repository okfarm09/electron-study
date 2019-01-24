import React from "react";
import PropTypes from "prop-types";
import AppButton from "../components/buttons";

const button1DefaultProps = {
    buttonClass: "btn btn-t1-1",
    elemId: "btn-main-new",
    buttonText: "새로만들기",
    buttonClickEvent: () => console.log("main page button1 clicked!")
};

const button2DefaultProps = {
    buttonClass: "btn btn-t1-1",
    elemId: "btn-main-load",
    buttonText: "불러오기",
    buttonClickEvent: () => console.log("main page button2 clicked!")
};

const button3DefaultProps = {
    buttonClass: "btn btn-t1-1",
    elemId: "btn-main-info",
    buttonText: "프로그램정보",
    buttonClickEvent: () => console.log("main page button3 clicked!")
};

const button4DefaultProps = {
    buttonClass: "btn btn-t1-1",
    elemId: "btn-main-quit",
    buttonText: "종료하기",
    buttonClickEvent: () => console.log("main page button4 clicked!")
};

const FirstPageButtons = (props) => {
    return (
        <div className="first-page-buttons">
            <AppButton {...props.button1} /> {/* 새로 만들기 */}
            <AppButton {...props.button2} /> {/* 불러오기 */}
            <AppButton {...props.button3} /> {/* 정보 */}
            <AppButton {...props.button4} /> {/* 종료 */}
        </div>
    );
}

FirstPageButtons.propTypes = {
    button1: PropTypes.object,
    button2: PropTypes.object,
    button3: PropTypes.object,
    button4: PropTypes.object
}

FirstPageButtons.defaultProps = {
    button1: button1DefaultProps,
    button2: button2DefaultProps,
    button3: button3DefaultProps,
    button4: button4DefaultProps
}

export default FirstPageButtons;