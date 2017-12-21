import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
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
  Input
} from "native-base";

import ImagePicker from "react-native-image-picker";
import { GiftedChat } from "react-native-gifted-chat";
import { connect } from "react-redux";
import {
  findRoomByUser,
  sendMessage,
  sendImage
} from "../../../redux/actions/chat.action";

class ChatScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      avatarSource: null
    };
    console.ignoredYellowBox = ["Setting a timer"];
  }
  componentWillMount() {
    this.props.findRoomByUser(
      this.props.auth.user,
      this.props.navigation.state.params.yourFriend
    );
  }

  onSend2(text, user, uuid) {
    const messages = {
      text: text,
      user: user,
      createdAt: new Date(),
      _id: uuid()
    };
    this.props.sendMessage(
      this.props.auth.user,
      this.props.navigation.state.params.yourFriend,
      text,
      this.props.chat.roomKey
    );
    // this.setState(previousState => ({
    //   messages: GiftedChat.append(previousState.messages, messages)
    // }));
    this.textEdit._root.clear();
  }

  renderInputToolbar(props) {
    return (
      <View {...props} style={styles.ComposerContainer}>
        <View style={styles.groupButton}>
          <Icon
            name="ios-add-circle-outline"
            style={{ color: "#FF9800", fontSize: 28 }}
          />
          <Icon
            name="ios-camera-outline"
            style={{ color: "#98AAB0", fontSize: 28 }}
          />
          <Icon
            name="ios-image-outline"
            style={{ color: "#98AAB0", fontSize: 28 }}
            onPress={this.renderPicker.bind(this)}
          />
          <Icon
            name="ios-mic-outline"
            style={{ color: "#98AAB0", fontSize: 28 }}
          />
        </View>
        <View style={styles.composerInput}>
          <Input
            placeholder="Nhập nội dung chat"
            onChangeText={props.onTextChanged}
            ref={textInput => (this.textEdit = textInput)}
          />
          <Icon
            name="ios-send-outline"
            style={{ color: "#FF9800", fontSize: 28, marginRight: 10 }}
            onPress={() =>
              this.onSend2(props.text, props.user, props.messageIdGenerator)
            }
          />
        </View>
      </View>
    );
  }
  renderPicker() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      title: "Chon hinh tai len",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        this.props.sendImage(
          this.props.auth.user,
          this.props.navigation.state.params.yourFriend,
          this.props.chat.roomKey,
          response.data,
          "image",
          response.fileName
        );
      }
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="ios-arrow-round-back"
                style={{ color: "#FF9800", fontSize: 35, marginRight: 10 }}
                onPress={() => this.props.navigation.goBack()}
              />
              <Thumbnail
                square
                small
                style={{ width: 35, height: 35, borderRadius: 17.5 }}
                source={{
                  uri:
                    "https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png"
                }}
                style={{ marginLeft: 5 }}
              />
            </View>
          </Left>
          <Body>
            <Text> Thanh Pham</Text>
          </Body>
          <Right>
            <Icon
              name={"ios-videocam-outline"}
              style={{ color: "#FF9800", fontSize: 30, marginRight: 20 }}
            />
            <Icon
              name={"ios-call-outline"}
              style={{ color: "#FF9800", fontSize: 30 }}
            />
          </Right>
        </Header>
        {this.props.loading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator color="#FF9800" />
          </View>
        ) : (
          <GiftedChat
            // showUserAvatar
            messages={this.props.chat.messages}
            user={{
              _id: this.props.auth.user.uid
            }}
            // renderActions={this._renderAction.bind(this)}
            //  renderComposer={this._renderComposer.bind(this)}
            renderInputToolbar={this.renderInputToolbar.bind(this)}
            // renderSend={this._renderSend.bind(this)}
          />
        )}
      </Container>
    );
  }
}
export default connect(
  state => ({
    auth: state.auth,
    chat: state.chat
  }),
  {
    findRoomByUser,
    sendMessage,
    sendImage
  }
)(ChatScreen);
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
    height: 44,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
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
    height: 36
  }
});
