import React from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Provider from './context/Provider';
import {AdMobBanner} from 'react-native-admob';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  FirstScreen,
  HomeScreen,
  SettingsScreen,
  FinishScreen,
  SolveaQuestion,
  SSS,
  SubjectStudy,
  TrafficSigns,
  SubjectScreen,
  TrafficScreenThree,
  TrafficScreenFour,
  TrafficScreenFive,
  TrafficScreenTwo,
  TrafficScreen,
} from './screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  containerAd: {
    width: '100%',
    alignItems: 'center',
  },
});

const Router = () => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Soru Çöz"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Soru Çöz') {
              iconName = focused
                ? 'book-open-page-variant'
                : 'book-open-page-variant';
            } else if (route.name === 'SSS') {
              iconName = focused ? 'head-question' : 'head-question-outline';
            } else if (route.name === 'SubjectStudy') {
              iconName = focused ? 'book-account' : 'book-account-outline';
            } else if (route.name === 'Trafik İşaretleri') {
              iconName = focused ? 'traffic-cone' : 'traffic-cone';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons name={iconName} size={25} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Soru Çöz" component={SolveaQuestion} options={{}} />
        <Tab.Screen name="SSS" component={SSS} />
        <Tab.Screen name="SubjectStudy" component={SubjectStudy} />
        <Tab.Screen name="Trafik İşaretleri" component={TrafficSigns} />
      </Tab.Navigator>
    );
  };
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Soru Çöz"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerTintColor: 'tomato',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitleStyle: {
                fontWeight: 'bold',
                marginHorizontal: 3,
              },
              title: 'Sınav',
            }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FinishScreen"
            component={FinishScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SubjectScreen"
            component={SubjectScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tehlike Uyari İşaretleri"
            component={TrafficScreen}
            options={{
              headerTintColor: 'tomato',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitle: 'Geri',
              headerBackTitleStyle: {
                fontWeight: 'bold',
              },
              title: 'Tehlike Uyari İşaretleri',
            }}
          />
          <Stack.Screen
            name="TrafficScreenTwo"
            component={TrafficScreenTwo}
            options={{
              headerTintColor: 'tomato',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitle: 'Geri',
              headerBackTitleStyle: {
                fontWeight: 'bold',
              },
              title: 'Trafik Tanzim İşaretleri',
            }}
          />
          <Stack.Screen
            name="TrafficScreenThree"
            component={TrafficScreenThree}
            options={{
              headerTintColor: 'tomato',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitle: 'Geri',
              headerBackTitleStyle: {
                fontWeight: 'bold',
              },
              title: 'Trafik Bilgi İşaretleri',
            }}
          />
          <Stack.Screen
            name="TrafficScreenFour"
            component={TrafficScreenFour}
            options={{
              headerTintColor: 'tomato',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitle: 'Geri',
              headerBackTitleStyle: {
                fontWeight: 'bold',
              },
              title: 'Durma ve Park Etme İşaretleri',
            }}
          />
          <Stack.Screen
            name="TrafficScreenFive"
            component={TrafficScreenFive}
            options={{
              headerTintColor: 'tomato',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitle: 'Geri',
              headerBackTitleStyle: {
                fontWeight: 'bold',
              },
              title: 'Yatay İşaretleme',
            }}
          />
        </Stack.Navigator>
        <View style={{alignItems: 'center'}}>
          <AdMobBanner
            adSize="smartBannerPortrait"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
