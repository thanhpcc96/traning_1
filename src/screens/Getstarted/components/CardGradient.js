import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Card = ({ colors, titleText, contentText, bottomText }) => {
  return (
    <View style={styles.card}>
      <LinearGradient colors={colors} style={styles.card2}>
        <View style={styles.cardHeader}>
          <Text style={styles.textHeader}>{titleText}</Text>
        </View>
        <View style={styles.containerContent}>
          {contentText.map((value, i) => {
            return (
              <Text key={i} style={styles.itemText}>
                {value}
              </Text>
            );
          })}
        </View>
        <View style={styles.bottomCard}>
          <Text>{bottomText}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;

const styles = {
  card: {
    marginTop: 10,
    width: "75%",
    height: 320,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: "grey",
        shadowRadius: 5,
        shadowOffset: {
          width: 2,
          height: 10
        },
        shadowOpacity: 0.7
      },
      android: {
        elevation: 4
      }
    })
  },
  card2: {
    paddingTop: 5,
    height: 320,
    borderRadius: 12
  },
  cardHeader: {
    height: 60,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingLeft: "5%"
  },
  textHeader: {
    color: "#F0F0F1",
    fontSize: 25,
    fontWeight: "300"
  },
  containerContent: {
    height: 210,
    backgroundColor: "transparent",
    paddingLeft: "5%"
  },
  itemText: {
    color: "#FFF",
    fontSize: 27,
    fontWeight: "600"
  },
  bottomCard: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  }
};
