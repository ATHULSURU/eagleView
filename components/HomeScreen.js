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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "rgb(6, 58, 103)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  handleMessage() {
    Alert.alert("Welcome to eagle View, chat with agent");
  }
  handleMessageI() {
    Alert.alert("Welcome to eagle View, chat with Inspector");
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Chat Screen</Text>
        <View style={{ margin: 10 }}>
          <Button
            title="Live Chat With Agent"
            onPress={() => {
              /* 1. Navigate to the Details froute with params */
              this.props.navigation.navigate("Chat", {
                itemId: 1,
                otherParam: "Agent"
              }),
                this.handleMessage();
            }}
          />
        </View>
        <View>
          <Button
            title="Live Chat With Inspector"
            onPress={() => {
              /* 1. Navigate to the Details froute with params */
              this.props.navigation.navigate("Chat", {
                itemId: 1,
                otherParam: "INSPECTOR"
              }),
                this.handleMessageI();
            }}
          />
        </View>
      </View>
    );
  }
}
