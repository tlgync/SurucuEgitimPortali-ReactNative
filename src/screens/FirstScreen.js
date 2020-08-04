import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image
} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      
    
    </SafeAreaView>
  );
};
export {FirstScreen};

const styles = StyleSheet.create({
  H1: {
    fontFamily: 'Roboto-Black',
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  H2: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  btn: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.1,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#3F51B5',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  stretch: {
    width: 128,
    height: 128
  }
});
