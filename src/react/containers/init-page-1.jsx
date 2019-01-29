import React, { Component } from "react";
import PropTypes from "prop-types";
import InputTextLabelContainer from "./input-text-label-container";
import InputNumberLabelContainer from "./input-number-label-container";
import ComboBoxLabelContainer from "./combobox-label-container";
import TextAreaLabelContainer from "./textarea-label-container";
import ButtonAnchor from "../components/button-a";
import defalutItems from "../utils/init-default-items";
import ConceptDB from "../dbs/concept-db";

class InitPage1 extends Component {
    constructor(props) {
        super(props);
        this.cdb = new ConceptDB();
        this.state = {
            conceptOpts: []
        }
        this.initConcepts = this.initConcepts.bind(this);
        this.initConcepts();
    }

    initConcepts() {
        const cdb = this.cdb;
        cdb.connectDB("concepts.db");
        cdb.findAllWithType("concept").then((r) => {
            if(r.length < 1) return cdb.insertBulk(defalutItems.conceptOptions);
            else return r;
        }).then((r) => {
            return cdb.findAllWithType("concept");
        }).then((r) => {
            this.setState({
                conceptOpts: r
            });
        });
    }

    render() {
        const campIdNumber = new Date().getTime();
        const { campaignTitle, campaignPoint, campaignConcept, campaignBackground, campaignNext } = this.props;
        campaignConcept.options = this.state.conceptOpts;
        return (
            <div className="init-page-first">
                <h1>캠페인 기본 설정</h1>
                <InputTextLabelContainer {...campaignTitle} />
                <InputNumberLabelContainer {...campaignPoint} />
                <ComboBoxLabelContainer {...campaignConcept} />
                <TextAreaLabelContainer {...campaignBackground} />
                <ButtonAnchor {...campaignNext} />
                <input type="hidden" id="campaign-id" value={campIdNumber} />
            </div>
        );
    }
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