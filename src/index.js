import React from 'react';
import ReactDOM from 'react-dom';
import EntryPage from "./react/entry";
import Version from "./react/components/version";
import "./style/common.css";

import { createStore } from "redux";
import pageReducers from "./react/reducers/page-reducer";
import { Provider } from "react-redux";

const store = createStore(pageReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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