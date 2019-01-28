import React from "react";
import PropTypes from "prop-types";
import AppButton from "../components/buttons";
import defalutItems from "../utils/first-default-items";

const FirstPageButtons = (props) => {
    return (
        <div className="first-page-buttons">
            <ul>
                <li>
                    <AppButton {...props.button1} /> {/* 새로 만들기 */}
                </li>
                <li>
                    <AppButton {...props.button2} /> {/* 불러오기 */}
                </li>
                <li>
                    <AppButton {...props.button3} /> {/* 정보 */}
                </li>
                <li>
                    <AppButton {...props.button4} /> {/* 종료 */}
                </li>
            </ul>
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
    button1: defalutItems.button1,
    button2: defalutItems.button2,
    button3: defalutItems.button3,
    button4: defalutItems.button4
}

export default FirstPageButtons;