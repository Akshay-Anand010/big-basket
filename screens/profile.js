import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";

export default class profile extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <Image source={require("../assets/icon.png")} style={styles.img} />
        <View style={styles.new}>
          <Text style={styles.te}>
            Established in 2017,Trio india is a Bengaluru based startup which
            aims to redifine the user experience in technology.This app is a
            product of that very trend. The prediction results comply with a
            larger dataset publicly availalable on kaggle .To Check for Housing
            predictions on web please visit{" "}
          </Text>
          <Text
            style={styles.TextStyle}
            onPress={() =>
              Linking.openURL("https://housing-price-india.herokuapp.com")
            }
          >
            here
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  te: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "sans-serif-thin",
  },
  cont: {
    flex: 1,

    marginTop: 10,
    textAlign: "center",
  },
  new: {
    height: 300,
    padding: 10,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ebebe0",
    borderRadius: 5,
    borderColor: "#ccccb3",
    borderWidth: 5,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});
