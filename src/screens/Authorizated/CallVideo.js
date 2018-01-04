/**
 * Created by admin on 2/9/17.
 */

import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  LayoutAnimation,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Platform,
  BackHandler
} from "react-native";
import {
  QuickbloxLocalVideoView,
  QuickbloxRemoteVideoView
} from "react-native-video-quickblox";
import RNQuickbloxManager from "../../QuickbloxManager";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

import { rejectCall } from "../../redux/actions/videocall.action";

class VideoCalling extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.RNQuickblox = new RNQuickbloxManager();
    this.state = {
      bottom: 1,
      enableVoice: true
    };
    BackHandler.addEventListener("hardwareBackPress",()=>{
      console.log("nhan back a!");
    });
    return false;
  }
  toggleVoice() {
    this.setState({
      enableVoice: !this.state.enableVoice
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.iconTitle}>{setTime(this.props.callingTime)}</Text>*/}
        <QuickbloxRemoteVideoView style={styles.callDetails}>
          {Platform.OS === "android" ? (
            <QuickbloxLocalVideoView
              style={[styles.userVideo, { bottom: this.state.bottom }]}
              onRendered={() => this.setState({ bottom: 0 })}
            />
          ) : (
            <QuickbloxLocalVideoView style={styles.userVideo} />
          )}
        </QuickbloxRemoteVideoView>
        <View style={styles.callButtonContainer}>
          <TouchableOpacity
            style={styles.micIcon}
            onPress={this.toggleVoice.bind(this)}
          >
            {this.state.enableVoice ? (
              <Ionicons name="ios-mic-off" color="#FFF" size={35} />
            ) : (
              <Ionicons name="ios-mic" color="#FFF" size={35} />
            )}
          </TouchableOpacity>

          <TouchableHighlight
            onPress={() => {
              this.props.rejectCall();
              this.props.navigation.goBack();
            }}
            underlayColor={"transparent"}
          >
            <View style={styles.buttonContainer}>
              <View style={[styles.iconContainer, { backgroundColor: "red" }]}>
                <MaterialIcons name="call-end" color="#FFF" size={25} />
              </View>
              {/*<Text style={styles.iconTitle}>Decline</Text>*/}
            </View>
          </TouchableHighlight>

          <TouchableOpacity style={styles.revertCamera}>
            <Ionicons name="ios-reverse-camera" color="#FFF" size={35} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Chat app video call</Text>
        <Text style={styles.name}>Thanh Pham</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    userInfo: state.video.userInfo
  }),
  {
    rejectCall
  }
)(VideoCalling);

function setTime(totalSeconds) {
  let sec = pad(totalSeconds % 60);
  let min = pad(parseInt(totalSeconds / 60));
  return min + " : " + sec;
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 0
  },
  callDetails: {
    flex: 3,
    backgroundColor: "#6969"
  },
  userVideo: {
    position: "absolute",
    bottom: 1,
    right: 0,
    width: 80,
    height: 120,
    backgroundColor: "green",
    overflow: "hidden"
  },
  callButtonContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(23, 20, 31, 0.41)"
  },
  iconContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttonContainer: {
    alignItems: "center"
  },
  icon: {
    height: 30,
    width: 30
  },
  iconTitle: {
    alignItems: "center",
    fontSize: 15,
    alignSelf: "center"
  },
  micIcon: {
    // position: "absolute",
    // bottom: 20,
    // left: 40,
    backgroundColor: "transparent"
  },
  revertCamera: {
    // position: "absolute",
    // bottom: 20,
    // right: 40,
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
});
