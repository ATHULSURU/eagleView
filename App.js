import React from "react";
import {
  View,
  StyleSheet,
  Alert,
  TextInput,
  Text,
  Button,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import ChatScreen from "./components/ChatScreen";
import HomeScreen from "./components/HomeScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import twilio from "twilio";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  state = {
    title: "data"
  };
  render() {
    return <AppContainer title={this.state.title} />;
  }
}
