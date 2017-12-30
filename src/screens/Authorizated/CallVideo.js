import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Container, Text } from "native-base";
import RNgradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

class VideoCall extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    StatusBar.setBarStyle("light-content");
  }
  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <RNgradient
            style={{ flex: 1 }}
            colors={["rgba(0,0,0,0.5),rgba(0,0,0,0),rgba(0,0,0,0.5)"]}
          >
            <ImageBackground
              source={require("../../../assets/img/videocall.png")}
              style={{ height: "100%", width: "100%", zIndex: -1 }}
            />
          </RNgradient>
          <TouchableOpacity style={styles.btnEndCall}>
            <MaterialIcons name="call-end" color="#FFF" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.micIcon}>
            <Ionicons name="ios-mic" color="#FFF" size={35} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.revertCamera}>
            <Ionicons name="ios-reverse-camera" color="#FFF" size={35} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chat app video call</Text>
          <Text style={styles.name}>Thanh Pham</Text>
        </View>
        <View
          style={{
            position: "absolute",
            width: 140,
            height: 200,
            borderRadius: 20,
            left: 30,
            bottom: 100
          }}
        >
          <ImageBackground
            source={require("../../../assets/img/beforeCam.png")}
            style={{ width: 140, height: 200, borderRadius: 20 }}
          />
        </View>
      </Container>
    );
  }
}
export default VideoCall;

const styles = {
  btnEndCall: {
    backgroundColor: "#FC2449",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: "40%",
    right: "40%"
  },
  micIcon: {
    position: "absolute",
    bottom: 20,
    left: 40,
    backgroundColor: "transparent"
  },
  revertCamera: {
    position: "absolute",
    bottom: 20,
    right: 40,
    backgroundColor: "transparent"
  },
  headerTitle: {
    position: "absolute",
    top: 30,
    left: 20,
    color: "#FFF",
    backgroundColor: "transparent",
    fontSize: 18,
    fontWeight: "400"
  },
  name: {
    position: "absolute",
    top: 60,
    left: 20,
    color: "#FFF",
    backgroundColor: "transparent",
    fontSize: 25,
    fontWeight: "500"
  }
};
