import React, { Component } from "react";
import {
  Dimensions,
  View,
  NativeModules,
  Platform,
  StyleSheet
} from "react-native";

const { StatusBarManager } = NativeModules;
const winHeight = Dimensions.get("window").height;

const Header = ({ style, left, right, middle }) => (
  <View style={styles.root}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <View style={styles.left}>{left}</View>
      <View style={styles.middle}>{middle}</View>
      <View style={styles.right}>{right}</View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  root: {
    ...Platform.select({
      ios: {
        height: 69
      },
      android: {
        height: 49 //+ StatusBarManager.HEIGHT
      }
    })
  },
  statusBar: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        height: 20
      },
      android: {
        height: 0// StatusBarManager.HEIGHT
      }
    })
  },
  navBar: {
    height: 49,
    width: "92%",
    borderBottomColor: "#F3F3F3",
    borderBottomWidth: 1,
    marginLeft: "4%",
    flexDirection: "row"
  },
  left: {
    minWidth: 60
  },
  middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    minWidth: 60
  }
});
export default Header;
