/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const ButtonAnchor = (props) => {
    return (
        <a id={props.elemId} className={props.anchorClass} onClick={props.anchorClickEvent}>{props.aText}</a>
    );
}

ButtonAnchor.propTypes = {
    elemId: PropTypes.string,
    anchorClass: PropTypes.string,
    aText: PropTypes.string,
    anchorClickEvent: PropTypes.func
}

ButtonAnchor.defaultProps = {
    elemId: "",
    anchorClass: "anchor-1",
    aText: "메인화면",
    anchorClickEvent: () => console.log("Anchor clicked!")
}

export default ButtonAnchor;