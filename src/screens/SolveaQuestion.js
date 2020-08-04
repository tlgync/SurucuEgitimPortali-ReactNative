import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SolveaQuestion = props => {
  const getTest = () => {
    props.navigation.navigate('HomeScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={getTest}>
          <Text style={styles.text}>2020 Sınavv</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export {SolveaQuestion};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  btnContainer: {
    width:windowWidth,
    height: windowHeight,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 75,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'tomato',
    borderRadius: 5,
    width: windowWidth * 0.8,
    height: windowWidth * 0.1,
    justifyContent: 'center',
    textAlign: 'center',

  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto-Black',
    fontSize: 15,
    color: 'tomato',
    letterSpacing: 1.3
  },
});
