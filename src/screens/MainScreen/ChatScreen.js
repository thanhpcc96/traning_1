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
  Input,
  Badge
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import ImagePicker from "react-native-image-picker";
import { GiftedChat, Bubble, InputToolbar, MessageContainer} from "react-native-gifted-chat";
import HeaderCustom from "../../common/Header";
import { data } from "./fakeData";

class ChatScreenOffical extends Component {
  state = {
    messages: data,
    isTouchCompose: false
  };
  renderInputToolbar(props){
      return(
        <View style={{height: 64, backgroundColor: "red", width: "100%"}}>
            <View style={{height: 44, width: "100%", backgroundColor: "green"}}></View>
            <View style={{height: 20, width: "100%", backgroundColor: "blue"}}></View>
        </View>
      )
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
  renderInputToolbar2(props) {
      console.log('====================================');
      console.log(this.state);
      console.log('====================================');
    return (
      <View {...props} style={styles.ComposerContainer}>
        {!this.state.isTouchCompose ? <View style={styles.groupButton}>
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
          //onPress={this.renderPicker.bind(this)}
        />
        <Icon
          name="ios-mic-outline"
          style={{ color: "#98AAB0", fontSize: 28 }}
        />
      </View> : null}
        <View style={styles.composerInput}>
          <Input
            placeholder="Nhập nội dung chat"
            onChangeText={props.onTextChanged}
            onFocus={()=> this.setState({isTouchCompose : true})}
            ref={textInput => (this.textEdit = textInput)}
          />
          <Icon
            name="ios-send-outline"
            style={{ color: "#FF9800", fontSize: 28, marginRight: 10 }}
            //onPress={() => con
              //this.onSend2(props.text, props.user, props.messageIdGenerator)
            //}
          />
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
    return (
      <Container>
        <HeaderCustom
          left={
            <Left style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="ios-arrow-back" />
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
              />
              <FontAwesome name="phone" size={23} style={{ marginRight: 10 }} />
            </Right>
          }
        />
        <GiftedChat
          // showUserAvatar
          messages={this.state.messages}
          user={{
            _id: 1
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
      </Container>
    );
  }
  renderFooter(props){
      return(
          <View style={{ marginBottom: 10}} />
      )
  }
}
export default ChatScreenOffical;
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
      bottom: 0,
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
      height: 36
    }
  });