import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base";
import { connect } from "react-redux";

import { fecthFriends } from "../../redux/actions/friend.action";

import firebase from "../../firebase";

class ListFriend extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ["Setting a timer"];
  }
  componentWillMount() {
    this.props.fecthFriends(this.props.auth.user.uid);
  }
  _renderRow(item) {
    return (
      <ListItem
        avatar
        style={{ marginLeft: 0 }}
        onPress={() =>
          this.props.navigation.navigate("Chat", { yourFriend: item })
        }
      >
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png"
            }}
          />
        </Left>
        <Body>
          <Text>{item.displayName}</Text>
          <Text note>Bạn muốn nói gì với tôi</Text>
        </Body>
        <Right />
      </ListItem>
    );
  }
  render() {
    if (this.props.friends.isFetching) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color="#FF9800" />
        </View>
      );
    }
    return (
      <Container>
        <Header>
          <Left>
            <Thumbnail
              square
              small
              source={{
                uri:
                  "https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png"
              }}
            />
          </Left>
          <Body>
            <Text> List friend</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <List
            dataArray={this.props.friends.contacts}
            renderRow={item => this._renderRow(item)}
          />
        </Content>
      </Container>
    );
  }
}
export default connect(
  state => ({
    auth: state.auth,
    friends: state.friends
  }),
  { fecthFriends }
)(ListFriend);
