import React, { Component } from "react";
import {
  UIManager,
  AsyncStorage,
  ActivityIndicator,
  View,
  Platform,
  PermissionsAndroid,
 
} from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import RNQuickblox from "./src/QuickbloxManager";
import store from "./src/redux/store";
import Root from "./src";
import { ListFriend, AuthScreen } from "./src/screens";


if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
    this.quickblox = new RNQuickblox(store);
    this.quickblox.init();
    if (Platform.OS === "android") requestPermissions();
  }

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

function requestPermissions() {
  try {
    return PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS,
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      PermissionsAndroid.PERMISSIONS.CALL_PHONE
    ]);
  } catch (err) {
    console.log(err);
  }
}
