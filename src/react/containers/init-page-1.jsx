import React from "react";
import PropTypes from "prop-types";
import InputTextLabelContainer from "./input-text-label-container";
import InputNumberLabelContainer from "./input-number-label-container";
import TextAreaLabelContainer from "./textarea-label-container";
import ButtonAnchor from "../components/button-a";

const campaignTitleDefaultObject = {
    elemId: "camp-title",
    labelText: "캠페인 타이틀 :",
    labelClass: "init-input-label",
    textValue: "",
    inputClass: "init-input-text",
    wrapClass: "full-form-wrap"
};

const campaignPointDefaultObject = {
    elemId: "camp-point",
    labelText: "캠페인 포인트 :",
    labelClass: "init-input-label",
    textValue: 0,
    inputClass: "init-input-number",
    wrapClass: "full-form-wrap"
};

const campaignConceptDefaultObject = {
    elemId: "camp-conc",
    labelText: "캠페인 배경설정 :",
    labelClass: "init-input-label",
    textValue: "",
    inputClass: "init-textarea",
    wrapClass: "full-form-wrap"
};

const campaignNextDefaultObject = {
    elemId: "camp-next",
    anchorClass: "init-button",
    aText: "다음으로",
    anchorClickEvent: () => console.log("Anchor clicked from InitPage1!")
}

const InitPage1 = (props) => {
    const campIdNumber = new Date().getTime();
    return (
        <div className="init-page-first">
            <h1>캠페인 기본 설정</h1>
            <InputTextLabelContainer {...props.campaignTitle} />
            <InputNumberLabelContainer {...props.campaignPoint} />
            <TextAreaLabelContainer {...props.campaignConcept} />
            <ButtonAnchor {...props.campaignNext} />
            <input type="hidden" id="campaign-id" value={campIdNumber} />
        </div>
    );
}

InitPage1.propTypes = {
    campaignTitle: PropTypes.object,
    campaignPoint: PropTypes.object,
    campaignConcept: PropTypes.object,
    campaignNext: PropTypes.object
}

InitPage1.defaultProps = {
    campaignTitle: campaignTitleDefaultObject,
    campaignPoint: campaignPointDefaultObject,
    campaignConcept: campaignConceptDefaultObject,
    campaignNext: campaignNextDefaultObject
}

export default InitPage1;