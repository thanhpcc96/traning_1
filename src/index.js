// import { AuthScreen,ListFriend,ChatScreen} from "./screens";

// export {
//     AuthScreen,
//     ListFriend,
//     ChatScreen
// }
import React, { Component } from "react";
import { Text, Image, TouchableOpacity, View, Dimensions } from "react-native";
import { Root,Toast} from "native-base";
import AppNav from "./router";
import {
  GreetingScreen,
  SignInScreen,
  SignUpScreen,
  ForgotScreen,
  MainScreen,
  ListCallsScreen,
  ChatScreenOffical
} from "./screens";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Modal from "react-native-modal";
import { connect } from 'react-redux';

const { height, width } = Dimensions.get("window");

class RootApp extends Component {
  state={
    isCalling: false
  }
  render() {
    return (
      <Root>
        <AppNav />
      {this.state.isCalling ? this._renderModalReceiveCall() : null}
      
      </Root>
    );
  }
  _renderModalReceiveCall() {
    return (
      <Modal
        isVisible={true}
        style={styles.modal}
        backdropColor="#5B5B5B"
        animationInTiming={10}
      >
        <View style={styles.modalContainer}>
          <Image
            source={require("../assets/img/receiveCall.png")}
            style={styles.backdropImage}
          />
          <TouchableOpacity style={styles.acceptCall}>
            <Ionicons name="ios-call" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejectCall}>
            <MaterialIcons name="call-end" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalClose}>
            <Ionicons name="md-close" size={15} />
          </TouchableOpacity>
          <Text style={styles.title}> Video Call</Text>
          <Text style={styles.nameOfCaller}> Alex Thanh</Text>
        </View>
      </Modal>
    );
  }
}
export default RootApp;

const styles = {
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  backdropImage: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
    borderRadius: 20
  },

  modalContainer: {
    height: "90%",
    width: "95%",
    backgroundColor: "#FFF",
    borderRadius: 20
  },

  modalClose: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    position: "absolute",
    top: 15,
    right: 15
  },
  acceptCall: {
    position: "absolute",
    bottom: 50,
    left: 35,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#858585",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1AEEC2"
  },
  rejectCall: {
    position: "absolute",
    bottom: 50,
    right: 35,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#858585",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC2449"
  },
  title: {
    position: "absolute",
    top: 20,
    left: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "white",
    backgroundColor: "transparent"
  },
  nameOfCaller: {
    position: "absolute",
    top: 50,
    left: 10,
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    backgroundColor: "transparent"
  }
};
