const anchor1 = {
    bgColor: "#778899",
    elemId: "left-anchor-first",
    anchorClass: "left-anchor",
    aText: "초기화면",
    anchorClickEvent: () => console.log("main page anchor1 clicked! by FirstPage")
};

const anchor2 = {
    bgColor: "#27ae60",
    elemId: "left-anchor-init",
    anchorClass: "left-anchor",
    aText: "새 캠페인",
    anchorClickEvent: () => console.log("main page anchor2 clicked! by FirstPage")
};

const anchor3 = {
    bgColor: "#3498db",
    elemId: "left-anchor-load",
    anchorClass: "left-anchor",
    aText: "불러오기",
    anchorClickEvent: () => console.log("main page anchor3 clicked! by FirstPage")
};

const anchor4 = {
    bgColor: "#2d3436",
    elemId: "left-anchor-info",
    anchorClass: "left-anchor",
    aText: "도움말",
    anchorClickEvent: () => console.log("main page anchor4 clicked! by FirstPage")
};

const anchor5 = {
    bgColor: "#c0392b",
    elemId: "left-anchor-quit",
    anchorClass: "left-anchor",
    aText: "종료",
    anchorClickEvent: () => console.log("main page anchor5 clicked! by FirstPage")
};

const defalutItems = {
    anchor1: anchor1,
    anchor2: anchor2,
    anchor3: anchor3,
    anchor4: anchor4,
    anchor5: anchor5
};

export default defalutItems;