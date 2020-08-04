import React from 'react';

import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';

const IlkYardim = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.H1}>Sürücülerde Aranan Sağlık Koşulları</Text>
          <Text style={styles.H2}>Sağlık Koşulları</Text>
          <Text style={styles.H3}>Görme Yeterliliği</Text>
          <Text style={styles.p}>
            Tek gözü görmeyip diğer gözü tam görenler A1 – A2 – B – F sınıfı
            sürücü belgesi alabilirler ve aşağıda listelenen şartlara
            uymalıdırlar. Ticari araç kullanamazlar. Her yıl sağlık raporunu
            yenilemek zorundadırlar. Görme kayıpları olmamalıdır. Gece araç
            kullanamazlar. Kullandıkları aracın arka camına tek gözünün
            gördüğünü belirten işaret yapıştırmak zorundadırlar. Azami hızları
            şehir içinde 50, yerleşim alanı dışında araç kullanma hızları normal
            hızdan 10 km daha az olmalıdır. C – D – E – G sınıfı sürücü belgesi
            alacak olanların bir gözü tam, diğer gözü en az %60 oranında
            görebilmelidir. Gece körlüğü olanlar gün doğumundan 1 saat önce ve
            gün batımından 1 saat sonraki zaman dilimi içerisinde araç
            kullanabilirler. Renk körlüğü olanlar sürücü belgesi alabilir.
            Gözlük veya lensle araç kullanılabilir. Doktor tarafından
            önerilmişse sürücü belgesine yazılır.
          </Text>
          <Text style={styles.H3}>İşitme Yeterliliği</Text>
          <Text style={styles.p}>
            Bütün sürücülerde bir kulak tam, diğer kulak en az %50
            işitebilmelidir. Ancak özel araç kullanacak olup işitmesi yetersiz
            olanlar işitme çihazı kullanarak araç kullanabilirler. Bunlar B – F
            sınıfı sürücü belgesi alabilir. Ticari araç kullanamazlar.
          </Text>
          <Text style={styles.H3}>Ortopedik Özellik Yeterliliği</Text>
          <Text style={styles.p}>
            Baş ve boyun dönme hareketlerinde %50, bel dönme hareketlerinde
            %75’den fazla engellenme olmamalıdır. Uzuv eksikliği özel araçlarda,
            özel birtakım donanımlar takılarak tamamlanıyorsa bunlara H sınıfı
            sürücü belgesi verilir. Felçli olanların diğer sağlık yeterlilikleri
            uygunsa H sınıfı sürücü belgesi alarak sürücü olabilirler.
          </Text>
          <Text style={styles.H3}>Genel ve Ruhsal Sağlık Yeterliliği</Text>
          <Text style={styles.p}>
            İleri derecede kalp yetmezliği olmamalıdır. Nöbet getiren
            hastalıklar (sara – sinir krizi) olmamalıdır. Yüksek tansiyon
            hastası olanlar C – D – E – G sürücü belgesi alamazlar. Şeker
            hastalığı ağır seyredenler srüücü belgesi alamazlar; ancak şeker
            hastalığı kontrol altındaysa alabilir. Psikolojik yetersizliği (akıl
            hastalığı, zekâ geriliği, bunama vb.) olanlar sürücü olamazlar.
            Alkol ve uyuşturucu bağımlılığı olanlar srüücü belgesi alamazlar.
          </Text>
          <Text style={styles.H2}>Alkol ve Sürücülük</Text>
          <Text style={styles.p}>
            Alkol kaza sebebidir. Alkol kanın oksijen taşıma özelliğini bozarak
            duyu sistemleri ile ilgili algı bozuklukları yaratır. Denge, görme,
            işitme, tepki ve kas kontrolünde azalma meydana getirir. Karayolları
            trafik kanununa göre özel araç kullananların 0.50 promili aşmamak
            koşulu ile bir miktar alkol almaları serbesttir; ancak en doğrusu
            hiç alkol almadan araç kullanmaktır. Alkoldeki serbestlik oranı ise
            ortalama 1 kadehtir. Daha fazlası kaza yapma riskini arttırır.
          </Text>
          <Text style={styles.H2}>Emniyet Kemeri ve Koruyucu Başlık</Text>
          <Text style={styles.p}>
            Şehirlerarası ve şehir içi yolda sürücüler ve önde oturacan yolcular
            için emniyet kemeri takmak yasal bir zorunluluktur. Emniyet
            kemerinin takılması halinde meydana gelen bir kazada ölüm riski %40
            – 60 oranında azalır. Motosiklet ve motorlu bisiklet kullananlar
            koruyucu başlık (kask) ve gözlük, arkasındaki yolcu ise sadece
            başlık kullanmak zorundadır.
          </Text>
          <Text style={styles.H2}>Doku – Organ Bağışı ve Nakli</Text>
          <Text style={styles.p}>
            Herhangi bir insanın bir hastalık sonucu işlevini yitirmiş
            organlarının yerine bir başkasından sağlam organ veya dokunun
            nakledilmesi için izin verilmesine doku ve organ bağışı, bu amaçla
            yapılan tıbbi işlemlere de doku ve organ nakli denir. Organ ve doku
            bağışının bir tıbbi bir de dinsel çerçevesi vardır. Tıbbi çerçeve
            itibariyle kan, böbrek, kalp, karaciğer, pankreas, kemik iliği,
            akciğer ve gözün kornea tabakası nakledilebilir. En çok bağışlanan
            doku yapısı kandır. Böbrek ise en çok bağışlanan organdır. 18
            yaşından büyük 65 yaşından küçük olanlar doku ve organlarını
            bağışlayabilir. Çocuklarda aile izin verirse 2 yaşından sonra organ
            ve dokuları alınabilir. Böbrek hastalıkları, şeker hastalığı,
            kanser, AIDS, sarılık, ağır iltihabi durumu olanlar organ
            bağışlayamazlar. Herhangi bir beden karşılığı organ veya doku
            alınması, satılması ve reklâmı yasaktır. Bundan çıkar sağlayanlara
            ağır para cezası ve 2 – 4 yıl hapis cezası verilir. Dinsel boyutu
            itibariyle Diyanet İşleri Başkanlığı Din İşleri Yüksek Kurulu’nun
            almış olduğu karar çerçevesinde dinizime göre organ ve doku naklinin
            herhangi bir sakıncası yoktur.
          </Text>
          <Text style={styles.H1}>
            Araç Yangınları ve Yanıklarda İlk Yardım
          </Text>
          <Text style={styles.H2}>Araç Yangınları</Text>
          <Text style={styles.p}>
            Karayolları Trafik Yönetmeliğine göre motosiklet, motorlu bisiklet
            ve traktör dışındaki tüm araçlarda söndürme cihazı bulundurmak
            zorunludur. Söndürme cihazı sürücünün kolayca ulaşabileceği bir
            yerde bulundurulmalıdır.
          </Text>
          <Text style={styles.H3}>Araç Yangınlarında Müdahale Yöntemi</Text>
          <Text style={styles.p}>
            Kaza yapan araçlarda yangın çıkma ihtimali göz önünde bulundurularak
            aracın kontağı kapatılır. Akü kutup başları sökülür, araçlar
            sabitleştirilir. Araçta yangın başlamış ise insanlar çevreden
            uzaklaştırılır. Motor bölümünde başlayan bir yangın var ise önce
            aracın altı soğutulur sonra ön tarafı (pancur), daha sonra da kaput
            açılarak motor bölümündeki alevlerin üzerine soğutma işlemi
            sürdürülür.
          </Text>
          <Text style={styles.H2}>Yanık Yaraları</Text>
          <Text style={styles.p}>
            Yanık: Isı kaynaklarının ısılarına maruz kalındığı zaman oluşan yara
            türlerine yanık denir. Yanıklar iki şekilde derecelendirilir:
          </Text>
          <Text style={styles.H3}>Yüzeysel Derecelendirme</Text>
          <Text style={styles.p}>
            İnsan vücudunun %20’si veya daha fazlasının yanması halinde hayati
            tehlike başlar. Bebeklerde bu oran %10 düzeyindedir.
          </Text>
          <Text style={styles.H3}>Derinlemesine Derecelendirme</Text>
          <Text style={styles.p}>
            a) Birinci Derece Yanık: Güneş yanığı örnek verilebilir. Deride
            kızarıklık, gerginlik ve ağrının olduğu, deri bütünlüğünün
            bozulmadığı, iz bırakmadan iyileşen yanık türüdür. b) İkinci Derece
            Yanık: Kaynar su, kızgın yağ dökümesi sonucu oluşan yanıklar örnek
            verilebilir. Deri bütünlüğü bozulmuştur. Üst ve orta deri tabakası
            yanmıştır. Bül (su kabarcıkları) Yoğun ağrı Deride kızarıklık,
            gerginlik İz bırakarak iyileşebilen yanık türüdür. c) Üçüncü Derece
            Yanık: Yüksek ısılara maruz kalındığı zaman oluşan yanıklardır. Deri
            ile beraber deri altındaki kasların, damarların, sinirlerin hatta
            kemiklerin de yanmış olduğu, çok fazla doku kaybının ve sıvı
            kaybının yaşandığı en tehlikeli yanık türüdür.
          </Text>
          <Text style={styles.H3}>Yanıklarda İlk Yardım</Text>
          <Text style={styles.p}>
            Kazazede yangın yerinden uzaklaştırılır. Üzerinde sönmemiş alevler
            varsa üzeri bütün bir örtüyle örtülerek alevlerin sönmesi sağlanır.
            Yanık elbiseler çıkarılır. Yanık yerin üzerine ıslak, temiz örtü
            örtülür. Hastaneye gidinceye kadar hem yanık yarasının üzerine hem
            de çevresine soğuk uygulaması yapılır. Yanık yarasının üzerine diş
            macunu, yoğurt vb. gibi malzemeler sürülmez. Kimyasal madde
            dökülerek yanık meydana gelmiş ise kimyasal maddenin temas ettiği
            vücut bölgesi 15 – 20 dakika boyunca tazyikli suyla temizlenmeye
            çalışılır. Ovma işlemi yapılmaz.
          </Text>
          <Text style={styles.H1}>
            Kırık, Çıkık ve Burkulmalarda İlk Yardım
          </Text>
          <Text style={styles.H2}>Tanımlar</Text>
          <Text style={styles.p}>
            Kırık: Darbe, düşme veya sıkışma gibi durumlarda kemik dokusunda
            bütünlüğün bozulmasına “kırık” denir. Genel olarak açık veya kapalı
            kırık olmak üzere ikiye ayrılır. Çıkık: Aşırı yük bindirmeleri veya
            zorlamalar sonucunda eklemlerin birleştikleri yerden ayrılmasına
            “çıkık” denir. Bütün oynar eklemli vücut bölgelerinde çıkık meydana
            gelebilir. Burkulma: Vücudun oynar eklem bölgelerinde aşırı
            zorlamalar sonucu eklemi birleştiren bağların zedelenmesine
            “burkulma” denir.
          </Text>
          <Text style={styles.H2}>Belirtiler</Text>
          <Text style={styles.H3}>Kırık Belirtiler</Text>
          <Text style={styles.p}>
            Şişme, morarma Şekil bozukluğu Şiddetli ağrı Hareketsizlik
            Hassasiyet Kırık kemik ucu dışarı çıkmış olabilir (kanama) Şok
          </Text>
          <Text style={styles.H3}>Çıkık Belirtileri</Text>
          <Text style={styles.p}>
            Şişme, morarma Simetrik bozukluk Hareketsizlik Ağrı Şok
          </Text>
          <Text style={styles.H3}>Burkulma Belirtileri</Text>
          <Text style={styles.p}>
            Gereksiz hareketlerden kaçınılır. Kırık bölge aniden kaldırılıp
            indirilme ve çekme işlemine tabi tutulmaz. Kırık bölge tespit
            edilir. Tespit: Kırık bölgenin hareketsiz hale getirilmesi
            işlemidir. Tespit işlemi yapılırken atel kullanılır. Atel: Kırık
            bölgenin tespitini (hareketsizliğini) sağlayan sert malzemelerdir.
            Tespit Araçları: Tahta ateller, dal parçaları, mukavvalar, karton,
            gazete, alçı atelleri, tel atelleri, ince rulo sargı ve üçgen sargı
            gibi malzemeler tespit aracı olarak kullanılır.
          </Text>
          <Text style={styles.H3}>Köprücük Kemiği Kırıklarında İlk Yardım</Text>
          <Text style={styles.p}>
            Köprücük kemiği her iki omzun ön kısmında yer alır. Köprücük kemiği
            kırıklıklarında omuzlar tespit edilir. Tespit işleminde ince rulo
            sargı kullanılır. İnce rulo sargılar her iki koltuk altından
            geçirilerek arkadan bağlanır. Kırık köprücük kemiğinin bulunduğu
            taraftaki kol 90 derece açıyla üçgen sargı kullanılarak boyna
            bağlanır. Kazazede oturuş pozisyonunda hastaneye sevk edilir.
          </Text>
          <Text style={styles.H3}>Kol Kırıklarında İlk Yardım</Text>
          <Text style={styles.p}>
            İster ön kol olsun ister üst kol olsun uygulama aynıdır. Kol
            kırıklarında tespit çalışması yapılırken en ideal tespit aracı tahta
            ateldir. Tahta atelin bulunamadığı durumlarda dal parçası, mukavva,
            karton, dosya, bez parçası vb. malzemeler kullanılır. Kol üçgen
            sargı kullanılarak 90 derece açıyla boyna bağlanır. Kazazede oturuş
            pozisyonunda hastaneye sevk edilir.
          </Text>
          <Text style={styles.H3}>Kaburga Kemiği Kırıklarında İlk Yardım</Text>
          <Text style={styles.p}>
            Kırık kaburganın akciğere batma riski olduğundan dolayı kazazede
            nefes verdirilip üçgen sargı kullanılarak kırık kaburga tespit
            edilir. Geniş üçgen sargının (100 x 100 x 150 cm ebadında) geniş
            tarafı kırık kaburganın bulunduğu bölgeye gelecek şekilde sarılır ve
            karşı taraftaki koltuk altından bağlanır. Birden fazla kırık şüphesi
            varsa en az 3 üçgen sargı kullanılır. Kırık kaburganın bulunduğu
            taraftaki kol 45 derece ile göğse bağlanır. Kazazede oturuş
            pozisyonunda hastaneye sevk edilir.
          </Text>
          <Text style={styles.H3}>Omurga Kırıklarında İlk Yardım</Text>
          <Text style={styles.p}>
            Boyun, sırt ve bel bölgesini oluşturan omurga ekseninde meydana
            gelen travmalar kazazedeyi kısmi veya tamamen felc bırakabilir.
            Kazazede uzun atelle tespit edilmelidir. Düz satıhlı bir tahta veya
            bir sedye en uygun tespit aracıdır. Kazazedenin boyun omur
            bölgesinde hasar şüphesi varsa bu tür kazazedeler gerek araçtan
            çıkarılırken gerek hastaneye sevk edilirken boynuna kask
            uygulanmalıdır. Orijinal bir boyun kaskı temin etmek zor olabilir.
            Bunun yerine bir giysi, bir kumaş parçası, havlu veya kaşkol türü
            bir malzeme rulo yapılıp boyna sarılmalıdır. Kazazede kesinlikle
            sedye ile sırt üstü yatış pozisyonunda hastaneye sevk edilir.
          </Text>
          <Text style={styles.H3}>Bacak Kemiği Kırıklarında İlk Yardım</Text>
          <Text style={styles.p}>
            Kırık ayak ile diz arasında ise atelin boyu topuktan kalça hizasına
            kadar olmalıdır. Kırık diz ile kalça arasında ise atelin boyu
            topuktan bel hizasına kadar olmalıdır. Uygun bir tespit aracının
            bulunmadığı durumlarda bir bacak kırık diğer bacak sağlam ise iki
            bacak arasına yumuşak malzemeler konur ve iki bacak birbirine
            bağlanarak tespit edilir.
          </Text>
          <Text style={styles.H1}>Çıkıklarda İlk Yardım</Text>
          <Text style={styles.p}>
            Çıkık yerine yerleştirilmez, kırıklarda olduğu gibi çıkık bölge
            tespit edilir. Çıkık bölgeye soğuk uygulanır. Çıkık bölge kalpten
            yukarda tutulmalıdır. Vücut ısısı korunur. Uygun pozisyonda
            hastaneye sevk edilir.
          </Text>
          <Text style={styles.H1}>Burkulmalarda İlk Yardım</Text>
          <Text style={styles.p}>
            Burkulan vücut bölgesi hareket ettirilmez. Elastiki bandaj
            uygulanır. Kalpten yukarıda tutularak 15 – 20 dakika boyunca soğuk
            uygulaması yapılır, sonra kalp seviyesine indirilir, havlu veya
            benzer bir malzemeye sarılarak sıcak tutulur.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {IlkYardim};

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
