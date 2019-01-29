import toggleModal from "./modal-state-reducer";
import changePage from "./page-reducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
    modalToggleData: toggleModal,
    pageChangeData: changePage
});

export default reducers;