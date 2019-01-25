import FirstPage from "./first-page";
import * as pageActions from "../actions/page-action";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    showPage: state.showPage
});

const mapDispatchToProps = (dispatch) => ({
    first: () => dispatch(pageActions.first()),
    initCamp: () => dispatch(pageActions.initCampaign()),
    loadCamp: () => dispatch(pageActions.loadCampaign()),
    inform: () => dispatch(pageActions.information())
});

const FirstPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstPage);

export default FirstPageContainer;