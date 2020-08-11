import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import {QuestionButton} from '.';
import Context from '../context/store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HScreenItem = (props) => {
  const [ansIndex, setAnsIndex] = useState(0);
  const [dataLenght, setDataLenght] = useState([...props.itemData.item]);
  const [right, setRight] = useState(1);
  const [click, setClick] = useState(1);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = () => {
    const RandomNumber = [];
    if (props.itemData.item[ansIndex].cevap !== undefined) {
      for (
        let i = 0;
        RandomNumber.length <= props.itemData.item[ansIndex].cevap.length - 1;
        i + 1
      ) {
        const randomNumber = Math.floor(
          Math.random() *
            Math.floor(props.itemData.item[ansIndex].cevap.length),
        );
        if (RandomNumber.indexOf(randomNumber) === -1) {
          RandomNumber.push(randomNumber);
        }
      }
      setRandomNumbers(RandomNumber);
    } else {
      for (
        let i = 0;
        RandomNumber.length <=
        props.itemData.item[ansIndex].imgCevap.length - 1;
        i + 1
      ) {
        const randomNumber = Math.floor(
          Math.random() *
            Math.floor(props.itemData.item[ansIndex].imgCevap.length),
        );
        if (RandomNumber.indexOf(randomNumber) === -1) {
          RandomNumber.push(randomNumber);
        }
      }
      setRandomNumbers(RandomNumber);
    }
  };

  const setIndex = (correct) => {
    setClick(0);
    if (ansIndex < dataLenght.length - 1) {
      if (state.right > 0) {
        dispatch({type: 'RİGHT_DOWN'});
        elseİf(correct);
        setTimeout(() => {
          setClick(1);
          getRandom();
          setAnsIndex(ansIndex + 1);
          dispatch({type: 'RİGHT_PLUS'});
        }, 2500);
      }
    } else {
      if (state.right > 0) {
        dispatch({type: 'RİGHT_DOWN'});
        elseİf(correct);
        setTimeout(() => {
          props.prop.navigation.navigate('FinishScreen');
          getRandom();
          setAnsIndex(0);
          dispatch({type: 'RİGHT_PLUS'});
        }, 2500);
      }
    }
  };
  const elseİf = (correct) => {
    if (correct !== true) {
      dispatch({type: 'TOTAL_FALSES'});
    } else {
      dispatch({type: 'TOTAL_TRUES'});
    }
  };

  const backQuestion = () => {
    if (ansIndex > 0 && click > 0) {
      setAnsIndex(ansIndex - 1);
    }
  };

  const nextQuestion = () => {
    if (ansIndex < dataLenght.length - 1 && click > 0) {
      setAnsIndex(ansIndex + 1);
    }
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#3F51B5" />
      <View style={styles.container}>
        {console.log(state)}
        <View
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.5,
            //sorubolumu
          }}>
          {props.itemData.item[ansIndex].question !== undefined ? (
            <Text style={styles.soru}>
              {props.itemData.item[ansIndex].question}
            </Text>
          ) : (
            <View>
              {props.itemData.item[ansIndex].imgQuestionText !== undefined ? (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    style={{width: 150, height: 150, alignItems: 'center'}}
                    source={{uri: props.itemData.item[ansIndex].imgQuestion}}
                  />
                  <Text style={styles.soru}>
                    {props.itemData.item[ansIndex].imgQuestionText}
                  </Text>
                </View>
              ) : (
                <Image
                  style={{width: 300, height: 150}}
                  source={{uri: props.itemData.item[ansIndex].imgQuestion}}
                />
              )}
            </View>
          )}
        </View>
        <View style={styles.questionButton}>
          {randomNumbers.length > 0
            ? randomNumbers.map((e, index) => {
                return (
                  <View key={index}>
                    <QuestionButton
                      setInd={setIndex}
                      buttonData={
                        props.itemData.item[ansIndex].cevap !== undefined
                          ? props.itemData.item[ansIndex].cevap[e]
                          : props.itemData.item[ansIndex].imgCevap[e]
                      }
                    />
                  </View>
                );
              })
            : null}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 40,
            marginBottom: 150,
          }}>
          <View style={{marginHorizontal: 10}}>
            <TouchableOpacity onPress={backQuestion}>
              <Text style={styles.beforeAfter}>Önceki</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginHorizontal: 10}}>
            <Text style={styles.pageNumber}>
              {ansIndex + 1}/{dataLenght.length}
            </Text>
          </View>

          <View style={{marginHorizontal: 10}}>
            <TouchableOpacity onPress={nextQuestion}>
              <Text style={styles.beforeAfter}>Sonraki</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export {HScreenItem};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    width: windowWidth,
    height: windowHeight,
  },
  beforeAfter: {
    fontFamily: 'Roboto-Black',
    fontSize: 17,
    color: 'tomato',
    letterSpacing: 0.7,
  },
  pageNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto-Black',
    fontSize: 17,
    color: 'tomato',
    letterSpacing: 0.7,
  },
  soru: {
    fontFamily: 'Roboto-Black',
    fontSize: 17,
    marginHorizontal: 5,
  },
  questionButton: {
    flex: 1,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
