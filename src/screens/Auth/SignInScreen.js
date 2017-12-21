import React, { Component } from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
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
  Input
} from "native-base";
import HeaderCustom from "../../common/Header";

class SignIn extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <HeaderCustom
          left={
            <Left style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="ios-arrow-back" />
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
                {" "}
                Sign In
              </Text>
            </Left>
          }
        />

        <Grid>
          <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
            <Row size={4} style={styles.LogoContainer}>
              <Image source={require("../../../assets/img/logo.png")} />
              <Text style={{ marginTop: 10, fontSize: 25 }}>
                Wellcome home mate!
              </Text>
            </Row>

            <Row size={4} style={styles.formController}>
              <View style={[styles.formControl, { marginTop: 15 }]}>
                <Text style={{ height: 15 }} note>
                  YOUR EMAIL
                </Text>
                <Input
                  style={{ height: 40, fontSize: 20, fontWeight: "300" }}
                  placeholderTextColor="#D5D5D5"
                  placeholder="name@domain.com"
                />
              </View>
              <View style={[styles.formControl, { marginBottom: 15 }]}>
                <Text style={{ height: 15 }} note>
                  YOUR PASSWORD
                </Text>
                <Input
                  style={{ height: 40, fontSize: 20, fontWeight: "300" }}
                  placeholder="Min 8 symbols"
                  placeholderTextColor="#D5D5D5"
                />
              </View>
            </Row>

            <Row size={2} style={{ flexDirection: "column" }}>
              <Row
                size={5}
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity style={styles.btnStartMessage}>
                  <Text style={{ color: "#FFF", fontWeight: "600" }}>
                    Start Message
                  </Text>
                </TouchableOpacity>
              </Row>
              <Row size={5} style={{ justifyContent: "center" }}>
                <Text style={{ color: "#6F6F6F", marginTop: 10 }}>
                  Forgot password?{" "}
                </Text>
                <Text style={{ color: "#157CF8", marginTop: 10 }}>Reset.</Text>
              </Row>
            </Row>
          </KeyboardAvoidingView>
        </Grid>
      </Container>
    );
  }
}
export default SignIn;
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
  }
};
