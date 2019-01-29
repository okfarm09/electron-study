import * as types from "../actions/modal-state-action-types";
import * as states from "../utils/modal-state-keys";

const initialState = {
    modalState: states.hide
}

function toggleModal(state = initialState, action) {
    switch (action.type) {
        case types.HIDE:
            return {
                ...state,
                modalState: states.hide
            }

        case types.SHOW:
            return {
                ...state,
                modalState: states.show
            }
    
        default:
            return state;
    }
}

export default toggleModal;