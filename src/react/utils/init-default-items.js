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

const conceptOptionsDefaultProps = [
    {
        optKey: "0",
        optVal: "",
        optTxt: "선택하세요"
    },
    {
        optKey: "1",
        optVal: "reality",
        optTxt: "현실적"
    },
    {
        optKey: "2",
        optVal: "fantasy",
        optTxt: "판타지"
    },
    {
        optKey: "3",
        optVal: "sci_fi",
        optTxt: "SF"
    },
    {
        optKey: "4",
        optVal: "wuxia",
        optTxt: "무협"
    },
    {
        optKey: "5",
        optVal: "historical",
        optTxt: "시대극"
    }
];

const campaignConceptDefaultObject = {
    elemId: "camp-point",
    labelText: "캠페인 컨셉 :",
    labelClass: "init-input-label",
    textValue: "",
    inputClass: "init-combobox",
    wrapClass: "full-form-wrap",
    options: conceptOptionsDefaultProps
};

const campaignBackgroundDefaultObject = {
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

const defalutItems = {
    titleItem: campaignTitleDefaultObject,
    pointItem: campaignPointDefaultObject,
    conceptOptions: conceptOptionsDefaultProps,
    conceptItem: campaignConceptDefaultObject,
    backgroundItem: campaignBackgroundDefaultObject,
    nextItem: campaignNextDefaultObject
};

export default defalutItems;