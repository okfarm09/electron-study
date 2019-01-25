import * as types from "../actions/page-action-types";
import * as pages from "../utils/page-keys";

const initialState = {
    showPage: pages.first
}

function changePage(state = initialState, action) {
    switch (action.type) {
        case types.FIRST:
            return {
                ...state,
                showPage: pages.first
            };
    
        case types.INIT_CAMP:
            return {
                ...state,
                showPage: pages.initCampaign
            };

        case types.LOAD_CAMP:
            return {
                ...state,
                showPage: pages.loadCampaign
            };

        case types.INFORM:
            return {
                ...state,
                showPage: pages.information
            };

        default:
            return state;
    }
}

export default changePage;