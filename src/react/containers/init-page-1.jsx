import React from "react";
import PropTypes from "prop-types";
import InputTextLabelContainer from "./input-text-label-container";
import InputNumberLabelContainer from "./input-number-label-container";
import ComboBoxLabelContainer from "./combobox-label-container";
import TextAreaLabelContainer from "./textarea-label-container";
import ButtonAnchor from "../components/button-a";
import defalutItems from "../utils/init-default-items";

const InitPage1 = (props) => {
    const campIdNumber = new Date().getTime();
    return (
        <div className="init-page-first">
            <h1>캠페인 기본 설정</h1>
            <InputTextLabelContainer {...props.campaignTitle} />
            <InputNumberLabelContainer {...props.campaignPoint} />
            <ComboBoxLabelContainer {...props.campaignConcept} />
            <TextAreaLabelContainer {...props.campaignBackground} />
            <ButtonAnchor {...props.campaignNext} />
            <input type="hidden" id="campaign-id" value={campIdNumber} />
        </div>
    );
}

InitPage1.propTypes = {
    campaignTitle: PropTypes.object,
    campaignPoint: PropTypes.object,
    campaignConcept: PropTypes.object,
    campaignBackground: PropTypes.object,
    campaignNext: PropTypes.object
}

InitPage1.defaultProps = {
    campaignTitle: defalutItems.titleItem,
    campaignPoint: defalutItems.pointItem,
    campaignConcept: defalutItems.conceptItem,
    campaignBackground: defalutItems.backgroundItem,
    campaignNext: defalutItems.nextItem
}

export default InitPage1;