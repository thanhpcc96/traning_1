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
class ForgotScreen extends Component {
  static navigationOptions= {
    header: null
  }
  render() {
    return (
      <Container style={{backgroundColor: "#FFF"}}>
        <HeaderCustom
          left={
            <Left style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="ios-arrow-back" onPress={()=> this.props.navigation.goBack()}/>
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
                Password Reset
              </Text>
            </Left>
          }
        />
        <Content contentContainerStyle={{ flex: 1 }}>
          <Grid>
            <Row size={5} style={{ flexDirection: "column" }}>
              <Row size={2} style={styles.logan}>
                <Text style={{ color: "#6F6F6F" }}>
                  To reset your password, enter the email
                </Text>
                <Text style={{ color: "#6F6F6F" }}>
                  address you use to sign in to APP
                </Text>
              </Row>
              <Row
                size={2}
                style={{
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
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
              </Row>
              <Row size={1} />
              <Row size={2} style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={{ color: "#FFF", fontSize: 20 }}>
                    {" "}
                    Reset my password
                  </Text>
                </TouchableOpacity>
              </Row>
            </Row>
            <Row size={3} />
          </Grid>
        </Content>
      </Container>
    );
  }
}
export default ForgotScreen;
const styles = {
  logan: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "5%"
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
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#157CF8",
    borderRadius: 8
  }
};
