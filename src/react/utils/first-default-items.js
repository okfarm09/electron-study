const button1 = {
    buttonClass: "btn-green main-btn main-btn-t1-1",
    elemId: "btn-main-new",
    buttonText: "새로만들기",
    buttonClickEvent: () => console.log("main page button1 clicked! by FirstPage")
};

const button2 = {
    buttonClass: "btn-blue main-btn main-btn-t1-1",
    elemId: "btn-main-load",
    buttonText: "불러오기",
    buttonClickEvent: () => console.log("main page button2 clicked! by FirstPage")
};

const button3 = {
    buttonClass: "main-btn main-btn-t1-1",
    elemId: "btn-main-info",
    buttonText: "도움말",
    buttonClickEvent: () => console.log("main page button3 clicked! by FirstPage")
};

const button4 = {
    buttonClass: "btn-red main-btn main-btn-t1-1",
    elemId: "btn-main-quit",
    buttonText: "종료하기",
    buttonClickEvent: () => console.log("main page button4 clicked! by FirstPage")
};

const defalutItems = {
    button1: button1,
    button2: button2,
    button3: button3,
    button4: button4
};

export default defalutItems;