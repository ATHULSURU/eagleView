import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header=(props)=>{
    return(
        <View style={styles.container}>
        <View ><Text style={styles.backButton}>back</Text></View>
        <View style={styles.circle} />
        <Text style={styles.channels}>Channels:</Text>
        <Text style={styles.title}>
        ({props.title})
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     flexDirection:'row',
      width: '100%', 
      height: 60, 
      // backgroundColor: '#165e54', 
      backgroundColor:'rgb(6, 58, 103)',
      justifyContent: 'center', 
      alignItems: 'center',
    },

    title:{
      color:'#fff',
      marginRight:'20%',
      fontSize:13,
      fontWeight:'900',
      textTransform:'uppercase'
    },

    circle: {
      width: 40,
      height: 40,
      borderRadius: 40/2,
      // backgroundColor: 'lightgreen',
      backgroundColor:'rgb(163, 200, 232)',
      marginRight:50
    },
    backButton:{
      marginRight:10,
      color:"white"
    },
    channels:{
      color:'#fff',
      fontSize:15,
      fontWeight:'900'
    }
});

export default Header