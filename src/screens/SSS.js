import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SSS = (props) => {
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
          <Text style={styles.H1}>Ehliyet sınavında kaç soru var?</Text>
          <Text style={styles.p}>
            Ehliyet sınavında toplamda 50 soru bulunmaktadır.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>
            Ehliyet sınavında 3 yanlış 1 doğruyu götürüyor mu?
          </Text>
          <Text style={styles.p}>
            Hayır. Ehliyet sınavında yanlış cevapladığınız sorular net sayınızı
            etkilememektedir.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>
            Ehliyet sınavını geçebilmek için kaç puan almalıyım?
          </Text>
          <Text style={styles.p}>
            Ehliyet sınavını başarıyla geçebilmeniz için her testten en az 70
            puan almalısınız.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>
            Ehliyet sınavını geçebilmek için kaç soruyu doğru yanıtlamalıyım?
          </Text>
          <Text style={styles.p}>
            Ehliyet sınavını başarıyla geçebilmeniz için sınavda en az 35 soruyu
            soruyu doğru cevaplamalısınız.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>Sınav süresi toplam kaç saattir?</Text>
          <Text style={styles.p}>Toplam 60 dakikadır</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>
            Sürücü belgemi almadan sürücü sertifikasıyla araç kullanabilir
            miyim?
          </Text>
          <Text style={styles.p}>
            Hayır. Trafik Tescil Bürosuna başvurup sürücü belgenizi aldıktan
            sonra araç kullanabilirsiniz.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>
            Sürücü belgemi almadan sürücü sertifikasıyla araç kullanabilir
            miyim?
          </Text>
          <Text style={styles.p}>
            Hayır. Trafik Tescil Bürosuna başvurup sürücü belgenizi aldıktan
            sonra araç kullanabilirsiniz. Sertifika ehliyet yerine geçmez
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.H1}>
            Ehliyetimi kaybettim kayıp ehliyet yeniden nasıl çıkarılır?
          </Text>
          <Text style={styles.p1}>
            Öncelikle gazeteye kayıp ilanı vermeniz tavsiye olunur karakol
            tutanağı da olabilir. Daha sonra ehliyeti aldığınız Trafik Tescil
            Büro Amirliğine 2 fotoğraf Nüfus cüzdanı aslı, şoförler cemiyetinden
            Örnek5 formu ve günün ehliyet ücreti tutarı ile müracaat edip
            ehliyetinizi alabilirsiniz. Ehliyeti ilk aldığınız Trafik Tescilin
            haricinde başka bir yerleşim yerindeyseniz bulunduğunuz yerdeki
            Trafik Tescil Büro Amirliğine de müracaat edebilirsiniz.
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
    marginTop: Platform.OS === 'ios' ? 50 : 0,
  },
  box: {
    
    marginBottom: 25,

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
  p1: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    letterSpacing: 0.4,
    textAlign: 'center',
    lineHeight: 23,
    marginBottom: 200
  },
  scroll: {
    
  },
});
