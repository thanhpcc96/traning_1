import React, { PureComponent } from "react";
import { addNavigationHelpers } from "react-navigation";

import Navigation from "./Nav";
import { AuthScreen } from "../screens";
import { connect } from "react-redux";

const router = Navigation.router;
class Nav extends PureComponent {
  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav
    });
    if (this.props.auth.isLoged===true) {
      console.log('================sasasasas====================');
      console.log(this.props.auth.isLoged);
      console.log('====================================');
      return <Navigation navigation={navigation} />;
    }
    return <AuthScreen />;
  }
}
export default connect(state => ({
  auth: state.auth,
  nav: state.nav
}))(Nav);

export { router };
