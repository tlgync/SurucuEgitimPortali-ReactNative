import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: {uri: 'http://baston.store/tehlikeUyari/1.png'},
  },
  {
    id: '2',
    title: {uri: 'http://baston.store/tehlikeUyari/2.png'},
  },
  {
    id: '3',
    title: {uri: 'http://baston.store/tehlikeUyari/3.png'},
  },
  {
    id: '4',
    title: {uri: 'http://baston.store/tehlikeUyari/4.png'},
  },
  {
    id: '5',
    title: {uri: 'http://baston.store/tehlikeUyari/5.png'},
  },
  {
    id: '6',
    title: {uri: 'http://baston.store/tehlikeUyari/6.png'},
  },
  {
    id: '7',
    title: {uri: 'http://baston.store/tehlikeUyari/7.png'},
  },
  {
    id: '8',
    title: {uri: 'http://baston.store/tehlikeUyari/8.png'},
  },
  {
    id: '9',
    title: {uri: 'http://baston.store/tehlikeUyari/9.png'},
  },
  {
    id: '10',
    title: {uri: 'http://baston.store/tehlikeUyari/10.png'},
  },
  {
    id: '11',
    title: {uri: 'http://baston.store/tehlikeUyari/11.png'},
  },
  {
    id: '12',
    title: {uri: 'http://baston.store/tehlikeUyari/12.png'},
  },
  {
    id: '13',
    title: {uri: 'http://baston.store/tehlikeUyari/13.png'},
  },
  {
    id: '14',
    title: {uri: 'http://baston.store/tehlikeUyari/14.png'},
  },
  {
    id: '15',
    title: {uri: 'http://baston.store/tehlikeUyari/15.png'},
  },
  {
    id: '16',
    title: {uri: 'http://baston.store/tehlikeUyari/16.png'},
  },
  {
    id: '17',
    title: {uri: 'http://baston.store/tehlikeUyari/17.png'},
  },
  {
    id: '18',
    title: {uri: 'http://baston.store/tehlikeUyari/18.png'},
  },
  {
    id: '19',
    title: {uri: 'http://baston.store/tehlikeUyari/19.png'},
  },
  {
    id: '20',
    title: {uri: 'http://baston.store/tehlikeUyari/20.png'},
  },
  {
    id: '21',
    title: {uri: 'http://baston.store/tehlikeUyari/21.png'},
  },
  {
    id: '22',
    title: {uri: 'http://baston.store/tehlikeUyari/22.png'},
  },
  {
    id: '23',
    title: {uri: 'http://baston.store/tehlikeUyari/23.png'},
  },
  {
    id: '24',
    title: {uri: 'http://baston.store/tehlikeUyari/24.png'},
  },
  {
    id: '25',
    title: {uri: 'http://baston.store/tehlikeUyari/25.png'},
  },
  {
    id: '26',
    title: {uri: 'http://baston.store/tehlikeUyari/26.png'},
  },
  {
    id: '27',
    title: {uri: 'http://baston.store/tehlikeUyari/27.png'},
  },
  {
    id: '28',
    title: {uri: 'http://baston.store/tehlikeUyari/28.png'},
  },
  {
    id: '29',
    title: {uri: 'http://baston.store/tehlikeUyari/29.png'},
  },
  {
    id: '30',
    title: {uri: 'http://baston.store/tehlikeUyari/30.png'},
  },
  {
    id: '31',
    title: {uri: 'http://baston.store/tehlikeUyari/31.png'},
  },
  {
    id: '32',
    title: {uri: 'http://baston.store/tehlikeUyari/32.png'},
  },
  {
    id: '33',
    title: {uri: 'http://baston.store/tehlikeUyari/33.png'},
  },
  {
    id: '34',
    title: {uri: 'http://baston.store/tehlikeUyari/34.png'},
  },
  {
    id: '35',
    title: {uri: 'http://baston.store/tehlikeUyari/35.png'},
  },
  {
    id: '36',
    title: {uri: 'http://baston.store/tehlikeUyari/36.png'},
  },
  {
    id: '37',
    title: {uri: 'http://baston.store/tehlikeUyari/37.png'},
  },
  {
    id: '38',
    title: {uri: 'http://baston.store/tehlikeUyari/38.png'},
  },
  {
    id: '39',
    title: {uri: 'http://baston.store/tehlikeUyari/39.png'},
  },
  {
    id: '40',
    title: {uri: 'http://baston.store/tehlikeUyari/40.png'},
  },
  {
    id: '41',
    title: {uri: 'http://baston.store/tehlikeUyari/41.png'},
  },
  {
    id: '42',
    title: {uri: 'http://baston.store/tehlikeUyari/42.png'},
  },
  {
    id: '43',
    title: {uri: 'http://baston.store/tehlikeUyari/43.png'},
  },
  {
    id: '44',
    title: {uri: 'http://baston.store/tehlikeUyari/44.png'},
  },
  {
    id: '45',
    title: {uri: 'http://baston.store/tehlikeUyari/45.png'},
  },
  {
    id: '46',
    title: {uri: 'http://baston.store/tehlikeUyari/46.png'},
  },
  {
    id: '47',
    title: {uri: 'http://baston.store/tehlikeUyari/47.png'},
  },
  {
    id: '48',
    title: {uri: 'http://baston.store/tehlikeUyari/48.png'},
  },
  {
    id: '49',
    title: {uri: 'http://baston.store/tehlikeUyari/49.png'},
  },
  {
    id: '50',
    title: {uri: 'http://baston.store/tehlikeUyari/50.png'},
  },
  {
    id: '51',
    title: {uri: 'http://baston.store/tehlikeUyari/51.png'},
  },
  {
    id: '52',
    title: {uri: 'http://baston.store/tehlikeUyari/52.png'},
  },
];

const TrafficScreen = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={item.title} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <FlatList
        numColumns={3}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export {TrafficScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: 128,
    height: 128,
    marginHorizontal: 5,
    marginVertical: 5,
    resizeMode: 'stretch',
  },
});
