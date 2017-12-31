import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
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
  Content,
  Body,
  ListItem,
  Badge
} from "native-base";
import ModalCustom from "react-native-modal";
import RNGradient from "react-native-linear-gradient";
import RNSpinkit from "react-native-spinkit";
import { connect } from "react-redux";

import { loadDialogs, getListUsers,createDialog } from "../../redux/actions/chat.action";

import HeaderCustom from "../../common/Header";

const { width, height } = Dimensions.get("window");

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    isModalVisible: false,
    data : []
  };
  componentDidMount() {
    //this.props.loadDialogs();
    this.props.getListUsers();
  }
  selectItem(id){
    this.props.navigation.navigate("Chat",{idFriend: id});
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.listUsers!==null){
      const { login }= this.props;
      const data =[]
      nextProps.listUsers.forEach( item =>{
        if( item.id !== login)  data.push(item)
      });
      this.setState({ data })
    }
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
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
        {this.props.loadedUsers ? (
          <Grid>
            <Row size={2} style={styles.searchContainer}>
              <View style={styles.txtSearch}>
                <Input placeholder="Search" placeholderTextColor="#D5D5D5" />
              </View>
            </Row>
            <Row size={15}>
              <FlatList
                keyExtractor={(item, index) => index}
                data={this.state.data}
                renderItem={({item, index}) => this._renderItem({item, index})}
              />
            </Row>
          </Grid>
        ) : (
          <Modal
            animationType="fade"
            transparent={true}
            visible={true}
            onRequestClose={() => {
              console.log("android click back");
            }}
          >
            <View
              style={[
                styles.container,
                { backgroundColor: "rgba(0, 0, 0, 0.2)" }
              ]}
            >
              <View style={[styles.innerContainer]}>
                <RNSpinkit
                  isVisible={true}
                  size={60}
                  type="ThreeBounce"
                  color="#4286f4"
                />
                <Text>Loading data.....</Text>
              </View>
            </View>
          </Modal>
        )}
        {this._renderModal()}
      </Container>
    );
  }
  _renderItem({item, index}) {
    return (
      <ListItem key={index}
        style={styles.listItem}
        onPress={()=> this.selectItem(item.id)}
      >
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
            <Badge>
              <Text>2</Text>
            </Badge>
          </View>
          <Text style={{ fontSize: 18 }} note>
            {"@"+item.login}
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
      <ModalCustom isVisible={this.state.isModalVisible}>
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
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
          <View
            style={{
              flex: 3,
              backgroundColor: "transparent",
              paddingLeft: "10%"
            }}
          >
            <Text style={styles.menuSelect}> Contact</Text>
            <Text
              style={styles.menuSelect}
              onPress={() => {
                this.props.navigation.navigate("ListCall");
                this.setState({ isModalVisible: false });
              }}
            >
              {" "}
              Calls
            </Text>
            <Text style={styles.menuSelect}> Settings</Text>
            <Text style={styles.menuSelect}> Invite People</Text>
            <Text style={styles.menuSelect}> Support</Text>
            <Text style={styles.menuSelect}> F.A.Q</Text>
          </View>
          <TouchableOpacity
            style={styles.modalBtnClose}
            onPress={() => this.setState({ isModalVisible: false })}
          >
            <Icon name="md-close" style={{ fontSize: 20 }} />
          </TouchableOpacity>
        </View>
      </ModalCustom>
    );
  }
}
export default connect(
  state => ({
    listUsers: state.chat.listUsers,
    loadedUsers: state.chat.loadedUsers,
    errorUser: state.chat.errorUser,
    dialog: state.chat.dialog,
    login: state.auth.login
  }),
  {
    loadDialogs,
    getListUsers,
    createDialog
  }
)(MainScreen);

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
    borderRadius: 20,
    padding: Platform.OS === "ios" ? 0 : 15
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
    flex: 1
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
  },
  menuSelect: {
    fontSize: Platform.OS == "ios" ? 25 : 18,
    marginTop: "3%"
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
