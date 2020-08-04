import React from 'react';

import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';

const Motor = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.H1}>Fren Sistemi</Text>
          <Text style={styles.p}>
            SGörevi fren pedalına basma durumuna bağlı olarak, aracın hızını
            yavaşlatmak veya aracı durdurmaktır. Aynı zamanda bir görevi de
            duran aracı sabitlemektir.
          </Text>
          <Text style={styles.H3}>Fren Sistemi Parçaları</Text>
          <Text style={styles.p}>
            Fren pedalı Merkez pompası Fren boruları Tekerlek silindirleri Fren
            balataları Kampanalar
          </Text>
          <Text style={styles.H2}>Fren Çeşitleri</Text>
          <Text style={styles.H3}>Mekanik Fren (El Freni):</Text>
          <Text style={styles.p}>
            Günümüzdeki araçlarda iki tip el freni kullanılmaktadır: Arka
            tekerleklere kumanda edilen çelik çubuk veya kaplu el freni sistemi.
            Genellikle arka tekerleklere kumanda eden tip el frenleri
            kullanılmaktadır. El frenini çalıştırmak için bir levye vardır. Buna
            el freni kolu da denir. Levye, çelik teller aracılığı ile arka
            frenlerin balatalarına kumanda eder. Şoför mahallindeki el freni
            levyesini çekince arka balatalar kampanaya yapışır ve frenleme
            gerçekleşir. El frenini bırakmak istendiğinde, el freni kolunun
            üzerindeki düğmeye parmakla basılır, hafifçe el freni çekilir ve
            bırakılır. El frenleri duran aracı park etmek için kullanılır. Ayak
            freninin tutmadığı tehlikeli durumlarda da kullanılabilir.
          </Text>
          <Text style={styles.H2}>Hidrolik Fren:</Text>
          <Text style={styles.p}>
            Frenleme sırasında fren pedalına basıldığında, fren merkez
            pompasındaki hidrolik yağı, pedala basma kuvvetini tekerlek
            silindirlerine iletir. Tekerlek silindirlerinin içerisinde bulunan
            pistonlar açılarak fren balataları kampanaya temas eder. Böylece
            aracın durması veya yavaşlaması sağlanmış olur.
          </Text>
          <Text style={styles.H2}>Diskli Fren:</Text>
          <Text style={styles.p}>
            Bu frende diğer fren sistemindeki kampana yerine diskin
            bulunmasıdır. Diskli fren sisteminin avantajlarından biri de diskin
            fazla ısınmamasıdır.
          </Text>
          <Text style={styles.H2}>Havalı Fren:</Text>
          <Text style={styles.p}>
            Bu sistemde basınçlı hava kullanılmak suretiyle frenleme
            sağlanmaktadır. Ağır hizmet tipi (otobüs, kamyon vb.) araçlarda
            kullanılmaktadır. Sürücü tarafında en az kuvvetin uygulanması ile en
            iyi frenlemeyi sağlayacak şekilde düzenlenmiştir.
          </Text>
          <Text style={styles.H2}>Havalı Fren Sisteminin Elemanları</Text>
          <Text style={styles.H3}>Hava Kompresörü:</Text>
          <Text style={styles.p}>
            Fren sistemi için gerekli olan basınçlı havayı sağlar.
          </Text>
          <Text style={styles.H3}>Regülatör:</Text>
          <Text style={styles.p}>
            Kompresöre kumanda eder. Kompresör, regülatörün müsaade ettiği
            oranda havayı sıkıştırarak depolarına gönderir.
          </Text>
          <Text style={styles.H3}>Hava Depoları:</Text>
          <Text style={styles.p}>
            Kompresörün ürettiği basınçlı havayı depolamak için kullanılır.
            Depolarda su boşaltma musluğu bunulur. Sıkışan ve ısınan hava
            zamanla suya dönüşür. Sabahları bu muslukları açıp suyunun alınması
            gerekir. Havalı fren sistemi bulunan bir aracın kullanılması
            gerektiğinde gösterge tablosundaki basınç saatine bakılır. Basınç
            yükselmemişse frenler tutmayacağı için araç hareket ettirilmez.
          </Text>
          <Text style={styles.H2}>
            Fren Sisteminin Bakımı ve Basit Arızaları
          </Text>
          <Text style={styles.H3}>
            Frenlerin tutmamasının nedenleri şunlardır:
          </Text>
          <Text style={styles.p}>
            Fren sisteminde hidrolik yağın eksilmesi veya kalmaması. Hidrolik
            fren sistemindeki hidrolik yağı deposu günlük bakımlarda kontrol
            edilir. Eksilmişse fren merkez pompasına, borulara ve tekerlek
            silindirlerine bakılır. Fren sisteminde havanın bulunması Fren
            balatalarının aşınması Fren ayarlarının bozuk olması. Fren ayarları
            çok sıkı ise sürtünme sonucunda ısınarak yanar. Hidrolik fren
            sistemindeki hidrolik deposunda hidrolik yağı kalmamışsa veya
            azalmışsa sistemin herhangi bir tarafında patlaklık vardır. Önce
            patlak olan kısım tamir edilir. Daha sonra hidrolik yağı tamamlanır.
            Sistemin havası alınır. Fren sisteminde hava varsa, fren pedalına
            basınca pedal çok yumuşak hiddesilir. Hidrowak (Westinghous) hortumu
            patlayıp da hava girmiş ise fren pedalı çok sertleşir. Fren ayarları
            sıkı ise balatalar kampanaya sürterek ısınır ve yanar. Frenler
            tutmaz, fren ayarı sıkı olan bir araçta, el kampanaya değdirildiği
            zaman aşırı şekilde ısındığı hissedilir. Fren ayarları gevşek ise
            frenler zayıf tutar. Fren ayarları aynı olmazsa, frenleme esnasında
            araç bir tarafa çekme yapar. Soğuk havalarda park ediltikten sonra
            el freni çekilmez. Çekilecek olursa, el freni çubukları donar ve
            kopar. Sonuçta fren balataları kampanaya yapışık kalır. Araç
            çalıştırıldığında hareket etmez. Bu nedenle çok soğuk havalarda el
            freninin kullanılması yerine araç uygun vitese takılır. Direksiyon
            uygun tarafa çevrilir. El frenini bırakmadan hareket edilirse araç
            zorlanır. Bir müddet gittikten sonra, fren balataları yanar.
            Kokusundan fark edilmezse tekerlekler yanar. Hidrolik fren
            sisteminde vakum yardımlı güç freni (hidrowak westinghous)
            kullanılmışsa, motor çalışmadan frenler tutmaz. Tutsa bile frenleme
            zayıftır. Bu nedenle araçla giderken kontak anahtarı kapatılmaz.
            Havalı fren sistemi bulunan araçlara, kışın donmaması için alkol
            ilave edilir. Aracın günlük bakımı yapılırken hava tanklarının
            altında bulunan su muslukları açılarak biriken su boşaltılır. Havalı
            fren sistemine sahip araçlarda basıncın düşmesinin sebebi fren boru
            ve rekorlarındaki kaçak ya da komprasörün hava üretmemesidir. Yine
            bu sisteme sahip araçlarda hava monometresinde (basınç
            göstergesinde) hava basıncı yoksa veya motor çalışırken hava basıncı
            düşmüş ise araç hareket ettirilmez, hareket halinde ise araç
            durdurulup arıza araştırılır.
          </Text>
          <Text style={styles.H1}>Araçta İlk Bakım</Text>
          <Text style={styles.p}>1000 – 2000 km arasında yapılır.</Text>
          <Text style={styles.H3}>Rodaj:</Text>
          <Text style={styles.p}>
            Yeni motorun açılması veya yeni revizyon edilmiş motorun alışmasına
            denir. Rodaj zamanında fazla sürat yapılmaz. Motor tam güç durumunda
            çalıştırılmaz. Uzun süre sabit hızla yol alınmaz. Ani duruş ve
            kalkışlar yapılmaz.
          </Text>
          <Text style={styles.H3}>Günlük Bakım:</Text>
          <Text style={styles.p}>
            Motor yağı, akaryakıt, radyatör suyu, fren hidrolik yağı, lastik
            hava basınçlarının, ışık ve ikaz sistemlerinin kontrolleri yapılır.
          </Text>
          <Text style={styles.H3}>Haftalık Bakım:</Text>
          <Text style={styles.p}>
            Vantilatör kayışı, akümülatör kontrolleri yapılır. Dizel
            motorlarında yakıt filtresi ayırıcısındaki suyun tahliye edilmesi,
            hava frenli araçlarda hava deposundaki suyun tahliye edilmesi
            yapılır.
          </Text>
          <Text style={styles.H3}>Aylık Bakım:</Text>
          <Text style={styles.p}>Hava filtresinin temizliği yapılır.</Text>
          <Text style={styles.H3}>Altı Aylık Bakım:</Text>
          <Text style={styles.p}>
            Supap, buji, platin avans ve rölanti ayarlarının, ön düzen
            ayarlarının ve lastik balanslarının, rot ve rot başlarının,
            balataların ve fren ayarlarının ve far ayarlarının kontrolleri
            yapılır.
          </Text>
          <Text style={styles.H3}>Yıllık Bakım:</Text>
          <Text style={styles.p}>
            Altı aylık bakımda yapılanlar yapılır. Ayrıca soğutma sistemi, yakıt
            deposu ve yakıt sistemi, dizel motorlarda enjeksiyon pompası ve
            enjektör ayarlarının kontrolü yapılır. Sürücüler, tekerlek – lastik
            değişimini ve araca kar zincirlerinin takılmasını bilmelidir.
          </Text>
          <Text style={styles.H1}>Süspansiyon Sistemi</Text>
          <Text style={styles.p}>
            Mekanik, hidrolik ve havalı sistemlerden oluşur. Yoldan gelecek
            vuruntu ve sallantıları üzerine alarak aracın rahat ve emniyetli bir
            şekilde kullanılmasını sağlar. Parçaları yaylar ve amortisörlerdir.
          </Text>
          <Text style={styles.H3}>Yaylar:</Text>
          <Text style={styles.p}>
            Yoldan gelen titreşim ve darbeleri üzerine alan helezon veya yaprak
            yaydır. Zamanla yaylar sertliklerini kaybederler. Aracın bir tarafı
            diğer taraflara nazaran daha aşağıdadır. Bu durumda yay ya yeniden
            sertleştirilir veya yenisi ile değiştirilir.
          </Text>
          <Text style={styles.H3}>Amortisörler:</Text>
          <Text style={styles.p}>
            Enjeksiyon şırıngası biçiminde olup, içerisinde yağ bulunan kapalı
            bir sistemdir. Bir ucu aracın gövdesine, diğer ucu dingile veya
            tekerin salıncağına bağlıdır. Yaylardan gelen titreşimleri üzerine
            alarak, titreşimlerin motor veya araç kabinlerine yansımasını önler.
            Amortisörlerde en çok görülen arıza yağ kaçırması ve bağlantı
            lastiklerinin aşınmasıdır. Bu gibi hallerde amortisör veya bağlantı
            lastikleri yenisi ile değiştirilir.
          </Text>
          <Text style={styles.H1}>Ön Düzen Sistemi</Text>
          <Text style={styles.p}>
            Bir aracı istenilen tarafa yöneltmek için ön tekerleklerin sağa veya
            sola olan doğrultularını değiştirir. Sevk ve idaresini kontrol eder.
          </Text>
          <Text style={styles.H3}>Ön Düzen Sisteminin Parçaları</Text>
          <Text style={styles.p}>
            Direksiyon simidi, direksiyon mili, direksiyon kutusu, rot ve rot
            başları olmak üzere başlıca dört unsurdan oluşur.
          </Text>
          <Text style={styles.H3}>
            Havalı ve Hidrolik Direksiyonların Avantajları
          </Text>
          <Text style={styles.p}>
            Direksiyon simidini etkileyen kuvvetin, basınçlı hava yardımıyla
            tekerleklerin istenilen yöne manevra almasını sağlayan sistemdir.
            Havalı direksiyonlar, hidrolik direksiyonlara oranla az kuvvetle
            döndürülür. Böylece havalı direksiyonlu araçlarda sürücü, araca daha
            kolay hakim olur.
          </Text>
          <Text style={styles.H3}>
            Ön Düzen Sisteminin Bakımı ve Basit Arızaları
          </Text>
          <Text style={styles.p}>
            Direksiyon sisteminin bakımı yapılırken, direksiyon kutusunun yağı
            kontrol edilmelidir. Aracın ön düzeninde kamber, kaster, king pim ve
            rot ayarları yapılır. Rot ayarı direksiyonun kumanda ettiği
            tekerleklerde yapılır. Rot ayarı bozuksa Araç sağa ya da sola çeker.
            Lastikler içten veya dıştan aşınır. Direksiyon hakimiyeti zorlaşır.
            Rot başlarındaki boşluk ve aşınma çarpma ile oluşur. Bu durumda rot
            başları yenisi ile değiştirilmelidir. Aksi halde direksiyon
            boşluğunun artmasına ve rot çıkmasına neden olacağından tekere
            kumanda gerçekleşmez. Direksiyon simidindeki boşluk zamanla artar.
            Boşluğun artmasının nedeni direksiyon kutusunun içindeki dişlilerin
            aşınması, direksiyon kutusu ayarının bozulması, rot başlarının
            aşınmasıdır. Aracın zaman zaman ön takımlarının kontrolünü yaparken,
            rot başlarına bakılmalı, aşınma olup olmadığı tespit edilmelidir.
          </Text>
          <Text style={styles.H1}>Tekerlekler ve Lastikler</Text>
          <Text style={styles.p}>
            Aracın ağırlığını üzerinde taşır, frenlemeyi sağlar. Jant ve lastik
            olmak üzere iki kısımdan meydana gelir. Jant: Lastiği üzerinde
            taşır, tekerleği kampanaya bağlar. Lastik: Dış yüzeyi yüksek
            kaliteli kauçuktan yapılmıştır. Üzerinde diş veya tırnak denilen
            girinti ve çıkıntılar bulunur. Lastik çeşitleri iç lastikli
            (şamyelli) ve iç lastiksiz (dubleks) olmak üzere iki türlüdür.
            Lastiklerin ölçüleri inç veya mm olarak verilir. Ayrıca lastiğin
            tipi ölçülerinin yanında gösterilen harflerle tanımlanır.
          </Text>
          <Text style={styles.H3}>
            Tekerlek ve Lastiklerin Bakımı ve Basit Arızaları
          </Text>
          <Text style={styles.p}>
            Lastik havaları tavsiye edilen değerde olmalıdır. Lastikleri uzun
            zaman kullanabilmek ve rahat hareket edebilmek için katalog
            değerinde şişirilmelidir. Aracın lastikleri her araca binişte gözle
            kontrol edilmelidir. Tavsiye edilen değerden az şişirilmiş
            lastiklerde kenarlardan aşınma olur. Direksiyon zor döner, enerji
            kaybı fazla olur. Tavsiye edilen değerden fazla şişirilmiş
            lastiklerde tabanın orta kısmından aşınma olur. Araçta zıplamalar
            hissedilir ve aracın kontrolü güçleşir. Balanssızlık, lastiğin sağa,
            sola veya aşağı, yukarı titremesidir. Aracın direksiyon simidi
            yüksek hızlarda titremeye başlar. Buna bağlı olarak direksiyon
            hakimiyeti zorlaşır. Aracın bağlantı somunları gevşer. Ön takımın da
            kısa zamanda bozulmasına, lastiklerin anormal aşınmasına neden olur.
            Bu arıza, balans tezgâhı bulunan kişiler tarafından giderilir. Araç
            lastikleri periyodik olarak 9000 – 10000 km dolunca yerleri
            değiştirilmelidir. Bütün lastiklerde aşıntının aynı olması bu
            şekilde sağlanabilir. Hiçbir zaman tavsiye edilen ebadlı lastikten
            başka lastik kullanılmamalıdır. Bijonların temizliği yapılacaksa
            kuru bezle yapılmalıdır. Lastikler ısındığı zaman içindeki hava
            basıncı artar. Araçta zıplamalar olur ve lastikler orta kısımdan
            daha önce aşınır. Hava basıncı ısıdan dolayı artmış ise, lastikde
            herhangi bir işlem yapılmaz. Lastik soğuyunca havasının basıncı
            normale inecektir. Kışın ve yazın lastik hava basınçları kontrol
            edilerek ayarlanması gerekir. Aracın lastiklerinin havası lastikler
            soğukken ölçülür. Lastikler sık sık kontrol edilmeli diş aralarına
            giren taş vb. gibi yabancı maddeler çıkarılmalıdır. Çekici
            tekerleklerin her ikisine de karlı havalarda kar lastiği veya
            patinaj zinciri takılmalıdır.
          </Text>
          <Text style={styles.H3}>Tekerleğin Değiştirilmesi</Text>
          <Text style={styles.p}>
            Tekerlek herhangi bir nedenle değiştirilmek istendiğinde araçtan
            inmeden önce gerekli emniyet tedbirleri alınır. Motor durdurulur, el
            freni çekilir. Araç uygun vitese takılır. Yokuş aşağı ise geri
            vitese, yokuş yukarı ise birinci vitese takılır. Yedek teker, kriko
            ve bijon anahtarı, değiştirilecek tekerin yanına getirilir. Sağlam
            yedek teker, değiştirilecek tekerin yanından aracın altına konulur.
            Bunun sebebi kriko ile araç kaldırılırken krikodan araç düşecek
            olursa bu tekerin üzerine düşsün, başka tarafa zarar vermesin
            diyedir. Jant kapağı varsa tekerden çıkartılır. Bijon anahtarı ile
            bijon somunları, yarımşar tur karşılıklı olarak gevşetilir. Kriko
            aracın uygun yerinden vurularak, araç, tekerin yerden temeası
            kesilinceye kadar kaldırılır. Bijon somunları karşılıklı olarak
            sökülür. Teker alınıp aracın altına konulur. Aracın altındaki teker
            yerine takılır. Bijon somunları karşılıklı olarak önce elle, daha
            sonra bijon anahtarı ile sıkıştırılır. Araç krikodan indirilir.
            Aracın altındaki yedek çıkartılır. Yeniden bijon somunları
            karşılıklı olarak iyice sıkıştırılır. Genellikle uzun yola
            çıkılacağı zaman bijon somunları kontrol edilmeli, gevşek ise
            sıkıştırılmalıdır.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {Motor};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {},
  H1: {
    fontFamily: 'Roboto-Black',
    fontSize: 19,
    color: '#3277a8',
    textAlign: 'center',
    marginTop: 20,
  },
  H2: {
    fontFamily: 'Roboto-Black',
    fontSize: 17,
    color: '#36918b',
    textAlign: 'center',
    marginTop: 20,
  },
  H3: {
    fontFamily: 'Roboto-Black',
    fontSize: 15,
    color: '#c9ad30',
    marginTop: 15,
    marginLeft: 10,
  },
  p: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#6e6e6e',
    marginLeft: 10,
    marginTop: 10,
    letterSpacing: 0.5,
    lineHeight: 23,
  },
});
