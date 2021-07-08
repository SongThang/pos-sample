import React from "react";
import { Provider } from "react-redux";
import App from "../routes/index";

export interface Props {}

export interface State {
  ready: boolean;
}
export default function (stores: any) {
  return class Setup extends React.Component<Props, State> {
    constructor(props: any) {
      super(props);
      this.state = {
        ready: false,
      };
    }

    componentDidMount() {
      this.setState({ ready: true });
    }

    render() {
      if (!this.state.ready) {
        return <div />;
      }
      return (
        <Provider store={stores}>
          <App />
        </Provider>
      );
    }
  };
}
