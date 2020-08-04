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
    title: {uri:"http://baston.store/yatayisaretleme/1.png"},
  },
  {
    id: '2',
    title: {uri:"http://baston.store/yatayisaretleme/2.png"},
  },
  {
    id: '3',
    title: {uri:"http://baston.store/yatayisaretleme/3.png"},
  },
  {
    id: '4',
    title: {uri:"http://baston.store/yatayisaretleme/4.png"},
  },
  {
    id: '5',
    title: {uri:"http://baston.store/yatayisaretleme/5.png"},
  },
  {
    id: '6',
    title: {uri:"http://baston.store/yatayisaretleme/6.png"},
  },
  {
    id: '7',
    title: {uri:"http://baston.store/yatayisaretleme/7.png"},
  },
  {
    id: '8',
    title: {uri:"http://baston.store/yatayisaretleme/8.png"},
  },
  {
    id: '9',
    title: {uri:"http://baston.store/yatayisaretleme/9.png"},
  },
  {
    id: '10',
    title: {uri:"http://baston.store/yatayisaretleme/10.png"},
  },
  {
    id: '11',
    title: {uri:"http://baston.store/yatayisaretleme/11.png"},
  },
  {
    id: '12',
    title: {uri:"http://baston.store/yatayisaretleme/12.png"},
  },
  {
    id: '13',
    title: {uri:"http://baston.store/yatayisaretleme/13.png"},
  },
  {
    id: '14',
    title: {uri:"http://baston.store/yatayisaretleme/14.png"},
  },
  {
    id: '15',
    title: {uri:"http://baston.store/yatayisaretleme/15.png"},
  },
  {
    id: '16',
    title: {uri:"http://baston.store/yatayisaretleme/16.png"},
  },
  {
    id: '17',
    title: {uri:"http://baston.store/yatayisaretleme/17.png"},
  },
  {
    id: '18',
    title: {uri:"http://baston.store/yatayisaretleme/18.png"},
  },
  {
    id: '19',
    title: {uri:"http://baston.store/yatayisaretleme/19.png"},
  },


];

const TrafficScreenFive = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image  style={styles.img} source={item.title} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      
        <FlatList
          numColumns={1}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      
    </SafeAreaView>
  );
};

export {TrafficScreenFive};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 170,
    height: 250,
    marginHorizontal: 5,
    marginVertical: 5,
    resizeMode: 'stretch',
  },
});
