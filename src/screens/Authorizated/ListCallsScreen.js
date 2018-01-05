import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal
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
import RNSpinkit from "react-native-spinkit";
//import { getListUsers } from "../../redux/actions/chat.action";
import HeaderCustom from "../../common/Header";
import { connect } from "react-redux";
class ListCallScreen extends Component {
  static navigationOptions = {
    header: null
  };
  
  state={
    listUsers: []
  }
  componentWillMount() {
    const {login} = this.props;
    const data=[];
    this.props.listUsers.forEach(item=>{
        if(item.id !== login){
          data.push(item)
        }
    })
    this.setState({
      listUsers: data
    })
  }
  filterUser(user) {
    console.log("user",user);
    return user.id != this.props.login;
  }
  render() {
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

        <FlatList
          data={this.state.listUsers}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => this._renderItem(item, index)}
        />
      </Container>
    );
  }

  _renderItem(item, index) {
    return (
      <ListItem style={styles.listItem} key={index}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/736x/60/8e/e7/608ee78175e11e05f5504aaa6011c705--anime-avatar-%C4%91%C3%B4i-avt-anime-%C4%91%C3%B4i.jpg"
          }}
          style={styles.avatar}
        />
        <Body style={{ height: 70 }}>
          <View style={styles.contentItem}>
            <Text>{item.full_name}</Text>
          </View>
          <Text style={{ fontSize: 18 }} note>
            {" "}
            Call me ....
          </Text>
        </Body>
        <Right style={styles.right}>
          <Badge>
            <Text style={{ fontSize: 11 }}>1 call</Text>
          </Badge>
        </Right>
      </ListItem>
    );
  }
}

export default connect(state => ({
  listUsers: state.chat.listUsers,
  errorUser: state.chat.errorUser,
  loadedUsers: state.chat.loadedUsers,
  login: state.auth.login
}))(ListCallScreen);

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
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20,
    width: 280
  }
};
