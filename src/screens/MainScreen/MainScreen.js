import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
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
import Modal from "react-native-modal";
import RNGradient from "react-native-linear-gradient";

import HeaderCustom from "../../common/Header";

const { width, height } = Dimensions.get("window");

class MainScreen extends Component {
  state = {
    isModalVisible: false
  };
  render() {
    return (
      <Container>
        <HeaderCustom
          left={
            <Left style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="ios-menu"
                onPress={() => this.setState({ isModalVisible: true })}
              />
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
                Chat App
              </Text>
            </Left>
          }
          right={
            <Right style={{ justifyContent: "center" }}>
              <Icon name="md-add" />
            </Right>
          }
        />
        <Grid>
          <Row size={2} style={styles.searchContainer}>
            <View style={styles.txtSearch}>
              <Input placeholder="Search" placeholderTextColor="#D5D5D5" />
            </View>
          </Row>
          <Row size={15}>
            <Content>
              <List>
                {this._renderItem()}
                {this._renderItem()}
                {this._renderItem()}
                {this._renderItem()}
              </List>
            </Content>
          </Row>
        </Grid>
        {this._renderModal()}
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
            <Badge>
              <Text>2</Text>
            </Badge>
          </View>
          <Text style={{ fontSize: 18 }} note>
            {" "}
            Tell me something....
          </Text>
        </Body>
        <Right style={styles.right}>
          <Text note> 8: 24 PM</Text>
        </Right>
      </ListItem>
    );
  }
  _renderModal() {
    return (
      <Modal style={styles.modal} isVisible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.infoContainer}>
            <Image
              style={styles.avatarModal}
              source={{
                uri:
                  "https://i.pinimg.com/736x/60/8e/e7/608ee78175e11e05f5504aaa6011c705--anime-avatar-%C4%91%C3%B4i-avt-anime-%C4%91%C3%B4i.jpg"
              }}
            />
            <Text style={styles.fullname}> Thanh Pham</Text>
            <Text style={styles.username}> @Thanhpham</Text>
          </View>
          <View style={styles.scrollButton}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.btnItem}>
                <RNGradient
                  colors={["#D4DEEE", "#AFBDD4"]}
                  style={styles.gradient}
                >
                  <Text style={{ color: "#FFF" }}>New Chat</Text>
                </RNGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnItem}>
                <RNGradient
                  colors={["#5C8CFF", "#54C3FF"]}
                  style={styles.gradient}
                >
                  <Text style={{ color: "#FFF" }}>New Chanel</Text>
                </RNGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnItem}>
                <RNGradient
                  colors={["#FF5463", "#F49F53"]}
                  style={styles.gradient}
                >
                  <Text style={{ color: "#FFF" }}>New Secret Chat</Text>
                </RNGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ flex: 3, backgroundColor: "transparent", paddingLeft: "10%"}}>
              <Text style={{ fontSize: 25, marginTop: "3%"}}> Contact</Text> 
              <Text style={{ fontSize: 25, marginTop: "5%"}}> Calls</Text> 
              <Text style={{ fontSize: 25, marginTop: "5%"}}> Settings</Text> 
              <Text style={{ fontSize: 25, marginTop: "5%"}}> Invite People</Text> 
              <Text style={{ fontSize: 25, marginTop: "5%"}}> Support</Text> 
              <Text style={{ fontSize: 25, marginTop: "5%"}}> F.A.Q</Text> 
          </View>
          <TouchableOpacity
            style={styles.modalBtnClose}
            onPress={() => this.setState({ isModalVisible: false })}
          >
            <Icon name="md-close" style={{ fontSize: 20 }} />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
export default MainScreen;
const styles = {
  searchContainer: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  txtSearch: {
    width: "80%",
    height: 40,
    backgroundColor: "#F3F3F3",
    paddingLeft: "2%",
    borderRadius: 12
  },
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
    paddingTop: 5
  },
  /**
   * Modal
   */
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    height: height * 0.95,
    width: width * 0.95,
    backgroundColor: "#FFF",
    borderRadius: 20
  },
  modalBtnClose: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 32,
    width: 32,
    borderRadius: 15,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center"
  },
  infoContainer: {
    flex: 2,
    justifyContent: "center",
    paddingLeft: "10%"
  },
  avatarModal: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  fullname: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: "2.5%"
  },
  username: {
    color: "#6F6F6F",
    fontWeight: "600",
    fontSize: 20
  },
  scrollButton: {
    flex: 1,
    //backgroundColor: "blue",
    // alignItems: "center"
  },
  btnItem: {
    backgroundColor: "transparent",
    height: 70,
    width: 130,
    marginRight: 10
  },
  gradient: {
    height: 70,
    width: 130,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  }
};

