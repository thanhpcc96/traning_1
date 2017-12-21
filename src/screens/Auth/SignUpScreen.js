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

class SignUpScreen extends Component {
  render() {
    return (
      <Container>
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
          <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
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
                  />
                </View>
              </Row>
              <Row size={2} style={styles.formGroup}>
                <View style={styles.formControl}>
                  <Text style={{ height: 15 }} note>
                    YOUR EMAIL
                  </Text>
                  <Input
                    style={styles.inputText}
                    placeholderTextColor="#D5D5D5"
                    placeholder="name@domain.com"
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={{ height: 15 }} note>
                    USERNAME
                  </Text>
                  <Input
                    style={styles.inputText}
                    placeholderTextColor="#D5D5D5"
                    placeholder="@yourusername"
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={{ height: 15 }} note>
                    CREATE PASSWORD
                  </Text>
                  <Input
                    style={styles.inputText}
                    placeholderTextColor="#D5D5D5"
                    placeholder="Min 8 symbols"
                    secureTextEntry
                  />
                </View>
              </Row>
            </Row>
            <Row size={1} style={{ flexDirection: "column" }}>
              <Row size={2} style={styles.btnContainer}>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: "#157CF8" }]}
                >
                  <Text style={{ color: "#FFF", fontWeight: "500" }}>
                    {" "}
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
                  Already have an account?{" "}
                </Text>
                <Text style={{ color: "#157CF8", marginTop: 10 }}>Sign in</Text>
              </Row>
            </Row>
          </KeyboardAvoidingView>
        </Grid>
      </Container>
    );
  }
}
export default SignUpScreen;
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
  }
};
