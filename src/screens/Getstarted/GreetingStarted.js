import React, { Component } from "react";
import { Platform, View, StatusBar, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Grid,
  Col,
  Row
} from "native-base";
import { IndicatorViewPager, PagerDotIndicator } from "rn-viewpager";

import CardGradient from "./components/CardGradient";

class GreetingStarted extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Col>
            <Row size={1.5} style={styles.logan}>
              <Text style={{ fontSize: 32, fontWeight: "500" }}>
                Wellcome to ChatApp
              </Text>
              <Text note style={{ fontSize: 20 }}>
                Version 1.0.0
              </Text>
            </Row>
            <Row size={6} style={styles.contentContainer}>
              <IndicatorViewPager
                style={{ height: 360, width: "100%" }}
                indicator={this._renderDotIndicator()}
              >
                <View style={styles.itemSwiper}>
                  <CardGradient
                    colors={["#FBC2EB", "#A18CD1"]}
                    titleText={"Easy Start"}
                    contentText={[
                      "Talk to people and",
                      "create your own",
                      "chanels."
                    ]}
                    bottomText={"Learn More"}
                  />
                </View>
                <View style={styles.itemSwiper}>
                  <CardGradient
                    colors={["#8FD3F4", "#84FAB0"]}
                    titleText={"Easy Start"}
                    contentText={[
                      "Talk to people and",
                      "create your own",
                      "chanels."
                    ]}
                    bottomText={"Learn More"}
                  />
                </View>
                <View style={styles.itemSwiper}>
                  <CardGradient
                    colors={["#FE9A8B", "#FD868C", "#F9748F", "#F78CA0"]}
                    titleText={"Easy Start"}
                    contentText={[
                      "Talk to people and",
                      "create your own",
                      "chanels."
                    ]}
                    bottomText={"Learn More"}
                  />
                </View>
              </IndicatorViewPager>
            </Row>
            <Row size={2.5} style={styles.bottomContainer}>
              <TouchableOpacity style={styles.btnBottom}>
                <Text style={styles.btnText}>Get Started</Text>
              </TouchableOpacity>
            </Row>
          </Col>
        </Grid>
      </Container>
    );
  }
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }
}
export default GreetingStarted;
const styles = {
  header: { backgroundColor: "transparent", borderBottomWidth: 0 },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  logan: {
    flexDirection: "column",
    // backgroundColor:"green",
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: 60
      },
      android: {
        paddingTop: 20
      }
    })
  },
  contentContainer: {
    justifyContent: "center",
    flexDirection: "column"
  },
  itemSwiper: {
    alignItems: "center"
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  btnBottom: {
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    height: 50,
    backgroundColor: "#157CF8",
    borderRadius: 10
  },
  btnText: { color: "#FFF", fontWeight: "500" }
};
