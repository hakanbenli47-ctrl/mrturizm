"use client";

import { motion, type Variants } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Home as HomeIcon,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

const phone = "905533545018";

const motionEase = [0.25, 0.1, 0.25, 1] as const;

const animasyon: Variants = {
  gizli: { opacity: 0, y: 34 },
  goster: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: motionEase },
  },
};

const kartAnimasyon: Variants = {
  gizli: { opacity: 0, y: 24, scale: 0.97 },
  goster: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: motionEase },
  },
};

const siraliAnimasyon: Variants = {
  gizli: {},
  goster: {
    transition: { staggerChildren: 0.09 },
  },
};

type KartItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  points?: string[];
  image?: string;
};

const sayfaIcerigi = {
  marka: "MİR TURİZM",

  header: {
    kucukYazi: "MİR TURİZM",
    baslik: "Engelli Araç • Engelli Taksi • Hasta Nakil Aracı",
    buton: "WhatsApp",
  },

  hero: {
    rozet: "Engelli ve hasta nakil ihtiyaçları için güvenli ulaşım",
    baslik1: "Engelli araç,",
    baslik2: "engelli taksi ve hasta nakil.",
    aciklama:
      "Mir Turizm olarak tekerlekli sandalye kullanan bireyler, yürümekte zorlanan yaşlılar, hastane randevusuna gidecek hastalar ve refakatçili ulaşım ihtiyacı olan kişiler için güvenli, konforlu ve planlı ulaşım hizmeti sunuyoruz.",
    etiketler: [
      "Engelli Araç",
      "Engelli Taksi",
      "Hasta Nakil Aracı",
      "Hastane Transferi",
    ],
    anaButon: "Randevu ve Fiyat Al",
    ikinciButon: "Hemen Ara",
    gorsel: "/vip1.jpg",
    gorselUstYazi: "Engelsiz ve Güvenli Ulaşım",
    gorselBaslik: "Yolculuğunuz güvenle planlanır.",
    gorselAciklama:
      "Alınacak konum, gidilecek adres, tarih, saat ve ihtiyaç durumuna göre en uygun araç yönlendirilir.",
  },

  istatistikler: [
    ["7/24", "Bilgi ve Randevu"],
    ["100%", "Planlı Ulaşım"],
    ["Güvenli", "Araç Desteği"],
    ["Refakat", "Uyumlu Hizmet"],
  ],

  ozetKartlar: [
    {
     icon: Accessibility,
      title: "Engelli araç",
      desc: "Tekerlekli sandalye kullanan bireyler için erişilebilir ve güvenli ulaşım desteği.",
    },
    {
      icon: Accessibility,
      title: "Engelli taksi",
      desc: "Şehir içi hastane, ev, bakım merkezi ve özel adres transferleri için pratik çözüm.",
    },
    {
      icon: Stethoscope,
      title: "Hasta nakil",
      desc: "Hastane randevusu, taburcu işlemi ve kontrollü ulaşım ihtiyaçlarına özel hizmet.",
    },
    {
      icon: ShieldCheck,
      title: "Güvenli süreç",
      desc: "İniş-biniş, sabitleme, güzergah ve zaman planı dikkatle oluşturulur.",
    },
  ] satisfies KartItem[],

  hizmetler: {
    rozet: "Hizmetlerimiz",
    baslik: "Engelli ve hasta ulaşımında ihtiyaç duyulan tüm ana hizmetler.",
    aciklama:
      "Her hizmette temel amacımız; yolcunun güvenli, rahat, zamanında ve saygılı bir şekilde ulaşımını sağlamaktır.",
    kartlar: [
      {
        icon: Accessibility,
        title: "Engelli Araç Hizmeti",
        desc: "Tekerlekli sandalye kullanan yolcular için iniş-biniş süreci kolaylaştırılmış, erişilebilir araç desteği sağlanır.",
        image: "/vip1.jpg",
        points: [
          "Tekerlekli sandalye uyumlu ulaşım",
          "Güvenli araç içi sabitleme",
          "Kapıdan alım ve adrese bırakma",
          "Refakatçi ile yolculuk uyumu",
        ],
      },
      {
        icon: Accessibility,
        title: "Engelli Taksi",
        desc: "Şehir içinde hastane, ev, iş yeri, bakım merkezi, otel veya özel adreslere güvenli engelli taksi hizmeti sunulur.",
        image: "/vip-2.jpg",
        points: [
          "Şehir içi transfer",
          "Randevulu araç yönlendirme",
          "Yaşlı ve engelli bireylere destek",
          "Kısa ve uzun mesafe ulaşım",
        ],
      },
      {
        icon: Stethoscope,
        title: "Hasta Nakil Aracı",
        desc: "Yürümekte zorlanan, tedaviye gidecek veya hastaneden çıkış yapacak kişiler için konforlu hasta nakil ulaşımı planlanır.",
        image: "/vip11.jpg",
        points: [
          "Hastane randevusu transferi",
          "Taburcu sonrası eve ulaşım",
          "Kontrol ve tedavi günü taşıma",
          "Dikkatli ve sakin sürüş",
        ],
      },
      {
        icon: HeartHandshake,
        title: "Refakatçili Ulaşım Desteği",
        desc: "Yolculuk sırasında yanında refakatçi bulunması gereken kişiler için araç ve koltuk düzeni ihtiyaca göre hazırlanır.",
        image: "/vip-4.jpg",
        points: [
          "Aile/refakatçi uyumlu planlama",
          "Kapı önü karşılama",
          "Güvenli iniş-biniş desteği",
          "Saygılı ve sabırlı hizmet",
        ],
      },
    ] satisfies KartItem[],
  },

  kullanimAlanlari: {
    rozet: "Nerelerde Kullanılır?",
    baslik: "Evden hastaneye, hastaneden eve veya özel adreslere güvenli ulaşım.",
    kartlar: [
      {
        icon: Stethoscope,
        title: "Hastane randevuları",
        desc: "Muayene, kontrol, fizik tedavi, diyaliz veya düzenli tedavi süreçleri için planlı ulaşım.",
      },
      {
        icon: HomeIcon,
        title: "Taburcu sonrası ulaşım",
        desc: "Hastaneden eve dönüşlerde hastanın konforuna uygun dikkatli transfer süreci.",
      },
      {
        icon: MapPin,
        title: "Şehir içi özel adresler",
        desc: "Ev, otel, bakım merkezi, huzurevi, iş yeri veya özel davet noktalarına ulaşım.",
      },
      {
        icon: Users,
        title: "Yaşlı birey transferi",
        desc: "Yürümekte zorlanan büyüklerimiz için sakin, sabırlı ve destekleyici ulaşım hizmeti.",
      },
      {
        icon: CalendarCheck,
        title: "Randevulu planlama",
        desc: "Tarih, saat, alınacak yer ve gidilecek adres netleştirilerek araç hazırlanır.",
      },
      {
        icon: ShieldCheck,
        title: "Güvenli araç içi süreç",
        desc: "Yolculuk öncesi ihtiyaç değerlendirilir, iniş-biniş ve sabitleme dikkatle yapılır.",
      },
    ] satisfies KartItem[],
  },

  araclar: {
    rozet: "Araç Seçenekleri",
    baslik: "İhtiyaca göre uygun araç tipi belirlenir.",
    kartlar: [
      {
        title: "Engelli Taksi",
        desc: "Şehir içi kısa ve orta mesafe ulaşım ihtiyaçları için pratik çözüm.",
        image: "/vip-2.jpg",
      },
      {
        title: "Engelli Araç",
        desc: "Tekerlekli sandalye kullanan bireyler için erişilebilir araç desteği.",
        image: "/vip1.jpg",
      },
      {
        title: "Hasta Nakil Aracı",
        desc: "Hastane, tedavi ve taburcu sonrası ulaşım için konforlu taşıma.",
        image: "/vip11.jpg",
      },
    ],
  },

  nedenBiz: {
    rozet: "Neden Mir Turizm?",
    baslik: "Hasta ve engelli ulaşımında güven, zamanlama ve hassasiyet önemlidir.",
    kartlar: [
      {
        icon: ShieldCheck,
        title: "Güvenli",
        desc: "Yolculuk öncesi ihtiyaçlar alınır, araç ve güzergah buna göre hazırlanır.",
      },
      {
        icon: Clock,
        title: "Tam zamanında",
        desc: "Hastane randevusu ve planlı ulaşım süreçlerinde saat hassasiyetiyle hareket edilir.",
      },
      {
        icon: Star,
        title: "Konforlu",
        desc: "Yolcunun durumuna göre rahat, sakin ve özenli bir yolculuk deneyimi sunulur.",
      },
      {
        icon: Sparkles,
        title: "Hijyenik",
        desc: "Araç temizliği, düzeni ve yolculuk konforu hizmetin önemli parçasıdır.",
      },
    ] satisfies KartItem[],
  },

  surec: {
    rozet: "Süreç Nasıl İlerler?",
    baslik: "Randevu oluşturmak için birkaç bilgi yeterlidir.",
    adimlar: [
      {
        title: "Bilgiler alınır",
        desc: "Alınacak adres, gidilecek adres, tarih, saat ve yolcunun ihtiyaç durumu öğrenilir.",
      },
      {
        title: "Araç belirlenir",
        desc: "Engelli araç, engelli taksi veya hasta nakil aracı ihtiyaca göre seçilir.",
      },
      {
        title: "Plan netleşir",
        desc: "Saat, güzergah, refakatçi durumu ve fiyat bilgisi karşılıklı olarak netleştirilir.",
      },
      {
        title: "Transfer yapılır",
        desc: "Belirlenen saatte güvenli, konforlu ve dikkatli ulaşım hizmeti sağlanır.",
      },
    ],
  },

  yorumlar: {
    rozet: "Hizmet Anlayışımız",
    baslik: "Bu alanda güven veren hizmet dili çok önemlidir.",
    kartlar: [
      {
        title: "Hastane ulaşımında destek",
        desc: "Randevu saatine yetişmek, iniş-biniş sürecini doğru yönetmek ve yolcunun kendini güvende hissetmesini sağlamak önceliğimizdir.",
      },
      {
        title: "Yaşlı ve engelli bireylere hassasiyet",
        desc: "Her yolcuya sabırlı, saygılı ve dikkatli yaklaşılır. Yolculuk yalnızca ulaşım değil, güven sürecidir.",
      },
      {
        title: "Aileler için rahatlık",
        desc: "Yakınınızın ulaşımı önceden planlandığında hem hasta hem aile için süreç daha kontrollü ilerler.",
      },
    ],
  },

  notlar: {
    rozet: "Önemli Bilgilendirme",
    baslik: "Doğru araç için ihtiyaç bilgisi önceden alınmalıdır.",
    maddeler: [
      "Engelli araç, engelli taksi ve hasta nakil aracı hizmetleri randevulu olarak planlanır.",
      "Alınacak adres, gidilecek adres, tarih, saat ve yolcunun hareket durumu önceden paylaşılmalıdır.",
      "Tekerlekli sandalye kullanımı, refakatçi durumu ve kat/asansör bilgisi hizmet planlamasında önemlidir.",
      "Fiyatlandırma mesafe, güzergah, bekleme süresi ve hizmet türüne göre belirlenir.",
    ],
  },

  cta: {
    rozet: "Randevu ve Bilgi",
    baslik: "Engelli araç, engelli taksi veya hasta nakil aracı için hemen iletişime geçin.",
    aciklama:
      "WhatsApp üzerinden alınacak yer, gidilecek adres, tarih, saat ve yolcunun ihtiyaç durumunu gönderin. Size en uygun araç ve hizmet planı hazırlansın.",
    whatsapp: "WhatsApp’tan Randevu Al",
    telefon: "Telefonla Ara",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#12091f] text-[#ffeec7]">
      <style jsx global>{`
        @keyframes rgbText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes softPulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.08);
          }
        }

        @keyframes softFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .rgb-love-text {
          background: linear-gradient(
            90deg,
            #ffe66d,
            #ff8a00,
            #23d5ff,
            #ff5c8a,
            #ffe66d
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: rgbText 5s linear infinite;
        }

        .bg-love {
          background: linear-gradient(
            90deg,
            #ff335f,
            #ff8a00,
            #23d5ff,
            #7c3aed,
            #ff335f
          );
          background-size: 300% 100%;
          animation: rgbText 5s linear infinite;
        }

        .rgb-love-card {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          border: 1px solid rgba(103, 232, 249, 0.2);
          background: rgba(36, 16, 57, 0.9);
          box-shadow: 0 25px 90px rgba(15, 23, 42, 0.22);
        }

        .animate-softPulse {
          animation: softPulse 7s ease-in-out infinite;
        }

        .animate-softPulseSlow {
          animation: softPulse 9s ease-in-out infinite;
        }
      `}</style>

      <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,92,138,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(35,213,255,0.18),transparent_36%),linear-gradient(135deg,#16071f_0%,#2a1044_46%,#0e2846_100%)]" />
        <div className="absolute left-[-160px] top-[-160px] h-[480px] w-[480px] animate-softPulse rounded-full bg-[#ff5c8a]/20 blur-[120px]" />
        <div className="absolute bottom-[-180px] right-[-180px] h-[520px] w-[520px] animate-softPulseSlow rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <header className="mb-10 flex items-center justify-between gap-3 rounded-[1.4rem] border border-fuchsia-300/25 bg-[#291044]/72 px-4 py-4 shadow-2xl backdrop-blur-xl sm:rounded-full sm:px-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] rgb-love-text sm:text-xs">
                {sayfaIcerigi.header.kucukYazi}
              </p>
              <h1 className="mt-1 text-sm font-black rgb-love-text sm:text-xl">
                {sayfaIcerigi.header.baslik}
              </h1>
            </div>

            <a
              href={`https://wa.me/${phone}?text=Merhaba,%20engelli%20ara%C3%A7%20ve%20hasta%20nakil%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-love px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 md:inline-flex"
            >
              {sayfaIcerigi.header.buton}
            </a>
          </header>

          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div
              variants={animasyon}
              initial="gizli"
              animate="goster"
              className="max-w-2xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-[#2a1044]/70 px-4 py-2 backdrop-blur-xl">
                <Sparkles size={15} className="text-[#ffb86b]" />
                <span className="text-xs font-bold rgb-love-text sm:text-sm">
                  {sayfaIcerigi.hero.rozet}
                </span>
              </div>

              <h2 className="text-[38px] font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[84px]">
                <span className="block rgb-love-text">
                  {sayfaIcerigi.hero.baslik1}
                </span>
                <span className="block rgb-love-text">
                  {sayfaIcerigi.hero.baslik2}
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#d8f7ff] sm:text-lg sm:leading-8">
                {sayfaIcerigi.hero.aciklama}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {sayfaIcerigi.hero.etiketler.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/20 bg-[#241039]/80 px-4 py-2 text-xs font-black rgb-love-text shadow-lg sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20engelli%20ara%C3%A7%20/%20engelli%20taksi%20/%20hasta%20nakil%20hizmeti%20i%C3%A7in%20bilgi%20almak%20istiyorum.%0AHizmet%20t%C3%BCr%C3%BC:%0AAl%C4%B1nacak%20yer:%0AGidilecek%20yer:%0ATarih%20/%20Saat:%0AYolcunun%20durumu:`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-love px-6 py-4 text-sm font-black text-white shadow-xl shadow-fuchsia-500/25 transition hover:-translate-y-1 sm:text-base"
                >
                  {sayfaIcerigi.hero.anaButon}
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-[#291044]/80 px-6 py-4 text-sm font-black text-white shadow-lg backdrop-blur-xl transition hover:-translate-y-1 sm:text-base"
                >
                  <Phone size={18} />
                  {sayfaIcerigi.hero.ikinciButon}
                </a>
              </div>

              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {sayfaIcerigi.istatistikler.map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-fuchsia-300/20 bg-[#241039]/80 p-4 shadow-xl backdrop-blur-xl"
                  >
                    <p className="text-xl font-black rgb-love-text">{title}</p>
                    <p className="mt-1 text-xs font-semibold text-[#90e8ff]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={animasyon}
              initial="gizli"
              animate="goster"
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-br from-[#ff5c8a]/30 via-[#23d5ff]/25 to-[#7c3aed]/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-300/25 bg-[#291044]/72 p-3 shadow-2xl backdrop-blur-xl sm:rounded-[2.4rem]">
                <div className="relative min-h-[390px] overflow-hidden rounded-[1.6rem] bg-[#12091f] sm:min-h-[610px]">
                  <img
                    src={sayfaIcerigi.hero.gorsel}
                    alt={sayfaIcerigi.hero.gorselBaslik}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#12091f]/95 via-[#12091f]/35 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-fuchsia-300/25 bg-[#12091f]/65 px-4 py-2 text-xs font-black rgb-love-text backdrop-blur-xl">
                    {sayfaIcerigi.hero.gorselUstYazi}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-fuchsia-300/25 bg-[#12091f]/72 p-5 backdrop-blur-xl">
                    <p className="text-xs font-black uppercase tracking-[0.25em] rgb-love-text">
                      {sayfaIcerigi.marka}
                    </p>
                    <h3 className="mt-2 text-2xl font-black rgb-love-text">
                      {sayfaIcerigi.hero.gorselBaslik}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#d8f7ff]">
                      {sayfaIcerigi.hero.gorselAciklama}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={siraliAnimasyon}
            initial="gizli"
            animate="goster"
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {sayfaIcerigi.ozetKartlar.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={kartAnimasyon}
                  key={item.title}
                  className="rounded-[1.6rem] border border-cyan-300/20 bg-[#241039]/80 p-5 shadow-xl backdrop-blur-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-love text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-black rgb-love-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#d8f7ff]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={animasyon}
        initial="gizli"
        whileInView="goster"
        viewport={{ once: true, amount: 0.16 }}
        className="relative px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] rgb-love-text">
              {sayfaIcerigi.hizmetler.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.hizmetler.baslik}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#d8f7ff] sm:text-base sm:leading-8">
              {sayfaIcerigi.hizmetler.aciklama}
            </p>
          </div>

          <motion.div
            variants={siraliAnimasyon}
            initial="gizli"
            whileInView="goster"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {sayfaIcerigi.hizmetler.kartlar.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={kartAnimasyon}
                  key={item.title}
                  className="rgb-love-card"
                >
                  <div className="overflow-hidden rounded-[1.9rem] bg-[#1d102f]/94 backdrop-blur-xl">
                    <div className="relative h-[260px] overflow-hidden bg-[#12091f] sm:h-[360px] lg:h-[420px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#12091f]/85 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-love text-white shadow-xl">
                        <Icon size={28} />
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h3 className="text-2xl font-black rgb-love-text">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#d8f7ff] sm:text-base sm:leading-8">
                        {item.desc}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {item.points?.map((point) => (
                          <div
                            key={point}
                            className="rounded-2xl border border-cyan-300/15 bg-[#12091f]/55 p-4"
                          >
                            <div className="flex gap-2">
                              <CheckCircle2
                                className="mt-1 shrink-0 text-[#23d5ff]"
                                size={18}
                              />
                              <p className="text-sm font-bold leading-6 text-[#d8f7ff]">
                                {point}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,92,138,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(35,213,255,0.16),transparent_32%),linear-gradient(135deg,#12091f_0%,#241039_50%,#102b45_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] rgb-love-text">
              {sayfaIcerigi.kullanimAlanlari.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.kullanimAlanlari.baslik}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {sayfaIcerigi.kullanimAlanlari.kartlar.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={kartAnimasyon}
                  initial="gizli"
                  whileInView="goster"
                  viewport={{ once: true, amount: 0.12 }}
                  key={item.title}
                  className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#241039]/90 p-6 shadow-2xl transition hover:-translate-y-2"
                  style={{
                    animation: `softFloat ${5 + index}s ease-in-out infinite`,
                  }}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#23d5ff]/20 blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#ff5c8a]/20 blur-3xl" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-love text-white shadow-xl">
                    <Icon size={30} />
                  </div>

                  <h3 className="relative mt-6 text-xl font-black rgb-love-text">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm font-medium leading-7 text-[#d8f7ff]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] rgb-love-text">
              {sayfaIcerigi.araclar.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.araclar.baslik}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {sayfaIcerigi.araclar.kartlar.map((item, index) => (
              <motion.div
                variants={kartAnimasyon}
                initial="gizli"
                whileInView="goster"
                viewport={{ once: true, amount: 0.14 }}
                key={item.title}
                className={`relative overflow-hidden rounded-[2rem] border border-fuchsia-300/20 bg-[#241039]/90 p-3 shadow-2xl ${
                  index === 1 ? "md:mt-10" : ""
                }`}
              >
                <div className="relative h-[320px] overflow-hidden rounded-[1.5rem]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12091f]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-cyan-300/20 bg-[#12091f]/70 p-4 backdrop-blur-xl">
                    <h3 className="text-xl font-black rgb-love-text">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#d8f7ff]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#16071f_0%,#2a1044_46%,#0e2846_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] rgb-love-text">
              {sayfaIcerigi.nedenBiz.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.nedenBiz.baslik}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sayfaIcerigi.nedenBiz.kartlar.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={kartAnimasyon}
                  initial="gizli"
                  whileInView="goster"
                  viewport={{ once: true, amount: 0.16 }}
                  key={item.title}
                  className="rounded-[2rem] border border-cyan-300/20 bg-[#241039]/90 p-6 shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-love text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black rgb-love-text">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#d8f7ff]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] rgb-love-text">
              {sayfaIcerigi.surec.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.surec.baslik}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {sayfaIcerigi.surec.adimlar.map((item, index) => (
              <motion.div
                variants={kartAnimasyon}
                initial="gizli"
                whileInView="goster"
                viewport={{ once: true, amount: 0.16 }}
                key={item.title}
                className="rounded-[2rem] border border-fuchsia-300/20 bg-[#241039]/90 p-6 shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-4xl font-black rgb-love-text">
                    0{index + 1}
                  </span>
                  <CalendarCheck className="text-[#ffb86b]" />
                </div>

                <h3 className="text-xl font-black rgb-love-text">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#d8f7ff]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] rgb-love-text">
              {sayfaIcerigi.yorumlar.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.yorumlar.baslik}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {sayfaIcerigi.yorumlar.kartlar.map((item) => (
              <motion.div
                variants={kartAnimasyon}
                initial="gizli"
                whileInView="goster"
                viewport={{ once: true, amount: 0.16 }}
                key={item.title}
                className="rounded-[2rem] border border-cyan-300/20 bg-[#241039]/90 p-6 shadow-xl"
              >
                <div className="mb-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-[#ffb86b] text-[#ffb86b]"
                    />
                  ))}
                </div>

                <h3 className="text-xl font-black rgb-love-text">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#d8f7ff]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-fuchsia-300/20 bg-[#1d102f]/90 p-6 shadow-2xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] rgb-love-text">
                {sayfaIcerigi.notlar.rozet}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
                {sayfaIcerigi.notlar.baslik}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sayfaIcerigi.notlar.maddeler.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-cyan-300/20 bg-[#12091f]/60 p-5"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#23d5ff]" />
                    <p className="text-sm font-bold leading-7 text-[#d8f7ff]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-love p-[2px] shadow-2xl">
          <div className="rounded-[2.4rem] bg-[#12091f]/94 p-7 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] rgb-love-text">
                  {sayfaIcerigi.cta.rozet}
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
                  {sayfaIcerigi.cta.baslik}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#d8f7ff] sm:text-base sm:leading-8">
                  {sayfaIcerigi.cta.aciklama}
                </p>
              </div>

              <div className="grid gap-3">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20engelli%20ara%C3%A7%20/%20engelli%20taksi%20/%20hasta%20nakil%20arac%C4%B1%20i%C3%A7in%20randevu%20almak%20istiyorum.%0AHizmet%20t%C3%BCr%C3%BC:%0AAl%C4%B1nacak%20yer:%0AGidilecek%20yer:%0ATarih%20/%20Saat:%0AYolcunun%20durumu:`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-16 items-center justify-center gap-3 rounded-3xl bg-love px-7 py-5 text-base font-black text-white shadow-xl transition hover:-translate-y-1"
                >
                  {sayfaIcerigi.cta.whatsapp}
                  <MessageCircle size={22} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="flex min-h-16 items-center justify-center gap-3 rounded-3xl border border-cyan-300/20 bg-[#241039]/90 px-7 py-5 text-base font-black text-white shadow-xl transition hover:-translate-y-1"
                >
                  {sayfaIcerigi.cta.telefon}
                  <Phone size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-300/20 bg-[#12091f] px-4 pb-24 pt-10 sm:px-6 sm:pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-[#d8f7ff] md:grid-cols-3">
          <div>
            <h3 className="text-lg font-black rgb-love-text">Mir Turizm</h3>
            <p className="mt-3 leading-7">
              Engelli araç, engelli taksi, hasta nakil aracı, hastane transferi
              ve özel ulaşım hizmetleri.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-black rgb-love-text">Hizmetler</h4>
            <p>Engelli Araç</p>
            <p>Engelli Taksi</p>
            <p>Hasta Nakil Aracı</p>
            <p>Hastane Transferi</p>
          </div>

          <div>
            <h4 className="mb-3 font-black rgb-love-text">İletişim</h4>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> İstanbul / Türkiye
            </p>
            <p className="mt-2 flex items-center gap-2">
              <Phone size={16} /> +90 553 354 50 18
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-3 left-3 right-3 z-50 grid grid-cols-2 gap-2 sm:bottom-5 sm:left-auto sm:right-5 sm:flex sm:w-auto">
        <a
          href={`tel:+${phone}`}
          className="flex items-center justify-center gap-2 rounded-full bg-[#241039] px-4 py-3 text-sm font-black text-white shadow-2xl ring-1 ring-cyan-300/20 transition hover:-translate-y-1"
        >
          <Phone size={18} />
          Ara
        </a>

        <a
          href={`https://wa.me/${phone}?text=Merhaba,%20engelli%20ara%C3%A7%20/%20engelli%20taksi%20/%20hasta%20nakil%20hizmeti%20i%C3%A7in%20bilgi%20almak%20istiyorum.`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-love px-4 py-3 text-sm font-black text-white shadow-2xl transition hover:-translate-y-1"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </main>
  );
}