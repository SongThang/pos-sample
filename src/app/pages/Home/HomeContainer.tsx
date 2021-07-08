import * as React from "react";
import { connect } from "react-redux";
import { action } from "../../redux/Actions";
import { IReducer } from "../../redux/Interface";
import HomeScreen from "./HomeScreen";

interface Props {
  fetchBanner: () => void;
}

class HomeContainer extends React.Component<Props, any> {
  componentDidMount() {
    this.props.fetchBanner();
  }
  render() {
    return <HomeScreen />;
  }
}

const mapStateToProps = (state: IReducer) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchBanner: () => dispatch(action.banner.fetchBanner()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
