export type Essay = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Yönetim Sistemi' | 'Dashboard' | 'Aile Şirketi';
  date: string;
  readingTime: string;
  tone: 'tile-mist' | 'tile-peach' | 'tile-rose';
  thesis: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

export const essays: Essay[] = [
  {
    slug: 'kobinin-sorunu-yazilim-eksikligi-degildir',
    title: 'KOBİ’nin sorunu neden yazılım eksikliği değildir?',
    excerpt:
      'Büyüyen şirketlerde asıl eksik çoğu zaman yeni bir araç değil; karar, rol, KPI ve sürecin aynı hatta bağlanmasıdır.',
    category: 'Yönetim Sistemi',
    date: '2026-06-23',
    readingTime: '5 dk',
    tone: 'tile-mist',
    thesis:
      'Yazılım, iyi kurulmuş bir yönetim sisteminin kaldıracıdır. Sistem yoksa yalnızca dağınıklığı daha hızlı görünür hale getirir.',
    sections: [
      {
        title: 'İlk refleks genellikle araç aramaktır.',
        paragraphs: [
          'Bir KOBİ büyürken aynı sorun tekrar eder: işler kişilere bağımlı kalır, kararlar gecikir, raporlar çoğalır ama davranış değişmez. Bu noktada ilk refleks yeni bir yazılım aramaktır.',
          'CRM, ERP, görev yönetimi, dashboard ya da yapay zeka ajanları gerekli olabilir. Fakat bu araçlar, şirketin karar düzenini tek başına kurmaz.',
        ],
      },
      {
        title: 'Eksik olan yönetim dilidir.',
        paragraphs: [
          'Kararın kime ait olduğu, hangi KPI’ın hangi davranışı değiştireceği, sürecin nerede başlayıp nerede biteceği net değilse yazılım yalnızca bu belirsizliği kayda alır.',
          'Bu yüzden doğru soru “hangi yazılımı alalım?” değil, “hangi yönetim davranışını sistematik hale getireceğiz?” sorusudur.',
        ],
      },
      {
        title: 'Doğru sıra sistemi kurar.',
        paragraphs: [
          'Önce problem tanımlanır. Sonra rol, KPI, süreç ve yönetim ritmi aynı masaya konur. Yazılım bu yapının üzerine oturduğunda gerçek değer üretir.',
          'Aykutkaraca.com’un ana tezi bu nedenle basittir: daha fazla yazılım değil, daha iyi yönetilen şirketler.',
        ],
      },
    ],
  },
  {
    slug: 'dashboard-yonetim-sistemi-degildir',
    title: 'Dashboard neden yönetim sistemi değildir?',
    excerpt:
      'Dashboard bir ekran değil, şirketin karar alma biçiminin görünür hale gelmiş sonucudur.',
    category: 'Dashboard',
    date: '2026-06-23',
    readingTime: '4 dk',
    tone: 'tile-peach',
    thesis:
      'Dashboard, yönetimi ikame etmez. Yalnızca yönetim ritmi, sorumluluk ve karar kalitesi varsa anlam üretir.',
    sections: [
      {
        title: 'Rapor görmek yönetmek değildir.',
        paragraphs: [
          'Bir dashboard şirketi yönetmez. Sadece şirketin nasıl yönetildiğini daha görünür hale getirir. Karar düzeni dağınıksa dashboard da dağınıklığı parlatır.',
          'Bu nedenle ekrana koyulacak metriklerden önce, hangi kararların hangi sıklıkta alınacağı netleşmelidir.',
        ],
      },
      {
        title: 'KPI davranış değiştirmelidir.',
        paragraphs: [
          'Ölçülen her şey yönetilmez. İyi KPI, sadece sayı üretmez; hangi davranışın değişmesi gerektiğini açık eder.',
          'KPI’ın sahibi, ritmi ve aksiyon bağlantısı yoksa dashboard bir seyir ekranına dönüşür.',
        ],
      },
      {
        title: 'Dashboard sonuç katmanıdır.',
        paragraphs: [
          'Doğru sıra KPI listesi yapmakla başlamaz. Önce yönetim problemi tanımlanır, sonra rol ve süreç netleşir, ardından karar ritmi kurulur.',
          'Dashboard bu yapının sonucudur. Ekranın gücü, arkasındaki yönetim sisteminden gelir.',
        ],
      },
    ],
  },
  {
    slug: 'aile-sirketinde-karar-mimarisi',
    title: 'Aile şirketinde karar mimarisi nasıl kurulur?',
    excerpt:
      'Kurucunun sezgisi büyük bir avantajdır; ama şirket büyüdükçe bu sezginin sisteme çevrilmesi gerekir.',
    category: 'Aile Şirketi',
    date: '2026-06-23',
    readingTime: '6 dk',
    tone: 'tile-rose',
    thesis:
      'Aile şirketinde profesyonelleşme, kurucunun aklını dışlamak değil; onu tekrar edilebilir bir karar sistemine çevirmektir.',
    sections: [
      {
        title: 'Kurucu aklı şirketin merkezindedir.',
        paragraphs: [
          'Bir aile şirketinde işlerin yürümesi çoğu zaman kurucunun sezgisine, hafızasına ve hızlı karar alma becerisine dayanır. Bu zayıflık değil, ciddi bir birikimdir.',
          'Sorun, bu birikimin yalnızca kurucunun zihninde kalması ve ikinci kademe tarafından aynı netlikte okunamamasıdır.',
        ],
      },
      {
        title: 'Karar hakları yazılmalıdır.',
        paragraphs: [
          'Kim hangi kararı alır, hangi karar hangi veriyle desteklenir, hangi konu aile masası ile profesyonel yönetim masası arasında nasıl ayrılır? Bu sorular yazılı hale gelmeden sistem oluşmaz.',
          'Karar mimarisi, yetki dağıtmak kadar ortak dil kurmakla ilgilidir.',
        ],
      },
      {
        title: 'Ritim güven üretir.',
        paragraphs: [
          'Haftalık, aylık ve çeyreklik ritimler karar kalitesini yukarı çeker. Herkes aynı takvimde aynı sorulara bakmaya başladığında şirket kişilere daha az bağımlı hale gelir.',
          'Bu, aile şirketinin ruhunu azaltmaz. Tam tersine, kurucunun birikimini daha geniş bir ekibin taşıyabileceği hale getirir.',
        ],
      },
    ],
  },
];

export function getEssayBySlug(slug: string) {
  return essays.find((essay) => essay.slug === slug);
}
