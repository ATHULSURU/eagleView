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
// import Header from "./components/Header";
import Messages from "./components/Messages";
import TextBox from "./components/TextBox";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import twilio from "twilio";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'rgb(6, 58, 103)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Chat With Agent"
          onPress={() => {
            /* 1. Navigate to the Details froute with params */
            this.props.navigation.navigate('Chat', {
              itemId: 86,
              otherParam: 'INSPECTOR',
            });
          }}
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  // TokenGenerator(identity, deviceId) {
  //     const appName = 'TwilioChat';
  //     // Alert.alert("Heeeeyyyyiii")

  //     // Create a unique ID for the client on their current device
  //     const endpointId = appName + ':' + identity + ':' + deviceId;

  //     // Create a "grant" which enables a client to use Chat as a given user,
  //     // on a given device
  //     const chatGrant = new ChatGrant({
  //       serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
  //       endpointId: endpointId,
  //     });

  //     // Create an access token which we will sign and return to the client,
  //     // containing the grant we just created
  //     const token = new AccessToken(
  //       process.env.TWILIO_ACCOUNT_SID,
  //       process.env.TWILIO_API_KEY,
  //       process.env.TWILIO_API_SECRET
  //     );

  //     token.addGrant(chatGrant);
  //     token.identity = identity;

  //     return token;
  // }

  addNewTodo(){
    // const twilio = require('twilio');

    // const AccessToken = twilio.jwt.AccessToken;
    // const ChatGrant = AccessToken.ChatGrant;

    // this.TokenGenerator();

    
     fetch('https://jsonplaceholder.typicode.com/posts/1', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
  }

  render() {
    return (
         <View style={styles.MainContainer}>
      {/* {statusbar} */}
        {/* <Header title={this.state.Name} /> */}
        <Messages />
        <TextBox
          textChange={textInput => this.setState({textInput})}
          addNewTodo={() => this.addNewTodo()}
        />      
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  statusBar:{
     backgroundColor: 'lightgray',
     height:'4%'
  },

  MainContainer: {
    flex: 1
  },
  bottomView: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },
  input: {
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    flex: 1,
    fontSize: 20,
    height: 45,
    padding: 10,
    marginLeft: 10
  },
  inputContainer: {
    flexDirection: "column",
    marginTop: 10,
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1
  },
  addButton: {
    width: 100,
    backgroundColor: "#165e54",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    height: 40
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  }
});