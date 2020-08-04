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
    title: {uri:"http://baston.store/durmaveparketmeisaretleri/1.png"},
  },
  {
    id: '2',
    title: {uri:"http://baston.store/durmaveparketmeisaretleri/2.png"},
  },
  {
    id: '3',
    title: {uri:"http://baston.store/durmaveparketmeisaretleri/3.png"},
  },
  {
    id: '4',
    title: {uri:"http://baston.store/durmaveparketmeisaretleri/4.png"},
  },
  {
    id: '5',
    title: {uri:"http://baston.store/durmaveparketmeisaretleri/5.png"},
  },
  {
    id: '6',
    title: {uri:"http://baston.store/durmaveparketmeisaretleri/6.png"},
  },
  {
    id: '7',
    title: {uri:"http://baston.store/durmaveparketmeisaretleri/7.png"},
  },


];

const TrafficScreenFour = () => {
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

export {TrafficScreenFour};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 178,
    height: 178,
    marginHorizontal: 5,
    marginVertical: 5,
    resizeMode: 'stretch',
  },
});
