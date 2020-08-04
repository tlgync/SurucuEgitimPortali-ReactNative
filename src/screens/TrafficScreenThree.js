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
    title: {uri:"http://baston.store/trafikbilgiisaretleri/1.png"},
  },
  {
    id: '2',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/2.png"},
  },
  {
    id: '3',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/3.png"},
  },
  {
    id: '4',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/4.png"},
  },
  {
    id: '5',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/5.png"},
  },
  {
    id: '6',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/6.png"},
  },
  {
    id: '7',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/7.png"},
  },
  {
    id: '8',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/8.png"},
  },
  {
    id: '9',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/9.png"},
  },
  {
    id: '10',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/10.png"},
  },
  {
    id: '11',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/11.png"},
  },
  {
    id: '12',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/12.png"},
  },
  {
    id: '13',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/13.png"},
  },
  {
    id: '14',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/14.png"},
  },
  {
    id: '15',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/15.png"},
  },
  {
    id: '16',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/16.png"},
  },
  {
    id: '17',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/17.png"},
  },
  {
    id: '18',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/18.png"},
  },
  {
    id: '19',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/19.png"},
  },
  {
    id: '20',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/20.png"},
  },
  {
    id: '21',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/21.png"},
  },
  {
    id: '22',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/22.png"},
  },
  {
    id: '23',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/23.png"},
  },
  {
    id: '24',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/24.png"},
  },
  {
    id: '25',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/25.png"},
  },
  {
    id: '26',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/26.png"},
  },
  {
    id: '27',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/27.png"},
  },
  {
    id: '28',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/28.png"},
  },
  {
    id: '29',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/29.png"},
  },
  {
    id: '30',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/30.png"},
  },
  {
    id: '31',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/31.png"},
  },
  {
    id: '32',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/32.png"},
  },
  {
    id: '33',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/33.png"},
  },
  {
    id: '34',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/34.png"},
  },
  {
    id: '35',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/35.png"},
  },
  {
    id: '36',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/36.png"},
  },
  {
    id: '37',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/37.png"},
  },
  {
    id: '38',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/38.png"},
  },
  {
    id: '39',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/39.png"},
  },
  {
    id: '40',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/40.png"},
  },
  {
    id: '41',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/41.png"},
  },
  {
    id: '42',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/42.png"},
  },
  {
    id: '43',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/43.png"},
  },
  {
    id: '44',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/44.png"},
  },
  {
    id: '45',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/45.png"},
  },
  {
    id: '46',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/46.png"},
  },
  {
    id: '47',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/47.png"},
  },
  {
    id: '48',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/48.png"},
  },
  {
    id: '49',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/49.png"},
  },
  {
    id: '50',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/50.png"},
  },
  {
    id: '51',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/51.png"},
  },
  {
    id: '52',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/52.png"},
  },
  {
    id: '53',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/53.png"},
  },
  {
    id: '54',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/54.png"},
  },
  {
    id: '55',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/55.png"},
  },
  {
    id: '56',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/56.png"},
  },
  {
    id: '57',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/57.png"},
  },
  {
    id: '58',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/58.png"},
  },
  {
    id: '59',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/59.png"},
  },
  {
    id: '60',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/60.png"},
  },
  {
    id: '61',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/61.png"},
  },
  {
    id: '62',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/62.png"},
  },
  {
    id: '63',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/63.png"},
  },
  {
    id: '64',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/64.png"},
  },
  {
    id: '65',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/65.png"},
  },
  {
    id: '66',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/66.png"},
  },
  {
    id: '67',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/67.png"},
  },
  {
    id: '68',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/68.png"},
  },
  {
    id: '69',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/69.png"},
  },
  {
    id: '70',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/70.png"},
  },
  {
    id: '71',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/71.png"},
  },
  {
    id: '72',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/72.png"},
  },
  {
    id: '73',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/73.png"},
  },
  {
    id: '74',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/74.png"},
  },
  {
    id: '75',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/75.png"},
  },
  {
    id: '76',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/76.png"},
  },
  {
    id: '77',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/77.png"},
  },
  {
    id: '78',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/78.png"},
  },
  {
    id: '79',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/79.png"},
  },
  {
    id: '80',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/80.png"},
  },
  {
    id: '81',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/81.png"},
  },
  {
    id: '82',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/82.png"},
  },
  {
    id: '83',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/83.png"},
  },
  {
    id: '84',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/84.png"},
  },
  {
    id: '85',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/85.png"},
  },
  {
    id: '86',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/86.png"},
  },
  {
    id: '87',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/87.png"},
  },
  {
    id: '88',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/88.png"},
  },
  {
    id: '89',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/89.png"},
  },
  {
    id: '90',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/90.png"},
  },
  {
    id: '91',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/91.png"},
  },
  {
    id: '92',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/92.png"},
  },
  {
    id: '93',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/93.png"},
  },
  {
    id: '94',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/94.png"},
  },
  {
    id: '95',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/95.png"},
  },
  {
    id: '96',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/96.png"},
  },
  {
    id: '97',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/97.png"},
  },
  {
    id: '98',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/98.png"},
  },
  {
    id: '99',
    title: {uri:"http://baston.store/trafikbilgiisaretleri/99.png"},
  },

];

const TrafficScreenThree = () => {
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
          numColumns={1}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      
    </SafeAreaView>
  );
};

export {TrafficScreenThree};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    marginHorizontal: 5,
    marginVertical: 5,
    resizeMode: 'stretch'
  },
});
