import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  Container,
  Left,
  Icon,
  Text,
  Right,
  Grid,
  Row,
  Input,
  List,
  ListItem,
  Content,
  Body,
  Badge
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import HeaderCustom from "../../common/Header";
class ListCallScreen extends Component {
  render() {
    return (
      <Container>
        <HeaderCustom
          left={
            <Left style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="ios-arrow-back" />
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
                Calls
              </Text>
            </Left>
          }
          right={
            <Right style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="video-camera"
                size={20}
                style={{ marginRight: 20 }}
              />
              <FontAwesome name="phone" size={20} />
            </Right>
          }
        />
        <Content>
          <List>
          {this._renderItem()}
          {this._renderItem()}
          {this._renderItem()}
          {this._renderItem()}
          {this._renderItem()}
          {this._renderItem()}
          {this._renderItem()}
          </List>
        </Content>
      </Container>
    );
  }
  _renderItem() {
    return (
      <ListItem style={styles.listItem}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/736x/60/8e/e7/608ee78175e11e05f5504aaa6011c705--anime-avatar-%C4%91%C3%B4i-avt-anime-%C4%91%C3%B4i.jpg"
          }}
          style={styles.avatar}
        />
        <Body style={{ height: 70 }}>
          <View style={styles.contentItem}>
            <Text>Friend 1</Text>
          </View>
          <Text style={{ fontSize: 18 }} note>
            {" "}
            Tell me something....
          </Text>
        </Body>
        <Right style={styles.right}>
          <Badge>
            <Text style={{fontSize: 11}}>2 call</Text>
          </Badge>
        </Right>
      </ListItem>
    );
  }
}

export default ListCallScreen;

const styles = {
  listItem: {
    height: 65,
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 1
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  contentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "2%"
  },
  right: {
    height: 70,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 10
  }
};
