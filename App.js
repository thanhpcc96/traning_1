import React, { Component } from "react";
import {
  UIManager,
  AsyncStorage,
  ActivityIndicator,
  View,
  Platform,
  PermissionsAndroid,
  NativeEventEmitter
} from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import RNQuickblox from "react-native-video-quickblox";
import Quickblox from "./src/QuickbloxManager";
import store from "./src/redux/store";
import Root from "./src";
import { ListFriend, AuthScreen } from "./src/screens";


const QuickbloxModule = new NativeEventEmitter(RNQuickblox);
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.quickblox = new Quickblox(store);
    this.quickblox.init();
    this.quickblox.addUserActionSubcriber(this);
    if (Platform.OS === "android") requestPermissions();
    this.state = {
      ready: false,
      calling: false
    };
    this.registerEvent();
  }
  registerEvent() {
    QuickbloxModule.addListener(
      RNQuickblox.DID_RECEIVE_CALL_SESSION,
      this.receiveCall.bind(this)
    );
    // QuickbloxModule.addListener(
    //   RNQuickblox.USER_ACCEPT_CALL,
    //   this.userAcceptCall.bind(this)
    // );
    // QuickbloxModule.addListener(
    //   RNQuickblox.USER_REJECT_CALL,
    //   this.userRejectCall.bind(this)
    // );
    // QuickbloxModule.addListener(
    //   RNQuickblox.SESSION_DID_CLOSE,
    //   this.sessionDidClose.bind(this)
    // );
    // QuickbloxModule.addListener(
    //   RNQuickblox.USER_HUNG_UP,
    //   this.userHungUp.bind(this)
    // );
    QuickbloxModule.addListener(
      RNQuickblox.RECEIVE_IMCOMING_MESSAGE,
      this.receiveMessage.bind(this)
    );
  }
  receiveCall(userInfo){
    console.log("receiveCall userInfo", userInfo);
    store.dispatch({ type: DID_RECEIVE_CALL_SESSION, payload: userInfo})
  }

  receiveMessage(data) {
    const newData = {
      _id: data.id,
      text: data.text,
      createdAt: new Date().toUTCString(),
      dialogId: data.dialogId,
      user: {
        _id: data.senderId
      },
      senderId: data.senderId,
      recipientId: data.recipientId
    };
    store.dispatch({ type: RECEIVE_IMCOMING_MESSAGE, payload: newData });
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

export const DID_RECEIVE_CALL_SESSION = "DID_RECEIVE_CALL_SESSION";
export const USER_ACCEPT_CALL = "USER_ACCEPT_CALL";
export const USER_REJECT_CALL = "USER_REJECT_CALL";
export const USER_HUNG_UP = "USER_HUNG_UP";
export const SESSION_DID_CLOSE = "SESSION_DID_CLOSE";
export const RECEIVE_IMCOMING_MESSAGE = "RECEIVE_IMCOMING_MESSAGE";
