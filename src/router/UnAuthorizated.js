import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import {
  GreetingScreen,
  SignInScreen,
  SignUpScreen,
  ForgotScreen
} from "../screens";

export default StackNavigator(
  {
    Greeting: {
      screen: GreetingScreen
    },
    SignIn: {
      screen: SignInScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    Forgot: {
      screen: ForgotScreen
    }
  },
  {
    initialRouteName: "Greeting"
  }
);
