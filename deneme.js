import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music', color: '#3F51B5' },
    { key: 'albums', title: 'Albums', icon: 'album', color: '#009688' },
    { key: 'recents', title: 'Recents', icon: 'history', color: '#795548' },
    { key: 'purchased', title: 'Purchased', icon: 'shopping-cart', color: '#607D8B' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;










<NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containerAd}>
          <AdMobBanner
            adSize="smartBannerPortrait"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
          />
        </View>
        <Tab.Navigator
          activeColor="#fff"
          >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            shifting = {true}
            labeled={true}
            options={{
              tabBarColor: '#db2580',
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            shifting = {true}
            labeled={true}
            options={{
              tabBarColor: '#25d5db',
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="cogs" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>







import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {AdMobBanner} from 'react-native-admob';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation, Text } from 'react-native-paper';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();





function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
    { key: 'settings', title: 'Settings', icon: 'cog-outline', color: '#009688' },
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    settings: SettingsScreen,
    
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />
  );
}

export default App;

const styles = StyleSheet.create({
  containerAd: {
    width: '100%',
    alignItems: 'center',
  },
});




<View style={{alignItems: 'center'}}>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </View>








{
  "id": 41,
  "imgQuestion": "https://ehliyetsinavihazirlik.com/images/20-mayis-2017/31.gif",
  "imgQuestionText": "Şekildeki kazada hangi numaralı araç sürücüsü asli kusurlu sayılır?",
  "imgCevap": [
    {"img": "https://www.61saat.com/images/haberler/2019/08/internet_uzerinden_sahibinden_araba_ilani_nasil_verilir_h666524_78224.png", "correct": true},
    {"img": "https://www.61saat.com/images/haberler/2019/08/internet_uzerinden_sahibinden_araba_ilani_nasil_verilir_h666524_78224.png", "correct": false},
    {"img": "https://www.61saat.com/images/haberler/2019/08/internet_uzerinden_sahibinden_araba_ilani_nasil_verilir_h666524_78224.png", "correct": false},
    {"img": "https://www.61saat.com/images/haberler/2019/08/internet_uzerinden_sahibinden_araba_ilani_nasil_verilir_h666524_78224.png", "correct": false}
  ]
},
{
  "id": 39,
  "question": "Gabari, araçların yüklü veya yüksüz uzunluk, genişlik ve yüksekliklerini belirleyen ölçülerdir. Buna göre hangisi yükseklik anlamında gabari sınırlamasının olduğunu bildirir?",
  "imgCevap": [
    {"img": "https://ehliyetsinavihazirlik.com/images/10sinav20/soru46a.png", "correct": true},
    {"img": "https://ehliyetsinavihazirlik.com/images/10sinav20/soru46b.png", "correct": false},
    {"img": "https://ehliyetsinavihazirlik.com/images/10sinav20/soru46c.png", "correct": false},
    {"img": "https://ehliyetsinavihazirlik.com/images/10sinav20/soru46d.png", "correct": false}
  ]
},
{
  "id": 40,
  "question": "Ekstra bir durum söz konusu değilse aşağıdakilerden hangisi en doğru suni solunum pozisyonudur?",
  "imgCevap": [
    {"img": "https://ehliyetsinavihazirlik.com/images/deneme/soru%20(35).png", "correct": true},
    {"img": "https://ehliyetsinavihazirlik.com/images/deneme/soru%20(36).png", "correct": false},
    {"img": "https://ehliyetsinavihazirlik.com/images/deneme/soru%20(37).png", "correct": false},
    {"img": "https://ehliyetsinavihazirlik.com/images/deneme/soru%20(38).png", "correct": false}
  ]
}
