import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";
import {
  Header,
  Left,
  Body,
  Right,
  Thumbnail,
  Container,
  Icon,
  Content,
  Text,
  Input,
  Badge
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-picker";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  MessageContainer
} from "react-native-gifted-chat";
import Modal from "react-native-modal";
//import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  createDialog,
  loadOldMessage,
  initForChat,
  sendMessage
} from "../../redux/actions/chat.action";
import HeaderCustom from "../../common/Header";
import { data } from "./fakeData";

const count = 0;
class ChatScreenOffical extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    messages: [],
    isTouchCompose: false,
    idDialog: null
  };
  componentWillMount() {
    this.props.createDialog(this.props.navigation.state.params.idFriend);
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    if (nextProps.dialog && count < 1) {
      initForChat(nextProps.dialog.id);
      this.props.loadOldMessage(nextProps.dialog.id);
      this.setState({ idDialog: nextProps.dialog.id });
      count++;
    }
    if (nextProps.oldMessage !== null) {
      this.setState({
        messages: nextProps.oldMessage
      });
    }
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#F3F3F3",
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 20
          },
          right: {
            backgroundColor: "#157CF8",
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 20
          }
        }}
      />
    );
  }
  sendMessage(text,uuid) {
    const { login }= this.props;
    const message= {
      _id: uuid(),
      text: text,
      createdAt: new Date(),
      user: {
        id: login ,
      }
    }
    this.props.sendMessage(
      this.state.idDialog,
      this.props.navigation.state.params.idFriend,
      text
    );
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, message),
      };
    })
  }
  renderInputToolbar2(props) {
    console.log("==================renderInputToolbar2==================");
    console.log(props);
    console.log("====================================");
    return (
      <View {...props} style={styles.ComposerContainer}>
        {!this.state.isTouchCompose ? (
          <View style={styles.groupButton}>
            <Icon
              name="ios-add-circle-outline"
              style={{ color: "#FC2449", fontSize: 28 }}
            />
            <Icon
              name="ios-camera-outline"
              style={{ color: "#98AAB0", fontSize: 28 }}
            />
            <Icon
              name="ios-image-outline"
              style={{ color: "#98AAB0", fontSize: 28 }}
              //onPress={this.renderPicker.bind(this)}
            />
            <Icon
              name="ios-mic-outline"
              style={{ color: "#98AAB0", fontSize: 28 }}
            />
          </View>
        ) : (
          <Icon
            name="md-add-circle"
            style={{ color: "#FC2449", fontSize: 33, marginLeft: 5 }}
            onPress={()=> this.setState({ isTouchCompose : false })}
          />
        )}
        <View
          style={
            this.state.isTouchCompose
              ? styles.composerInputFull
              : styles.composerInput
          }
        >
          <Input
            placeholder="Nhập nội dung chat"
            style={{backgroundColor: "transparent"}}
            onChangeText={props.onTextChanged}
            multiline
            onFocus={() => this.setState({ isTouchCompose: true })}
            onTouchStart={()=> this.setState({ isTouchCompose:  true})}
            ref={textInput => (this.textEdit = textInput)}
          />
          <View
            style={{
              height: 34,
              width: 34,
              borderRadius: 17,
              backgroundColor: "#FC2449",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="md-arrow-round-forward"
              style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}
              //onPress={() => con
              //this.onSend2(props.text, props.user, props.messageIdGenerator)
              //}
              onPress={() => this.sendMessage(props.text, props.messageIdGenerator)}
            />
          </View>
        </View>
      </View>
    );
  }
  //   renderMessage(props){
  //     return(
  //         <MessageContainer {...props}  />
  //     )
  //   }
  render() {
    console.log("==============this.props.navigation======================");
    console.log(this.props.navigation);
    console.log("====================================");
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <HeaderCustom
          left={
            <Left style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="ios-arrow-back"
                onPress={() => this.props.navigation.goBack()}
              />
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
                Thanh Pham
              </Text>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: "#1AEEC2",
                  marginLeft: 10
                }}
              />
            </Left>
          }
          right={
            <Right style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="video-camera"
                size={23}
                style={{ marginRight: 20 }}
                onPress={() => this.props.navigation.navigate("CallVideo")}
              />
              <FontAwesome name="phone" size={23} style={{ marginRight: 10 }} />
            </Right>
          }
        />
        <GiftedChat
          // showUserAvatar
          messages={this.state.messages}
          user={{
            id: this.props.login
          }}
          renderBubble={this.renderBubble.bind(this)}
          renderTime={props => <View />}
          // renderActions={this._renderAction.bind(this)}
          //  renderComposer={this._renderComposer.bind(this)}
          renderInputToolbar={this.renderInputToolbar2.bind(this)}
          //renderMessage={this.renderMessage.bind(this)}
          // renderSend={this._renderSend.bind(this)}
          renderFooter={this.renderFooter.bind(this)}
        />
        {this.renderModalVoiceCall()}
      </Container>
    );
  }
  renderFooter(props) {
    return <View style={{ marginBottom: 10 }} />;
  }
  renderModalVoiceCall() {
    return (
      <Modal
        isVisible={false}
        style={styles.modal}
        backdropColor="#5B5B5B"
        animationInTiming={10}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Voice Call</Text>
          </View>
          <View style={styles.modalContent}>
            <Image
              source={{
                uri:
                  "https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k_400x400.jpg"
              }}
              style={styles.modalAvatar}
            />
            <Text style={{ fontSize: 35, fontWeight: "400" }}> Thanh Pham</Text>
            <Text note style={{ fontSize: 17, fontWeight: "300" }}>
              {" "}
              Waiting....
            </Text>
            <TouchableOpacity style={styles.btnEndCall}>
              <MaterialIcons name="call-end" color="#FFF" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalFooter}>
            <Ionicons name="ios-mic-off-outline" size={30} color={"#D5D5D5"} />
          </View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() =>
              this.props.showModalChatVoiceCall(!this.props.voiceModal)
            }
          >
            <Ionicons name="md-close" size={20} />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
export default connect(
  state => ({
    dialog: state.chat.dialog,
    oldMessage: state.chat.oldMessage,
    login: state.auth.login
  }),
  {
    createDialog,
    loadOldMessage,
    sendMessage
  }
)(ChatScreenOffical);
const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  footerText: {
    fontSize: 14,
    color: "#aaa"
  },
  ComposerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    bottom: 0
    //position: "absolute"
  },
  groupButton: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  composerInput: {
    flex: 0.6,
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#98AAB0",
    justifyContent: "center",
    alignItems: "center",
    height: 30
  },
  composerInputFull: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 20,
    marginLeft: "3%",
    borderWidth: 1,
    borderColor: "#98AAB0",
    //justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    height: "75%",
    width: "85%",
    backgroundColor: "#FFF",
    borderRadius: 20
  },
  modalHeader: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingLeft: 20
  },
  modalHeaderText: {
    color: "#2A2A2A",
    fontSize: 18
  },
  modalContent: {
    flex: 6,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-around"
  },
  modalAvatar: {
    height: 130,
    width: 130,
    borderRadius: 65
  },
  btnEndCall: {
    backgroundColor: "#FC2449",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  modalFooter: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingLeft: 20
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
  }
});
