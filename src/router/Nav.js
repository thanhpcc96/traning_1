import React, { Component } from "react";
import { TabNavigator,StackNavigator } from "react-navigation";

import ChatTab from "./ChatTab";
import { ChatScreen } from "../screens";

export default StackNavigator(
  {
    ListFiendTab: {
      screen: ChatTab
    },
    Chat: {
      screen: ChatScreen
    }
  },
  {
    headerMode: "screen",
    headerBackTitle: null
  }
);
