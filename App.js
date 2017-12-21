import React, { Component } from "react";
import { UIManager, AsyncStorage, ActivityIndicator, View } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import store from "./src/redux/store";
import Root from "./src";
import { ListFriend, AuthScreen } from "./src/screens";

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class App extends Component {
  state = {
    ready: false
  };
  componentDidMount() {
    // persistStore(
    //   store,
    //   {
    //     storage: AsyncStorage,
    //     whitelist: ["auth"]
    //   },
    //   () => this.setState({ ready: true })
    // );
  }
  render() {
    // if (this.state.ready === false) {
    //   return (
    //     <View
    //       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    //     >
    //       <ActivityIndicator size="small" color="#FF9800" />
    //     </View>
    //   );
    // }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;