export const confirmQuitBtn = {
    elemId: "quit-btn",
    anchorClass: "bg-red modal-answer-btn",
    aText: "종료",
    anchorClickEvent: () => console.log("Quit clicked!")
};

export const cancelQuitBtn = {
    elemId: "cancel-btn",
    anchorClass: "bg-blue modal-answer-btn",
    aText: "취소",
    anchorClickEvent: () => console.log("Cancel clicked!")
};

export const quitApp = {
    icon: "bad",
    iconClass: "color-red modal-icon",
    buttons: [
        confirmQuitBtn,
        cancelQuitBtn
    ],
    modalClass: "modal-popup",
    elemId: "box",
    title: "정말 종료하시겠어요?",
    content: ""
};