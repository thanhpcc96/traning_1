import React from "react";

import { StackNavigator } from "react-navigation";
import { MainScreen, ListCallsScreen, ChatScreen, CallVideo  } from "../screens";
export default StackNavigator(
  {
    Home: {
      screen: MainScreen
    },
    ListCall: {
      screen: ListCallsScreen
    },
    Chat: {
      screen: ChatScreen
    },
    CallVideo: {
      screen: CallVideo
    }
  },
  {
    initialRouteName: "Home"
  }
);
