import React from "react";
import PropTypes from "prop-types";

const AppButton = (props) => {
    return (
        <button onClick={props.buttonClickEvent} className={props.buttonClass} id={props.elemId}>{props.buttonText}</button>
    );
}

AppButton.propTypes = {
    buttonClickEvent: PropTypes.func,
    buttonClass: PropTypes.string,
    elemId: PropTypes.string
}

AppButton.defaultProps = {
    buttonClickEvent: () => console.log("Default Button Event"),
    buttonClass: "btn btn-t1-1",
    elemId: ""
}

export default AppButton;