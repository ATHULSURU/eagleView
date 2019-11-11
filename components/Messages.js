import React, { Component } from "react";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages: "",
      date: ""
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
      date: date + "/" + month + "/" + year,
      messages: "Welcome to Eagle View chat"
    });
  }

  render(props) {
    return (
      <ScrollView behaviour="height">
        <View style={styles.chatinterface}>
          <View style={[styles.sender]}>
            <View style={styles.talkBubbleTriangle} />
            <View>
              <Text style={[styles.textSend]}>Welcome to Eagle View</Text>
              <Text style={styles.timer}> 09:00 </Text>
            </View>
          </View>

          <View style={styles.receiver}>
            <View style={styles.talkBubbleTriangleRight} />
            <View>
              <Text style={[styles.textSend]}>Hi</Text>
              <Text style={styles.timer}> 09:01 </Text>
            </View>
          </View>

          <View style={[styles.sender]}>
            <View style={styles.talkBubbleTriangle} />
            <View>
              <Text style={[styles.textSend]}>Hi, ATHUL </Text>
              <Text style={styles.timer}> 09:02 </Text>
            </View>
          </View>
          <View style={[styles.receiver]}>
            <View style={styles.talkBubbleTriangleRight} />
            <View>
              <Text style={[styles.textSend]}>
                I have an issue with my last order
              </Text>
              <Text style={styles.timer}> 09:04 </Text>
            </View>
          </View>

          <View style={[styles.sender]}>
            <View style={styles.talkBubbleTriangle} />
            <View>
              <Text style={[styles.textSend]}> what issue ?</Text>
              <Text style={styles.timer}> 09:07 </Text>
            </View>
          </View>
          <View style={[styles.receiver]}>
            <View style={styles.talkBubbleTriangleRight} />
            <View>
              <Text style={[styles.textSend]}>
                {" "}
                I ordered three items but i got only two{" "}
              </Text>
              <Text style={styles.timer}> 09:07 </Text>
            </View>
          </View>

          <View style={[styles.sender]}>
            <View style={styles.talkBubbleTriangle} />
            <View>
              <Text style={[styles.textSend]}>Sorry for inconvenience </Text>
              <Text style={styles.timer}> 09:07 </Text>
            </View>
          </View>
          <View style={[styles.sender]}>
            <View style={styles.talkBubbleTriangle} />
            <View>
              <Text style={[styles.textSend]}>
                {" "}
                let me check your last order
              </Text>
              <Text style={styles.timer}> 09:08 </Text>
            </View>
          </View>

          <View style={[styles.receiver]}>
            <View style={styles.talkBubbleTriangleRight} />
            <View>
              <Text style={[styles.textSend]}>Thanks!</Text>
              <Text style={styles.timer}> 09:10 </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: 10,
              width: 100,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: "#d2cece"
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                borderRadius: 10,
                color: "black"
              }}
            >
              {this.state.date}
            </Text>
          </View>
          <View style={[styles.sender]}>
            <View style={styles.talkBubbleTriangle} />
            <View>
              <Text style={[styles.textSend]}>{this.state.messages}</Text>
              <Text style={styles.timer}> 01:00 </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Messages;

const styles = StyleSheet.create({
  chatinterface: {
    flexDirection: "column",
    alignSelf: "auto",
    backgroundColor: "#e8e8e8"
    // marginBottom: '14%',
  },
  sender: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 60
  },
  textSend: {
    fontSize: 15
  },
  receiver: {
    alignSelf: "flex-end",
    flexDirection: "column",
    //backgroundColor: '#b6d493',
    backgroundColor: "rgb(163, 200, 232)",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 60
  },
  talkBubbleTriangle: {
    position: "absolute",
    left: -15,
    top: 26,
    width: 0,
    height: 0,
    borderTopColor: "transparent",
    borderTopWidth: 10,
    borderRightWidth: 26,
    borderRightColor: "white",
    borderBottomWidth: 13,
    borderBottomColor: "transparent"
  },
  talkBubbleTriangleRight: {
    position: "absolute",
    right: -15,
    top: 26,
    width: 0,
    height: 0,
    borderTopColor: "transparent",
    borderTopWidth: 10,
    borderRightWidth: 26,
    // borderRightColor: '#b6d493',
    borderRightColor: "rgb(163, 200, 232)",
    borderBottomWidth: 13,
    borderBottomColor: "transparent",
    transform: [{ rotate: "180deg" }]
  },
  timer: {
    fontSize: 12,
    color: "gray",
    alignSelf: "flex-end",
    marginLeft: 50,
    left: 20
  }
});
