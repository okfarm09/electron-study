import React from "react";

const Version = () => {
    return (
        <span>
            Version : {window.require('electron').remote.app.getVersion()}
        </span>
    );
}

export default Version;