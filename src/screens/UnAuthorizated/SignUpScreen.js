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
  Item,
  Input
} from "native-base";
import { connect } from "react-redux";
import { register } from "../../redux/actions/auth.action";
import HeaderCustom from "../../common/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import RNSpinkit from 'react-native-spinkit'

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class SignUpScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    fullname: "",
    email: "",
    username: "",
    password: "",
    errorEmail: false,
    errorUsername: false,
    errorPassword: false
  };
  validateEmail() {
    if (!emailReg.test(this.state.email)) {
      this.setState({
        errorEmail: true
      });
      return;
    }
    this.setState({
      errorEmail: false
    });
  }
  validateUsername() {
    if ((this.state.username.length = 0 || this.state.username === "")) {
      this.setState({
        errorUsername: true
      });
      return;
    }
    this.setState({
      errorUsername: false
    });
  }
  validatePassword() {
    if (this.state.password.length < 6) {
      this.setState({
        errorPassword: true
      });
      return;
    }
    this.setState({
      errorPassword: false
    });
  }
  inputFullname(value) {
    this.setState({
      fullname: value
    });
  }
  inputEmail(value) {
    this.setState({
      email: value
    });
  }
  inputUsername(value) {
    this.setState({
      username: value
    });
  }
  inputPassword(value) {
    this.setState({
      password: value
    });
  }
  register() {
    if (
      !this.state.errorEmail &&
      !this.state.errorPassword &&
      !this.state.errorUsername
    ) {
      this.props.register(
        this.state.username,
        this.state.password,
        this.state.fullname,
        this.state.email
      );
    }
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <HeaderCustom
          left={
            <Left style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="ios-arrow-back" />
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
                Create an Account
              </Text>
            </Left>
          }
        />
        <Grid>
          <Content contentContainerStyle={{ flex: 1 }}>
            <Row size={2} style={styles.container}>
              <Row size={1} style={styles.profile}>
                <View style={styles.avatar}>
                  <Icon
                    name="md-add"
                    style={{ color: "#D5d5d5", fontSize: 35 }}
                  />
                </View>
                <View style={styles.fullName}>
                  <Text style={{ fontSize: 15, fontWeight: "100" }}>
                    YOUR FULL NAME
                  </Text>
                  <Input
                    style={{ height: 40, fontSize: 20, fontWeight: "500" }}
                    // placeholderTextColor="#D5D5D5"
                    placeholder="Pham Thanh"
                    onChangeText={this.inputFullname.bind(this)}
                  />
                </View>
              </Row>
              <Row size={2} style={styles.formGroup}>
                <View style={styles.formControl}>
                  <Text style={{ height: 15 }} note>
                    YOUR EMAIL
                  </Text>
                  <View style={{ flexDirection: "row", height: 40 }}>
                    <Input
                      style={styles.inputText}
                      placeholderTextColor="#D5D5D5"
                      placeholder="name@domain.com"
                      onChangeText={this.inputEmail.bind(this)}
                      onEndEditing={this.validateEmail.bind(this)}
                      onFocus={() => this.setState({ errorEmail: false })}
                    />
                    {this.state.errorEmail ? (
                      <Ionicons
                        name="ios-alert-outline"
                        color="#FC2449"
                        size={20}
                      />
                    ) : (
                      undefined
                    )}
                  </View>
                </View>
                <View style={styles.formControl}>
                  <Text style={{ height: 15 }} note>
                    USERNAME
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      alignItems: "center"
                    }}
                  >
                    <Input
                      style={styles.inputText}
                      placeholderTextColor="#D5D5D5"
                      placeholder="@yourusername"
                      onChangeText={this.inputUsername.bind(this)}
                      onEndEditing={this.validateUsername.bind(this)}
                      onFocus={() => this.setState({ errorUsername: false })}
                    />
                    {this.state.errorUsername ? (
                      <Ionicons
                        name="ios-alert-outline"
                        color="#FC2449"
                        size={20}
                      />
                    ) : (
                      undefined
                    )}
                  </View>
                </View>
                <View style={styles.formControl}>
                  <Text style={{ height: 15 }} note>
                    CREATE PASSWORD
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      alignItems: "center"
                    }}
                  >
                    <Input
                      style={styles.inputText}
                      placeholderTextColor="#D5D5D5"
                      placeholder="Min 6 symbols"
                      secureTextEntry
                      onChangeText={this.inputPassword.bind(this)}
                      onEndEditing={this.validatePassword.bind(this)}
                      onFocus={() => this.setState({ errorPassword: false })}
                    />
                    {this.state.errorPassword ? (
                      <Ionicons
                        name="ios-alert-outline"
                        color="#FC2449"
                        size={20}
                      />
                    ) : (
                      undefined
                    )}
                  </View>
                </View>
              </Row>
            </Row>
            <Row size={1} style={{ flexDirection: "column" }}>
              <Row size={2} style={styles.btnContainer}>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: "#157CF8" }]}
                  onPress={this.register.bind(this)}
                >
                  <Text style={{ color: "#FFF", fontWeight: "500" }}>
                    Start Messaging
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: "#3C599B" }]}
                >
                  <Text style={{ color: "#FFF", fontWeight: "500" }}>
                    Connect with Facebook
                  </Text>
                </TouchableOpacity>
              </Row>
              <Row size={1} style={{ justifyContent: "center" }}>
                <Text style={{ color: "#6F6F6F", marginTop: 10 }}>
                  Already have an account?
                </Text>
                <Text
                  onPress={() => this.props.navigation.navigate("SignIn")}
                  style={{ color: "#157CF8", marginTop: 10 }}
                >
                  Sign in
                </Text>
              </Row>
            </Row>
          </Content>
        </Grid>
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
                styles.container2,
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
    register: state.auth.register,
    error: state.auth.error,
    isLoading: state.auth.isLoading
  }),
  {
    register
  }
)(SignUpScreen);





const styles = {
  container: {
    flexDirection: "column"
  },
  profile: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    borderColor: "#D5D5D5",
    // marginLeft: "5%",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFF",
    borderStyle: "dashed",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fullName: {
    backgroundColor: "#FFF",
    height: 70,
    minWidth: 250,
    marginLeft: "5%",
    justifyContent: "space-between",
    paddingTop: "1.5%"
  },
  formGroup: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  formControl: {
    height: 60,
    width: "85%",
    backgroundColor: "white",
    marginLeft: "7%",
    justifyContent: "space-between"
  },
  inputText: {
    height: 40,
    fontSize: 20,
    fontWeight: "300"
  },
  btnContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    height: 50,
    width: "80%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  container2: {
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
