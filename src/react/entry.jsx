import React, { Component } from "react";
import FirstPageButtons from "./containers/first-page-buttons";

class EntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <FirstPageButtons />
            </div>
        );
    }
}

export default EntryPage;