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
    title: {uri:"http://baston.store/trafiktanzimisaretleri/1.png"},
  },
  {
    id: '2',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/2.png"},
  },
  {
    id: '3',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/3.png"},
  },
  {
    id: '4',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/4.png"},
  },
  {
    id: '5',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/5.png"},
  },
  {
    id: '6',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/6.png"},
  },
  {
    id: '7',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/7.png"},
  },
  {
    id: '8',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/8.png"},
  },
  {
    id: '9',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/9.png"},
  },
  {
    id: '10',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/10.png"},
  },
  {
    id: '11',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/11.png"},
  },
  {
    id: '12',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/12.png"},
  },
  {
    id: '13',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/13.png"},
  },
  {
    id: '14',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/14.png"},
  },
  {
    id: '15',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/15.png"},
  },
  {
    id: '16',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/16.png"},
  },
  {
    id: '17',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/17.png"},
  },
  {
    id: '18',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/18.png"},
  },
  {
    id: '19',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/19.png"},
  },
  {
    id: '20',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/20.png"},
  },
  {
    id: '21',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/21.png"},
  },
  {
    id: '22',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/22.png"},
  },
  {
    id: '23',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/23.png"},
  },
  {
    id: '24',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/24.png"},
  },
  {
    id: '25',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/25.png"},
  },
  {
    id: '26',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/26.png"},
  },
  {
    id: '27',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/27.png"},
  },
  {
    id: '28',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/28.png"},
  },
  {
    id: '29',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/29.png"},
  },
  {
    id: '30',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/30.png"},
  },
  {
    id: '31',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/31.png"},
  },
  {
    id: '32',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/32.png"},
  },
  {
    id: '33',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/33.png"},
  },
  {
    id: '34',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/34.png"},
  },
  {
    id: '35',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/35.png"},
  },
  {
    id: '36',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/36.png"},
  },
  {
    id: '37',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/37.png"},
  },
  {
    id: '38',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/38.png"},
  },
  {
    id: '39',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/39.png"},
  },
  {
    id: '40',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/40.png"},
  },
  {
    id: '41',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/41.png"},
  },
  {
    id: '42',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/42.png"},
  },
  {
    id: '43',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/43.png"},
  },
  {
    id: '44',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/44.png"},
  },
  {
    id: '45',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/45.png"},
  },
  {
    id: '46',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/46.png"},
  },
  {
    id: '47',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/47.png"},
  },
  {
    id: '48',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/48.png"},
  },
  {
    id: '49',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/49.png"},
  },
  {
    id: '50',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/50.png"},
  },
  {
    id: '51',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/51.png"},
  },
  {
    id: '52',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/52.png"},
  },
  {
    id: '53',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/53.png"},
  },
  {
    id: '54',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/54.png"},
  },
  {
    id: '55',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/55.png"},
  },
  {
    id: '56',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/56.png"},
  },
  {
    id: '57',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/57.png"},
  },
  {
    id: '58',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/58.png"},
  },
  {
    id: '59',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/59.png"},
  },
  {
    id: '60',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/60.png"},
  },
  {
    id: '61',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/61.png"},
  },
  {
    id: '62',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/62.png"},
  },
  {
    id: '63',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/63.png"},
  },
  {
    id: '64',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/64.png"},
  },
  {
    id: '65',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/65.png"},
  },
  {
    id: '66',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/66.png"},
  },
  {
    id: '67',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/67.png"},
  },
  {
    id: '68',
    title: {uri:"http://baston.store/trafiktanzimisaretleri/68.png"},
  },
 
 

];

const TrafficScreenTwo = () => {
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
          numColumns={3}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      
    </SafeAreaView>
  );
};

export {TrafficScreenTwo};

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
