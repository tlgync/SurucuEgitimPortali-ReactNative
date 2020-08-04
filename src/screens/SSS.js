import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SSS = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Ehliyet ne kadar sürede çıkar?</Text>
          <Text style={styles.p}>
            MEB tarafından gerekli belgelerin onaylanması ve sertifikaların
            hazırlanma sürecinin hızıyla ilgilidir. Tahmini olarak direksiyon
            sınavında başarılı olduktan sonra, 1 veya 2 hafta içinde ehliyet
            sertifikanız hazır olur.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export {SSS};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    marginTop: 50,
  },
  box: {
    borderWidth: 1,
    marginBottom: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },
  H1: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    letterSpacing: 0.2,
    color: 'tomato',
    textAlign: 'center',
  },
  p: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    letterSpacing: 0.4,
    textAlign: 'center',
    lineHeight: 23,
  },
  scroll:{
      width: windowWidth,
      height: windowHeight,
  }
});
