import React, { Component } from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal
} from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Text,
  Grid,
  Row,
  Col,
  Input,
  Toast
} from "native-base";
import { connect } from "react-redux";
import RNSpinkit from "react-native-spinkit";

import { login } from "../../redux/actions/auth.action";
import HeaderCustom from "../../common/Header";

class SignIn extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    username: "",
    password: ""
  };
  inputUserName(value) {
    this.setState({
      username: value.toLowerCase()
    });
  }
  inputPassword(value) {
    this.setState({
      password: value
    });
  }
  login() {
    this.props.login(this.state.username, this.state.password);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error !== null) {
      this.showToast(nextProps.error);
    }
  }
  showToast(error) {
    // const { error } = this.props;
    if (error)
      Toast.show({
        text: "Opps Error. Detail: " + error.detailMessage,
        buttonText: "Ok",
        position: "bottom",
        duration: 10000,
        type: "danger"
      });
  }
  _renderInputUsername() {
    return (
      <View style={[styles.formControl, { marginTop: 15 }]}>
        <Text style={{ height: 15 }} note>
          YOUR USERNAME
        </Text>
        <Input
          style={{ height: 40, fontSize: 20, fontWeight: "300" }}
          placeholderTextColor="#D5D5D5"
          placeholder="alex001"
          onChangeText={this.inputUserName.bind(this)}
        />
      </View>
    );
  }
  _renderInputPassword() {
    return (
      <View style={[styles.formControl, { marginBottom: 15 }]}>
        <Text style={{ height: 15 }} note>
          YOUR PASSWORD
        </Text>
        <Input
          style={{ height: 40, fontSize: 20, fontWeight: "300" }}
          placeholder="Min 8 symbols"
          placeholderTextColor="#D5D5D5"
          onChangeText={this.inputPassword.bind(this)}
        />
      </View>
    );
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
                Sign In
              </Text>
            </Left>
          }
        />
        <Content contentContainerStyle={{ flex: 1 }}>
        <Grid>
          
            <Row size={4} style={styles.LogoContainer}>
              <Image source={require("../../../assets/img/logo.png")} />
              <Text style={{ marginTop: 10, fontSize: 25 }}>
                Wellcome home mate!
              </Text>
            </Row>

            <Row size={4} style={styles.formController}>
              {this._renderInputUsername()}
              {this._renderInputPassword()}
            </Row>

            <Row size={2} style={{ flexDirection: "column" }}>
              <Row
                size={5}
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                  style={styles.btnStartMessage}
                  onPress={this.login.bind(this)}
                >
                  <Text style={{ color: "#FFF", fontWeight: "600" }}>
                    Start Message
                  </Text>
                </TouchableOpacity>
              </Row>
              <Row size={5} style={{ justifyContent: "center" }}>
                <Text style={{ color: "#6F6F6F", marginTop: 10 }}>
                  Forgot password?
                </Text>
                <Text
                  onPress={() => this.props.navigation.navigate("Forgot")}
                  style={{ color: "#157CF8", marginTop: 10 }}
                >
                  Reset.
                </Text>
              </Row>
            </Row>
            </Grid>
            </Content>
        {this.props.isLoading ? (
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
                <Text>Please wait......</Text>
              </View>
            </View>
          </Modal>
        ) : (
          undefined
        )}
      </Container>
    );
  }
}
export default connect(
  state => ({
    //login: state.auth.login,
    error: state.auth.error,
    isLoading: state.auth.isLoading
  }),
  {
    login
  }
)(SignIn);
const styles = {
  LogoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  formController: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  formControl: {
    height: 60,
    width: "85%",
    backgroundColor: "white",
    marginLeft: "7.5%",
    justifyContent: "space-between"
  },
  btnStartMessage: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#157CF8",
    borderRadius: 8
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
