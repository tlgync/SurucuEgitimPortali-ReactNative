import React from 'react';

import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';

const Trafikvecevre = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.H1}>Çevre Bilgisi</Text>
          <Text style={styles.H2}>Çevre ile İlgili Tanımlar</Text>
          <Text style={styles.H3}>Çevre</Text>
          <Text style={styles.p}>
            Canlıların yaşamları boyunca ilişkilerini sürdürdükleri ve
            karşılıklı olarak etkileşim içinde bulundukları biyolojik, fiziksel,
            sosyal, ekonomik ve kültürel ortamdır.
          </Text>
          <Text style={styles.H3}>Çevre Koruma</Text>
          <Text style={styles.p}>
            İnsan ve diğer canlıların varlık ve gelişmelerini doğal yapıların
            sürdürebilmeleri için gerekli olan şartların (ekolojik denge)
            tahribini, bozulmasını ve yok olmasını önlemeye, mevcut bozulmaları
            gidermeye, çevreyi iyileştirmeye, geliştirmeye ve çevre kirliliğini
            önlemeye yönelik çalışmaların bütünüdür.
          </Text>
          <Text style={styles.H3}>Çevre Kirliliği</Text>
          <Text style={styles.p}>
            Çevrede meydana gelen ve canlıların sağlığını, ekolojik dengeyi
            bozabilecek her türlü olumsuz etkileridir.
          </Text>
          <Text style={styles.H3}>Atık</Text>
          <Text style={styles.p}>
            Herhangi bir faaliyet sonucunda oluşan, çevreye atılan veya
            bırakılan her türlü maddedir.
          </Text>
          <Text style={styles.H3}>Tehlikeli Atık</Text>
          <Text style={styles.p}>
            Fiziksel, kimyasal, biyolojik, yönden olumsuz etki yaparak, ekolojik
            denge ile insan ve diğer canlıların doğal yapılarının bozulmasına
            neden olan atıklardır.
          </Text>
          <Text style={styles.H3}>Gürültü</Text>
          <Text style={styles.p}>
            İnsanların huzur ve sükunu, ruh ve beden sağlığını bozacak düzeyde
            istenmeyen seslerdir.
          </Text>
          <Text style={styles.H2}>Çevre ile İlgili Genel Bilgiler</Text>
          <Text style={styles.p}>
            Bütün canlıların ortak yaşadıkları çevre, insanların etkileriyle
            olumsuz olarak etkilenmekte ve doğal olarak da üzerinde yaşayan
            canlıların sağlığını günden güne tehdit etmektedir. Çevrede
            olabilecek olumsuz etkileri önlemek ve gelecek nesillere sağlıklı ve
            temiz yaşam alanı bırakabilmek için bireyler olarak üzerimize düşen
            görevleri yerine getirmemiz gerekmektedir.
          </Text>
          <Text style={styles.H2}>Çevre ve Trafik Arasındaki İlişkiler</Text>
          <Text style={styles.p}>
            Ülkemizde her geçen gün trafiğe çıkan araç sayısı artmakta ve trafik
            yoğunluğu bir sorun haline gelmektedir. Bu nedenle de zorunlu
            olmadıkça toplu taşıma araçlarının kullanılması, yoğun olmayan
            yolların tercih edlmesi, gidilecek yerin önceden tespit edilerek
            güzergâhın belirlenmesi ve planlı olarak trafiğe çıkılması zaman,
            yakıt ve emek tasarrufu sağlayacaktır. Teknik bakımları yapılmayan
            araçlar daha çok yakıt harcadıklarından, yakıt sarfiyatı artacağı
            gibi egzozlarından çıkan zehirli gaz miktarı da artar. Bu nedenle
            araç bakımlarının düzenli olarak yaptırılması gerekmektedir. Ayrıca
            uygun vites kullanmamak, gereksiz yere aracı rölantide çalıştırmak,
            ani duruş kalkışlar, aşırı hız, fazla yükleme, ateşleme sistemi veya
            yakıt sisteminin arızalı olması daha çok yakıt harcanmasının
            nedenlerindendir. Araç egzozlarından çıkan karbonmonoksit gazının
            rölanide çalışırken %3.5 hareket halindeyken %4.5 oranını geçmemesi
            ve yanma özelliği ve kalitesi yüksek yakıtların kullanılması
            gerekmektedir. Araçlarda bulunan katalitik konvertörler araç
            egzozlarından çıkan zehirleyici etkilerini azaltırlar. Yiyecek veya
            içecek atıklarının seyir esnasında araçlardan atılmaması, piknik
            alanlarında bu gibi atıkların çöp bidonlarına atılması ve bu
            alanlarda araçların yıkanmaması gerekmektedir.
          </Text>
          <Text style={styles.H2}>
            Havada Toprakta ve Suda Meydana Gelen Kirlenmeler
          </Text>
          <Text style={styles.p}>
            Temiz havada %78 azot, %21 oksijen, %1.3 diğer gazlar ve %0.03
            oranında karbondioksit bulunur. Bu dengenin bozulması havanın
            kirlenmesi demektir. Atmosferin içinde bulunan gazların, güneş
            ışığını geçirmek ve ısıyı tutmak gibi özellikleri vardır. Bu özellik
            sayesinde yeryüzünün ısı kaybı önlenmiş olur. Ancak; atmosferi
            oluşturan gaz dengesinin bozulması, ısıyı tuma özelliği bulunan
            gazların artması küresel ısınmaya neden olmaktadır. Ayrıca araç
            egzozlarından çıkan bazı gazlar havadaki buharla birleşerek insan
            sağlığına, tarihi yapılara, binalara, ormanların yaprak
            gelişimlerine zarar veren asit yağmurlarını oluşturmakta; toprağa
            inerek ve yeraltı sularına karışarak bitkiler ve suda yaşayan
            canlıları da etkilemektedir.
          </Text>
          <Text style={styles.H2}>Gürültü</Text>
          <Text style={styles.p}>
            Kulağın duyabildiği en küçük titreşime ses denir ve ses birimi
            “desibel (dB)”dir. İnsan sağlığıını ve konforunu, fizisel,
            fizyolojik ve psikolojik performanslarını etkileyecek derecede
            şiddetli sesler gürültüdür. Sanayi tesisleri, raylı sistem araçları,
            uçaklar, hoparlör sesleri, eğlence yerleri, motorlu ve motorsuz
            karayolu taşıtları gürültü kaynaklarıdır. Trafikle ilgili olarak
            araçların yapım ve kullanım açısından karayolu yapısına ve
            güvenliğine uygun olması ve gürültü seviyesi, egzoz sistemleri ile
            ilgili olarak yönetmeliklere uygun olması, araçlarda bulunan ve
            motor gürültüsünü en az seviyeye düşüren susturucu parçaların
            aralardan çıkarılmaması, sesli uyarı cihazları (kornaları)nın
            yönetmelikte belirtilen şekilde bulundurulması ve kullanılması
            zorunludur.
          </Text>
          <Text style={styles.H1}>
            Araçlarda Bulundurulması Zorunlu Gereçler
          </Text>
          <Text style={styles.p}>
            Yönetmelikte yer alan ve araçlarda bulundurulması gereken
            teçhizatlar şunlardır:
          </Text>
          <Text style={styles.H3}>İç Lamba</Text>
          <Text style={styles.p}>
            Taksi gibi ücretle yolcu taşıyan araçlarda
          </Text>
          <Text style={styles.H3}>Takoğraf</Text>
          <Text style={styles.p}>Otobüs, kamyon ve çekicilerde</Text>
          <Text style={styles.H3}>Taksimetre</Text>
          <Text style={styles.p}>Taksilerde</Text>
          <Text style={styles.H3}>Yangın Söndürme Cihazı</Text>
          <Text style={styles.p}>
            Otomobil, minibüs, kamyonetlerde 1 kg’lık en az 1 adet Otobüs ve
            mafsallı otobüslerde 6 kg’lık 1 adet 12 tondan fazla olan kamyon
            çekicilerde 6 kg’lık 2 adet Tehlikeli madde taşıyan araçlarda 6
            kg’lık en az 2 adet (Bu cihazlardan en az biri sürücünün hemen
            yanında bulunacaktır.)
          </Text>
          <Text style={styles.H3}>Reflektör</Text>
          <Text style={styles.p}>
            Motosiklet ve motorlu bisiklet hariç bütün motorlu taşıtlarda,
            normal hava şartlarında devrilmeyecek bir şekilde 150 metreden
            görülecek kırmızı ışık veren veya yansıtan en az iki adet reflektör
          </Text>
          <Text style={styles.H3}>Stepne</Text>
          <Text style={styles.p}>
            Motosiklet ve lastik tekerlekli traktörler hariç, şehirlerarası
            yolcu taşıyan bütün motorlu araçlarda
          </Text>
          <Text style={styles.H3}>Tekerlek Takozu</Text>
          <Text style={styles.p}>
            Otobüslerde, yüklü ağırlığı 3.5 tondan fazla olan bütün motorlu
            taşıtlarda ve azami yüklü ağırlığı 750 kg’dan fazla olan iki
            dingilli römorklarda 1 adet, 3 veya daha fazla dingilli motorlu
            taşıtlarda 2 adet
          </Text>
          <Text style={styles.H3}>Emniyet Kemeri</Text>
          <Text style={styles.p}>
            Otomobil ve tescil bakımından otomobil gibi işlem gören arazi
            taşıtları ve minibüslerde
          </Text>
          <Text style={styles.H3}>Koruma Başlığı ve Koruma Gözlüğü</Text>
          <Text style={styles.p}>Yüklü motosikletli hariç motosikletlerde</Text>
          <Text style={styles.H3}>Reflektör İşareti</Text>
          <Text style={styles.p}>
            Bisiklet, motorlu bisiklet ve motosikletlerde
          </Text>
          <Text style={styles.H3}>Telsiz ve Haberleşme Cihazı</Text>
          <Text style={styles.p}>İl ve ilçelerde çalışan taksilerde</Text>
          <Text style={styles.H3}>
            Sağır ve Dilsizlerin Araçlarını Belirleyen İşaret
          </Text>
          <Text style={styles.p}>Otomobillerde 2 adet</Text>
          <Text style={styles.H3}>
            Yüklü ve Yüksüz Ağırlıkları Belirleyen İşaretler
          </Text>
          <Text style={styles.p}>Yük taşıyan kamyonlarda 1 adet</Text>
          <Text style={styles.H3}>Yangın Söndürme Cihazı</Text>
          <Text style={styles.p}>
            Otomobil, minibüs, kamyonetlerde 1 kg’lık en az 1 adet Otobüs ve
            mafsallı otobüslerde 6 kg’lık 1 adet 12 tondan fazla olan kamyon
            çekicilerde 6 kg’lık 2 adet Tehlikeli madde taşıyan araçlarda 6
            kg’lık en az 2 adet (Bu cihazlardan en az biri sürücünün hemen
            yanında bulunacaktır.)
          </Text>
          <Text style={styles.H3}>Geri Aydınlatma Lambası</Text>
          <Text style={styles.p}>
            Sis lambası, cam içi stop lambası, rüzgarlık
          </Text>
          <Text style={styles.H3}>Çekme Halatı</Text>
          <Text style={styles.p}>
            Otomobil, minibüs, otobüs, kamyonet, kamyon, çekici araçlar ve
            traktörlerde
          </Text>
          <Text style={styles.H3}>İlk Yardım Çantası</Text>
          <Text style={styles.p}>
            Otomobil, minibüs, kamyonet, otobüs, kamyon ve traktörlerde
          </Text>
          <Text style={styles.H3}>Engel İşareti</Text>
          <Text style={styles.p}>
            Otobüs, kamyon ve çekicilerde bulundurulmalıdır.
          </Text>
          <Text style={styles.H1}>Trafik Suçları ve Karşılığı Cezalar</Text>
          <Text style={styles.p}>
            Sürücü belgelerinin geçici olarak geri alınması hariç olmak üzere,
            hafif para cezası ile birlikte hafif hapis cezasını ve belgelerin
            geri alınması ve iptali, işyerlerinin kapatılması cezasını
            gerektiren suçlara ilişkin davalara “Trafik Mahkemeleri”nde,
            bunların olmadığı yerlerde ise “Sulh Ceza Mahkemeleri”nde bakılır.
          </Text>
          <Text style={styles.H2}>
            Suç veya Ceza Tutanaklarının Düzenlenmesi ve Para Ödenmesi
          </Text>
          <Text style={styles.p}>
            Suç veya ceza tutanakları, Emniyet Genel Müdürlüğününü “Trafik
            Zabıtası Personeli”, diğer birimlerdeki “Emniyet Hizmetleri Sınıfı
            Personeli” ve Jandarma Genel Komutanlığının, Karayolları Genel
            Müdürlüğünün ve Ulaşırma Bakanlığının yetkili kıldığı personlleri
            tarafından düzenlenir. Trafik idari para cezaları kredi kartı ile de
            ödenebilir. Ancak ödeme derhal yapılmadığı takdirde para cezalarının
            tutanağın tebliğ tarihinden itibaren bir ay içinde ödenmesi gerekir.
            Bir ay içinde ödenmeyen cezalara %5 faiz uygulanır; aylık faizin
            hesaplanmasında ay kesirleri tam olarak dikkate alınır ve bu suretle
            bulunacak tutar cezanın iki katını geçemez.
          </Text>
          <Text style={styles.H2}>
            Ceza Puanı Uygulaması ve Sürücü Belgelerinin Geri Alınması
          </Text>
          <Text style={styles.p}>
            Karayolları Trafik kanunun suç saydığı fiilden dolayı haklarında
            ceza uygulanan sürücülere, aldıkları her ceza için “Ceza Puanı
            Cetveli”nde belirlenen ceza puanı verilir. Trafik suçunun işlendiği
            tarihten geriye doğru bir yıl içinde toplam 100 ceza puanını aştığı
            tespit edilen sürücülerin sürücü belgeleri 2 ay sürü ile geri alınır
            ve Motorlu Taşıt Sürücüleri Kursu Yönetmeliğine göre eğitime tabi
            tutulur. Aynı yıl içinde iki defa 100 ceza puanını dolduran
            sürücülerin sürücü belgeleri 4 ay süre ile geri alınır ve
            psiko-teknik değerlendirme ve psikiyatri uzmanının muayenesine tabi
            tutulurlar. Bir yıl içinde üçüncü defa 100 ceza puanını dolduran
            sürücülerin sürücü belgesi süresiz olarak iptal edilir. Ölümle
            sonuçlanan trafik kazalarına asli kusurlu olarak sebebiyet veren
            sürücülerin, sürücü belgeleri ise 1 yıl süre ile geri alınır.
          </Text>
          <Text style={styles.H1}>Trafik Kazaları ve Trafik Cezaları</Text>
          <Text style={styles.H2}>
            Trafik Kazasına Karışanların Sorumlulukları
          </Text>
          <Text style={styles.p}>
            Trafik kazasında olaya karışanlardan yaralanmamış veya hafif yaralı
            olan araç sürücüleri, hemen durmak, trafik günveliğini tehlikeye
            sokmamak için ışıklı işaret veya yansıtıcı cihazları koyarak gerekli
            tedbirleri almak, yetkililere haber vermek, ölümlü , yaralanmalı
            veya hasarlı kazalarda can ve mal güvenliğini etkilemeyen
            sorumluluğun belirlenmesine yarayacak iz ve deliller dahil kaza
            yerindeki durumu değiştirmemek, olayda taraf olanlar, istendiğinde,
            kimlik ve adres bilgileri ile sürücü, trafik, sigorta gibi bilgi ve
            belgeleri göstermek, yetkililere haber vermek ve yetkililer
            gelinceye kadar kaza yerinden ayrılmamak, başında sahibi veya
            sorumlusu bulunmayan motorlu araçlar, mal ya da mülklere zarar
            verdikleri takdirde bunların sahibini bulmak, bulunmadığı takdirde
            görülebilecek yerlerine yazılı bilgi bırakmak zorundadırlar. Sürücü
            belgesiz veya yetersiz sürücü belgesi ile araç kullanma, alkollü
            araç kullanma, trafik sigortasının olmaması, kazada üçüncü kişileirn
            malllarına zarar verme, sürücüde yaş küçüklüğü, kamu kurumlarına ait
            mallarda meydana gelen zararlar veya ölüm ve yaralanmalarla
            sonuçlanan kazalar haricinde sürücüler kaza yerinde yetkililileri
            beklemeden fotoğraf çekip kaza tespit tutanağı düzenleyebilir ve
            kaza yerinden ayrılabilirler. Ancak daha sonra yetkililerden kaza
            tespit tutanağı düzenlemesini talep edemezler.
          </Text>
          <Text style={styles.H2}>Trafik Kazalarında Yükümlülük</Text>
          <Text style={styles.p}>
            Meydana gelen trafik kazalarında, kazaya karışanlar veya olay
            yerinden geçmekte olanlar, ilk yardım tedbirleri almak, olayı en
            yakın zabıta veya sağlık kuruluşuna bildirmek, yetkililerin gerekli
            görmesi halinde yaralıları en yakın sağlık kuruluşuna götürmekle
            yükümlüdürler. Üzerinde suç belirtisi olan araçların herhangi bir
            servis istasyonu, garaj, park yeri gibi yerlere götürülmesi
            durumunda buraların yetkilileri durumu yetkililere bildirmek
            zorundadırlar.
          </Text>
          <Text style={styles.H2}>
            Trafik Kazalarında Asli (Esas) Kusur Sayılan Haller
          </Text>
          <Text style={styles.p}>
            Kırmızı ışıklı trafik işaretlerinde veya yetkili memurun dur
            işaretinde geçme “Taşıt Giremez” trafik işareti bulunan karayoluna
            veya bölünmüş karayoluna karşı yönden gelen trafiğin kullandığı
            şerit, rampa ve bağlantı yollarına girme İkiden fazla şeritli taşıt
            yollarında karşı yönden gelen trafiğin kullanıldığı şerit veya yol
            bölümüne girme Arkadan çarpma Geçme yasağı olan yerlerde geçme
            Doğrultu değiştirme manevralarını yanlış yapma Şeride tecavüz etme
            Kavşaklarda geçiş önceliğine uymama Kaplamanın dar olduğu yerlerde
            geçiş önceliğine uymama Manevraları düzenlenen genel şartlara uymama
            Yerleşim birimleri dışındaki karayolunun taşıt yolu üzerinde,
            zorunlu haller dışında park etme ve duraklama ve her durumda gerekli
            tedbirleri almama Park için ayrılmış yerlerde veya taşıt yolu
            dışında kurallara uygun olarak park edilmiş araçlara çarpma
          </Text>
          <Text style={styles.H2}>Sürücü Kusurlarının Tespiti</Text>
          <Text style={styles.p}>
            Kazalarda, adli mevzuat ve yargılama hükümleri saklı kalmak
            koşuluyla kazaya karışan sürücülerin kusuru oranları, olay bir bütün
            olarak kabul edilip, 100 ya da 8 tam puan esas alınarak, tek başına
            asli kusurlu olan taraf ile diğer trafik kural, kısıtlama, yasaklama
            ve talimatlarına uymayan arasında paylaştırılır.
          </Text>
          <Text style={styles.H2}>Trafik Kazalarına El Konulması</Text>
          <Text style={styles.p}>
            Trafik kazalarına adli yönden gereği yapılmak üzere, mahalli genel
            zabıtaca, kaza nedenlerini, iz ve delillerini belirleyecek “Kaza
            Tespit Tutanağı” düzenlemek üzere de Trafik Zabıtası (polis veya
            jandarma) tarafından el konulur. Bu kişiler kaza yerinde gerekli
            işaretlemeleri yaparak karayolunu trafiğe açmaya yetkilidirler.
          </Text>
          <Text style={styles.H1}>
            Ehliyet Sınıfları ve Sürücü Adaylarıyla İlgili Koşullar
          </Text>
          <Text style={styles.p}>
            Sürücü belgesi alacak olanların, almak istediği belgenin sınıfına
            göre yaşını doldurmuş, gerekli eğitimi tamamlamış olması ve
            yönetmelikte belirtilen suçlardan hükümlü olmamaları gerekmektedir.
            Ayrıca hükümlere uygun olarak beden ve ruh sağlığı bakımından
            sürücülük yapmalarına engel bir durumun olmadığını sağlık raporu ile
            belgelendirmiş olmaları ve sürücü kurslarına katılmış ve yapılan
            sınavları başarı ile tamamlayarak sertifikalarını almış olmaları
            gerekmektedir.
          </Text>
          <Text style={styles.H3}>K Sınıfı:</Text>
          <Text style={styles.p}>
            A1, A2, F ve G sınıfları hariç sürücü belgelerinden herhangi birini
            almak isteyen sürücü adaylarının karayolunda öğrenmek amacıyla araç
            sürebilmesi için ilgili sürücü kursu tarafından verilen belgedir.
            Uluslararası Sürücü Belgesi; ikili ve çoklu anlaşmalar uyarınca 1
            yıl süre ile verilir, verildiği ülke dışındaki ülkeler için geçerli
            olan bu belgeyi Türkiye Turing Otomobil Kurumu belirtilen esaslara
            göre verir.
          </Text>
          <Text style={styles.H3}>B-C ve E sınıfı:</Text>
          <Text style={styles.p}>
            sürücü belgesi sahipleri en çok yüklü ağırlığı 0.75 ton olan hafif
            römork takarak araçlarını kullanabilirler. 0.75 tonun üstündeki
            römorkları araçlarına takıp sürebilmeleri için uygulamalı sınava
            girmeleri ve belgelerine işlenmiş olması gerekir. Sürücü belgesi
            olmayan veya sürücü belgesinin vermiş olduğu yetkinin dışında araç
            kullandığı tespit edilenler, ilk tespitte 1 aydan 2 aya kadar,
            tekrarında ise 2 aydan 3 aya kadar hapis cezası ile
            cezalandırılırlar. Sürücülerin sağlık durumlarında araç kullanmaya
            engel teşkil edecek bir bedensel değişiklik görülmesi ve tutanakla
            tespiti halinde sürücü belgesi süresiz olarak geri alınır ve sağlık
            muayenesi istenir. Renk körlüğü olanlar herhangi bir şart olmaksızın
            sürücü olabilirler ancak; gece körlüğü olanlar gün doğumundan 1 saat
            önce ile gün batımından 1 saat sonraki zaman dilimi içerisinde araç
            kullanabilirler. İşitme cihazı kullananlar ticari olmamak şartı ile
            B sınıfı belge alabilirler. İşitme ve konuşma engellilere ise ticari
            olmamak ve sadece otomobil kullanmak üzere H sınıfı sürücü belgesi
            verilir. Bu sürücülerin kullandıkları aracın arka camına işitme ve
            konuşma engelli olduklarını belirten işaretler konulmak zorundadır.
            Sürücülerin 45-60 yaş arası 5 yılda bir, 60 yaş sonrasında ise 3
            yılda bir sağlık kontrolü gerekmektedir. Sürücü belgesinin sahte
            olduğu, hile ile alındığı, şartlarına uygun olmadan verildiği tespit
            edilenlerin belgeleri geri alınır ve haklarında adli işlem yapılır.
            Sürücüler ikamet adres değişikliklerini 30 gün içinde belgeyi veren
            tescil kuruluşuna bildirmek ve yanlarında bulundurarak istendiğinde
            yetkililere göstermek zorundadırlar.
          </Text>
          <Text style={styles.H1}>
            Otoyol Kuralları ile Koruyucu Tertibatlar
          </Text>
          <Text style={styles.H2}>Otoyol Kuralları</Text>
          <Text style={styles.p}>
            Sürücüler otoyola girerken trafiğin akışını dikkate alarak hızlanma
            şeridinden yaralanarak otoyolun sağ şeridine girmek ve otoyol
            çıkışında ise otoyolun sağ şeridinden yavaşlama şeridine giderek,
            hızını azaltarak rahat ve güvenli çıkış yapmak zorundadırlar.
            Otoyollarda asgari hız 40 km/s, azami hız ise 120 km/s‘tir.
            Otoyollarda duraklamak, park etmek, geri gitmek ve geri dönmek
            yasaktır. Herhangi bir arıza durumunda taşıtın emniyet şeridine
            alınarak işaretlenmesi gerekmektedir. EDS: Bu sistem trafiğin
            kontrolünü sağlamak ve şehir yaşantısını kurallara uygun bir yapıya
            kavuşturmak için trafikte kural ihlali yapan araçları tespit etmek
            amacıyla faaliyete geçirilen bir sistemdir.
          </Text>
          <Text style={styles.p}>
            Sürücülerin ve Yolcuların Koruyucu Tertibat KullanmalarıÜç
            tekerlekli yük motosikletleri hariç motosiklet ve motorlu
            bisikletlerde sürücülerin koruma başlığı ve koruma gözlüğü,
            yolcuların ise koruma başlığı kullanmaları mecburidir. Otomobil ve
            tescilde otomobil gibi işlem gören arazi taşıtlarında sürücü ön
            koltuk ve arka koltukta oturan yolcuların, minibüslerde sürücü ve ön
            koltukta oturan yolcuların, kamyon kamyonet ve çekicilerde sürücü ve
            sürücü yanındaki yolcuların emniyet kemeri kullanmaları zorunludur.
            Ayrıca şehirler arası yolcu taşıyan otobüslerde arka koltuklar hariç
            olmak üzere sürücüsü dahil en ön ve önünde boşluk olan arka
            koltuklarda, iki katlı şehirler arası otobüslerde, merdiven önü, en
            ön ve önünde boşluk olan arka koltuklarda, masa etrafında bulunan
            koltuklardan aracın gidiş yönüne doğru olanlarda oturan yolcular
            için emniyet kemeri bulundurulması ve kullanılması zorunludur.
            Otomobil ve tescilde otomobil gibi işlem gören arazi taşıtları,
            minibüsler, kamyonet, kamyon, çekici ve otobüslerde sürücünün
            yanındaki ön koltukta 10 yaşından küçük çocukların oturtulması
            yasaktır.
          </Text>
          <Text style={styles.H1}>
            Araçların Işıklandırılması ve Işıkların Kullanılması
          </Text>
          <Text style={styles.p}>
            Araçlar, görmek ve diğer araçlar tarafından görülmek için
            ışıklandırılır. Araçların ön kısımlarında beyaz veya sarı, arka
            kısımlarında ise kırmızı ve portakal rengi ışıklar bulunur. Arka
            kısımda sadece geri manevra uyarı ışıkları beyaz olabilir.
          </Text>
          <Text style={styles.H3}>Uzağı Gösteren Işıklar</Text>
          <Text style={styles.p}>
            100 metre mesafeyi aydınlatacak şekilde ayarlanmış olması
            gereklidir. Geceleri yerleşim birimleri dışında ve yeterince
            aydınlatılmamış tünellerde kullanılması zorunludur.
          </Text>
          <Text style={styles.H3}>Yakını Gösteren Işıklar</Text>
          <Text style={styles.p}>
            25 metre mesafeyi aydınlatacak şekilde ayarlanmış olması gereklidir.
            Sürücülerin yeterli mesafeyi açık olarak görebildiği ve kendi
            aracının da yeterli uzaklıktan görülebildiği hallerde yakını
            gösteren ışıklar kullanılabilir. Aydınlatmanın yeterli olduğu
            yerlerde, gündüzleri sisli, yağışlı ve görüşün yeterli olmadığı hava
            şartlarında, öndeki araç takip edilirken, öndeki aracı geçme
            sırasında yan yana gelinceye kadar ve karşılaşmalarda kullanılması
            zorunludur. Yakını ve uzağı gösteren ışıkların çok kısa süre ile
            sırayla yakılması uyarı anlamındadır. Sürücüler geceleri öndeki
            aracı geçmeden önce öndeki aracı uyarmak ve ilerisi görülmeyen
            kavşak, dönemeç ve tepeüstü gibi yerlere yaklaşırken gelişini haber
            vermek için ışıkları ile uyarı yapmak zorundadırlar.
          </Text>
          <Text style={styles.H3}>Sis Işıkları</Text>
          <Text style={styles.p}>
            Sis, pus, tipi gibi görüşün yeterli olmadığı hava şartlarında yakın
            veya uzak farlarla birlikte kullanılır. Bu gibi hava şartları
            dışında sis ışıklarının farlarla birlikte kullanılması yasaktır.
          </Text>
          <Text style={styles.H3}>Arka Plaka Lambası</Text>
          <Text style={styles.p}>
            Arka plakayı 20 metre mesafeden okunacak şekilde beyaz ışıkla
            aydınlatıyor olmalıdır.
          </Text>
          <Text style={styles.H3}>İç Lamba</Text>
          <Text style={styles.p}>
            Ücretle yolcu taşıyan araçlar iç lamba bulundurmak zorundadır ve bu
            lamba beyaz olmalıdır. Dönüş ışıklarının “geç” anlamında
            kullanılması, sadece park veya sis ışıkları ile araç sürülmesi,
            karşılaşmalarda ışıkların söndürülmesi yasaktır.
          </Text>
          <Text style={styles.H3}>İşaret Reflektörü</Text>
          <Text style={styles.p}>
            Normal hava şartlarında 150 metre mesafeden görülür bir kenarı 45 cm
            kırmızı renkli eşkenar üçgen ve kenar genişliği 5 cm‘dir. Yol
            yüzeyine konulduğunda ayak yapısı karayolunu kullanan diğer
            araçların rüzgarından devrilmeyecek sağlamlıkta olmalıdır ve
            motosiklet ve motorlu bisikletler hariç diğer bütün motorlu
            araçlarda 2 adet bulundurulması zorunludur.
          </Text>
          <Text style={styles.H3}>Traktörlerde İşaret Reflektörü</Text>
          <Text style={styles.p}>
            Römork ve yarı römorkların arkasına diğer sürücülerin görebilmesi
            için takılacak olan yansıtıcı bir kenarı 35 cm eşkenar üçgen kırmızı
            renkli olmalıdır.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {Trafikvecevre};

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
