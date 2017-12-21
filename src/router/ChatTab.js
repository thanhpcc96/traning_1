import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from "react-navigation";

import { ChatScreen, ListFriend } from "../screens/index";
import { Icon } from 'native-base'
export default TabNavigator(
  {
    ListFriend: {
      screen: ListFriend,
      navigationOptions: {
        headerStyle: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatbubbles-outline" size={35} color={tintColor} />
        )
      }
    }
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: "#7A7474",
      activeTintColor: "#FF9800",
      pressColor: "#FF9800",
      indicatorStyle: { backgroundColor: "#FF9800" },
      style: {
        backgroundColor: "#FDF8F8"
      }
    }
  }
);
