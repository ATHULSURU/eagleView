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
import Messages from "./Messages";
import TextBox from "./TextBox";


export default class ChatScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      date: '',
    };
  }
 componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", "A Nested Details Screen"),
      headerStyle: {
        backgroundColor: "rgb(6, 58, 103)"
      },
      headerTintColor: "#fff"
    };
  };

  addNewTodo() {
    Alert.alert(this.state.textInput);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Messages data={this.state.date}/>
        <TextBox
          textChange={textInput => this.setState({ textInput })}
          addNewTodo={() => this.addNewTodo()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "lightgray",
    height: "4%"
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
