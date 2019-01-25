import React, { Component } from "react";
import FirstPage from "./containers/first-page";

class EntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPage: "first"
        };
    }

    render() {
        const { showPage } = this.state;
        if(showPage === "first") {
            return (
                <FirstPage />
            );
        } else {
            return (
                <div>빈 화면...</div>
            );
        }
    }
}

export default EntryPage;