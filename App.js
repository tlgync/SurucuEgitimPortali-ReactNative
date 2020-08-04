import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';


import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

const App=()=> {
  return (
    <NavigationContainer>
    <SafeAreaView style={{flex:1}}>
        <View style={styles.containerAd}>
        
        </View>
        
      </SafeAreaView>      
      </NavigationContainer>
      
  );
}

export default App;

const styles = StyleSheet.create({
  containerAd:{
    width: '100%',
    alignItems: 'center'
  }
});