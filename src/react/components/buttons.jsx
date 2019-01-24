/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const appButton = (props) => {
    return (
        <a href="javascript:void(0);" onClick={props.buttonClickEvent} className={props.buttonClass} id={props.elemId}>{props.buttonText}</a>
    );
}

appButton.propTypes = {
    buttonClickEvent: PropTypes.func,
    buttonClass: PropTypes.string,
    elemId: PropTypes.string
}

appButton.defaultProps = {
    buttonClickEvent: () => console.log("Default Button Event"),
    buttonClass: "btn btn-t1-1",
    elemId: ""
}

exports.appButton = appButton;