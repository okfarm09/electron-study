import React from 'react';
import ReactDOM from 'react-dom';
import EntryPage from "./react/entry";
import Version from "./react/components/version";
import BasicModal from "./react/components/basic-modal";
import "./style/common.css";

import { createStore } from "redux";
import reducers from "./react/reducers/reducer";
import { Provider } from "react-redux";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <EntryPage />
    </Provider>,
    document.getElementById("root")
);

ReactDOM.render(
    <Version />,
    document.getElementById("under-version")
);

ReactDOM.render(
    <Provider store={store}>
        <BasicModal />
    </Provider>,
    document.getElementById("hided-modal")
);