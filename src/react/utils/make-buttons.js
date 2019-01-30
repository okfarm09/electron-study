import { connect } from "react-redux";
import * as pageActions from "./actions/page-action";
import * as modalActions from "./actions/modal-state-action";

const settingAnchor = (purpose) => {};

const settingButton = (purpose) => {};

const MakeButton = (type = "button", purpose = "") => {
    if(type === "anchor") return settingAnchor(purpose);
    else if(type === "button") return settingButton(purpose);
}

const mapStateToProps = (state) => ({
    showPage: state.pageChangeData.showPage,
    modalState: state.modalToggleData.modalState
});

const mapToDispatch = (dispatch) => ({
    first: () => dispatch(pageActions.first()),
    initCamp: () => dispatch(pageActions.initCampaign()),
    loadCamp: () => dispatch(pageActions.loadCampaign()),
    inform: () => dispatch(pageActions.information()),
    modalShow: () => dispatch(modalActions.show()),
    modalHide: () => dispatch(modalActions.hide())
});

export default connect(mapStateToProps, mapToDispatch)(MakeButton);