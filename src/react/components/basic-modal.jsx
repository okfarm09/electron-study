import React from "react";
import PropTypes from "prop-types";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import ButtonAnchor from "./button-a";

const BasicModal = (props) => {
    const icon = props.icon === "good"? <IoMdCheckmark className={props.iconClass} /> : <IoMdClose className={props.iconClass} />;
    const buttons = props.buttons.map(
        item => <ButtonAnchor {...item} />
    );
    return (
        <div className={props.modalClass} id={props.elemId}>
            {icon}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {buttons}
        </div>
    );
}

BasicModal.propTypes = {
    icon: PropTypes.string,
    iconClass: PropTypes.string,
    buttons: PropTypes.array,
    modalClass: PropTypes.string,
    elemId: PropTypes.string,
}

BasicModal.defaultProps = {
    icon: "bad",
    iconClass: "modal-icon",
    buttons: [],
    modalClass: "modal-popup",
    elemId: "box"
}

export default BasicModal;