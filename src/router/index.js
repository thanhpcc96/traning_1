import React, { PureComponent } from "react";
import { addNavigationHelpers } from "react-navigation";

import Authorizated from "./Authorizated";
import UnAuthorizated from "./UnAuthorizated";

import { connect } from "react-redux";

const router = Authorizated.router;
class AppNav extends PureComponent {
  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav
    });
    if (this.props.auth.isLogin) {
      
      return <Authorizated navigation={navigation} />;
    }
    return <UnAuthorizated />;
  }
}
export default connect(state => ({
  auth: state.auth,
  nav: state.nav
}))(AppNav);

export { router };
