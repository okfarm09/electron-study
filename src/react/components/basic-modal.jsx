import React from "react";
import PropTypes from "prop-types";
import { IoMdCheckmark, IoMdAlert } from "react-icons/io";
import ButtonAnchor from "./button-a";

const BasicModal = (props) => {
    const icon = props.icon === "good"? <IoMdCheckmark className={props.iconClass} /> : <IoMdAlert className={props.iconClass} />;
    const buttons = props.buttons.map(
        (item, index) => {
            return <ButtonAnchor key={index} {...item} />
        }
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
    title: PropTypes.string,
    content: PropTypes.string
}

BasicModal.defaultProps = {
    icon: "bad",
    iconClass: "color-red modal-icon",
    buttons: [],
    modalClass: "modal-popup",
    elemId: "box",
    title: "빈 팝업",
    content: "내용은 없습니다."
}

export default BasicModal;