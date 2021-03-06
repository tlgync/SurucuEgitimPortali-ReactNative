import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView, StatusBar} from 'react-native';
import data from '../../data.json';
import {HScreenItem} from '../component';

const HomeScreen = props => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions([data]);
  }, []);

  const renderItem = item => {
    return (
      <SafeAreaView>
        <HScreenItem prop={props} itemData={item} />
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      <FlatList
        data={questions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export {HomeScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBaslik: {
    fontSize: 20,
    marginBottom: 50,
  },
  head: {
    fontSize: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    height: 30,
    backgroundColor: '#000',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yazi: {
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  aktif: {
    width: '40%',
    height: 30,
    backgroundColor: 'blue',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    width: '40%',
    height: 30,
    backgroundColor: 'red',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
