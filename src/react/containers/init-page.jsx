import React, { Component } from "react";
import InitPage1 from "./init-page-1";
import LeftNavigation from "./left-nav";

class InitPage extends Component {
    render() {
        return (
            <div className="init-page-container">
                <LeftNavigation />
                <InitPage1 />
            </div>
        );
    }
}

export default InitPage;