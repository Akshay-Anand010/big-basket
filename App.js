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
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/AntDesign";
import TabNavigator from "./screens/bottomnavigator";
import Icon2 from "react-native-vector-icons/AntDesign";
import profile from "./screens/profile";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menuOpen: {
    marginLeft: 14,
    marginTop: 10,
    color: "#fff",
  },
  menuClose: {
    marginLeft: 14,
    marginTop: 10,
    color: "#fff",
  },
  image: {
    width: 30,
    height: 30,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 10,
  },
  aon: {
    color: "#fff",
    marginRight: 10,
  },
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      drawerIcon: () => <Ionicons name="ios-home" size={20} />,

      headerRight: (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("profile");
          }}
        >
          <Icon
            style={[{ color: "#fff", marginRight: 10 }]}
            size={35}
            name={"ios-camera"}
          />
        </TouchableOpacity>
      ),
    }),
  },
  Profile: {
    screen: profile,
    navigationOptions: ({ navigation }) => ({
      title: "Profile Screen",
      drawerLabel: "Profile",
      drawerIcon: () => <Ionicons name="ios-person" size={20} />,
    }),
  },
  Settings: {
    screen: profile,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Assistant",
      drawerIcon: () => <Ionicons name="ios-chatbubbles" size={20} />,
    }),
  },
  share: {
    screen: profile,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "share App",
      drawerIcon: () => <Icon1 name="sharealt" size={20} />,
    }),
  },
});

const StackNavigator = createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,

    navigationOptions: ({ navigation }) => {
      const { state } = navigation;

      if (state.isDrawerOpen) {
        return {
          title: "Big Basket",
          backgroundColor: "#fff",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#00b300",
          },
          headerLeft: ({ titleStyle }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            >
              <Ionicons
                name="ios-close"
                style={styles.menuClose}
                size={36}
                color={titleStyle}
              />
            </TouchableOpacity>
          ),
          headerRight: (
            <TouchableOpacity>
              <Icon2 name="shoppingcart" size={30} style={styles.aon} />
            </TouchableOpacity>
          ),
        };
      } else {
        return {
          title: "Big Basket",
          backgroundColor: "#fff",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#00b300",
          },
          headerLeft: ({ titleStyle }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            >
              <Ionicons
                name="ios-menu"
                style={styles.menuOpen}
                size={32}
                color={titleStyle}
              />
            </TouchableOpacity>
          ),
          headerRight: (
            <TouchableOpacity>
              <Icon1 name="shoppingcart" size={30} style={styles.aon} />
            </TouchableOpacity>
          ),
        };
      }
    },
  },
  profile: {
    screen: profile,
  },
  Details: {
    screen: profile,
  },
});

const AppContainer = createAppContainer(StackNavigator);
