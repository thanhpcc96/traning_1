// import { AuthScreen,ListFriend,ChatScreen} from "./screens";

// export {
//     AuthScreen,
//     ListFriend,
//     ChatScreen
// }
import React, { Component } from "react";
import { Root } from "native-base";
import Nav from "./router";
import {
  GreetingScreen,
  SignInScreen,
  SignUpScreen,
  ForgotScreen,
  MainScreen,
  ListCallsScreen,
  ChatScreenOffical
} from "./screens";

const RootApp = () => (
  <Root>
    <ChatScreenOffical />
  </Root>
);
export default RootApp;
