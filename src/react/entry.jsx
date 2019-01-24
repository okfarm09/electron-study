import { React, Component } from "react";
import firstPageButtons from "./containers/first-page-buttons";

class EntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <firstPageButtons />
            </div>
        );
    }
}

export default EntryPage;