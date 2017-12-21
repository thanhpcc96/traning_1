import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Item, Toast, Icon } from "native-base";
import { connect } from "react-redux";

import { login, register } from "../../redux/actions/auth.action";
import firebase from "../../firebase";

const standandEmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailLoginErr: false,
      isEmailRegisterErr: false,
      email: "",
      password: "",
      emaiReg: "",
      passwordReg: "",
      isShowReg: false
    };
  }
  inputEmail(value) {
    this.setState({
      email: value
    });
  }
  inputEmailRegister(value) {
    this.setState({
      emaiReg: value
    });
  }
  validateEmail() {
    if (!standandEmailReg.test(this.state.email)) {
      this.setState({
        isEmailLoginErr: true
      });
    }
  }
  validateEmailRegister() {
    if (!standandEmailReg.test(this.state.emaiReg)) {
      this.setState({
        isEmailRegisterErr: true
      });
      return;
    }
  }
  inputPassword(value) {
    this.setState({
      password: value
    });
  }
  inputPasswordReg(value) {
    this.setState({
      passwordReg: value
    });
  }
  goLogin() {
    this.emailReg.clear();
    this.passReg.clear();
    this.setState({
      isEmailRegisterErr: false,
      isShowReg: false
    });
  }
  goRegister() {
    this.email.clear();
    this.pass.clear();
    this.setState({
      isEmailLoginErr: false,
      isShowReg: true
    });
  }
  toast() {
    Toast.show({
      text: "Wrong password!",
      position: "bottom",
      buttonText: "Okay",
      type: "danger",
      duration: 5000
    });
  }
  _renderLogin() {
    return (
      <View style={styles.form}>
        <Item error={this.state.isEmailLoginErr} style={styles.input}>
          <Icon
            name="ios-mail-outline"
            fontSize={27}
            style={{ marginLeft: "10%" }}
          />
          <TextInput
            placeholder="Nhập Email"
            style={{ width: "60%", marginLeft: "5%" }}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={this.inputEmail.bind(this)}
            onChange={() => this.setState({ isEmailLoginErr: false })}
            onEndEditing={this.validateEmail.bind(this)}
            ref={v => (this.email = v)}
          />
          {this.state.isEmailLoginErr ? (
            <Icon
              name="ios-alert-outline"
              style={{ fontSize: 22, color: "red" }}
            />
          ) : (
            undefined
          )}
        </Item>
        <Item style={[styles.input, { marginTop: "8%" }]}>
          <Icon
            name="ios-lock-outline"
            fontSize={27}
            style={{ marginLeft: "10%" }}
          />
          <TextInput
            placeholder="Nhập password"
            secureTextEntry
            style={{ width: "60%", marginLeft: "5%" }}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={this.inputPassword.bind(this)}
            ref={v => (this.pass = v)}
          />
        </Item>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={this.postLogin.bind(this)}
        >
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>

        <View style={styles.linkText}>
          <Text style={styles.text} onPress={this.goRegister.bind(this)}>
            {" "}
            Đăng ký{" "}
          </Text>
        </View>
      </View>
    );
  }
  postLogin() {
    if (
      this.state.isEmailLoginErr === false &&
      (this.state.email.length === 0 || this.state.email === "") &&
      (this.state.password.length === 0 || this.state.password === "")
    ) {
      return;
    }
    this.props.login(this.state.email.toLowerCase(), this.state.password);
  }

  postRegister() {
    if (
      this.state.isEmailRegisterErr === false &&
      (this.state.emaiReg.length === 0 || this.state.emaiReg === "") &&
      (this.state.passwordReg.length === 0 || this.state.passwordReg === "")
    ) {
      return;
    }
    this.props.register(this.state.emaiReg, this.state.passwordReg);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.error !==null) {
      Toast.show({
        text: nextProps.auth.error.message,
        position: "bottom",
        duration: 5000,
        type: "danger",
        buttonText: "OK"
      });
    }
  }
  _renderRegister() {
    return (
      <View style={styles.form}>
        <Item error={this.state.isEmailRegisterErr} style={styles.input}>
          <Icon
            name="ios-mail-outline"
            fontSize={27}
            style={{ marginLeft: "10%" }}
          />
          <TextInput
            placeholder="Nhập Email"
            style={{ width: "60%", marginLeft: "5%" }}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={this.inputEmailRegister.bind(this)}
            onChange={() => this.setState({ isEmailRegisterErr: false })}
            onEndEditing={this.validateEmailRegister.bind(this)}
            ref={v => (this.emailReg = v)}
          />
          {this.state.isEmailRegisterErr ? (
            <Icon
              name="ios-alert-outline"
              style={{ fontSize: 22, color: "red" }}
            />
          ) : (
            undefined
          )}
        </Item>
        <Item style={[styles.input, { marginTop: "8%" }]}>
          <Icon
            name="ios-lock-outline"
            fontSize={27}
            style={{ marginLeft: "10%" }}
          />
          <TextInput
            placeholder="Nhập password"
            secureTextEntry
            style={{ width: "60%", marginLeft: "5%" }}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={this.inputPasswordReg.bind(this)}
            ref={v => (this.passReg = v)}
          />
        </Item>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={this.postRegister.bind(this)}
        >
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
            Đăng ký
          </Text>
        </TouchableOpacity>

        <View style={styles.linkText}>
          <Text style={styles.text} onPress={this.goLogin.bind(this)}>
            Đăng nhập
          </Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.logoContainer}>
          {/*<Image source={require("../../../assets/images/logo.png")} />*/}
        </View>
        <View style={styles.formConainer}>
          {this.state.isShowReg ? this._renderRegister() : this._renderLogin()}
        </View>
      </View>
    );
  }
}
export default connect(
  state => ({
    auth: state.auth
  }),
  {
    login,
    register
  }
)(Auth);

const styles = {
  root: {
    flex: 1,
    backgroundColor: "rgba(255,121,14,0.8)"
  },
  logoContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  formConainer: {
    flex: 0.6,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  form: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: "85%"
  },
  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderColor: "#FF790E",
    opacity: 0.7,
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 30,
    alignItems: "center"
  },
  btnLogin: {
    backgroundColor: "#FF5858",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%"
  },
  linkText: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%"
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    textDecorationLine: "underline"
  }
};
