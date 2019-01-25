/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const LeftAnchor = (props) => {
    return (
        <a href="#" style={{background:props.bgColor}} id={props.elemId} className={props.anchorClass} onClick={props.anchorClickEvent}>{props.aText}</a>
    );
}

LeftAnchor.propTypes = {
    bgColor: PropTypes.string,
    elemId: PropTypes.string,
    anchorClass: PropTypes.string,
    aText: PropTypes.string
}

LeftAnchor.defaultProps = {
    bgColor: "#3498db",
    elemId: "",
    anchorClass: "anchor-1",
    aText: "메인화면"
}

export default LeftAnchor;