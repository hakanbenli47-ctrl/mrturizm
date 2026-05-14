"use client";

import { motion, type Variants } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  CalendarCheck,
  Car,
  CheckCircle2,
  Heart,
  HeartHandshake,
  Home as HomeIcon,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
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
    baslik: "Sosyal Destek • Engelsiz Ulaşım • Özel Gün Araç Desteği",
    buton: "WhatsApp",
  },

  hero: {
    rozet: "Sevgiyle, saygıyla ve güvenle planlanan özel ulaşım",
    baslik1: "Hayatın özel anlarında",
    baslik2: "yanınızda oluyoruz.",
    aciklama:
      "Mir Turizm olarak engelli bireylerimiz, gazilerimiz, sevgi evlerinde büyüyen gençlerimiz ve huzur evi sakinlerimiz için özel günlerde anlamlı, güvenli ve planlı ulaşım desteği sunuyoruz. Bu sayfa, sunduğumuz sosyal destek hizmetlerini, kimlere destek verdiğimizi ve sürecin nasıl ilerlediğini anlatmak için hazırlandı.",
    etiketler: [
      "Engelli Bireyler",
      "Gazilerimiz",
      "Sevgi Evi Gençleri",
      "Huzur Evi Sakinleri",
    ],
    anaButon: "Destek İçin Yaz",
    ikinciButon: "Hemen Ara",
    gorsel: "/vip2.jpg",
    gorselUstYazi: "Mir Turizm Sosyal Destek",
    gorselBaslik: "Bir yolculuktan fazlası.",
    gorselAciklama:
      "Her destek talebi; kişi, gün, ihtiyaç ve uygunluk durumuna göre özenle değerlendirilir.",
  },

  ozetKartlar: [
    {
      icon: HeartHandshake,
      title: "Sevgi bağı",
      desc: "Her hizmette insana değer veren, sıcak ve özenli bir yaklaşım.",
    },
    {
      icon: ShieldCheck,
      title: "Güvenli süreç",
      desc: "Araç, güzergah ve yolculuk öncesi detaylı planlama.",
    },
    {
      icon: Accessibility,
      title: "Erişilebilir destek",
      desc: "İhtiyaca göre asansörlü araç ve güvenli iniş-biniş desteği.",
    },
    {
      icon: CalendarCheck,
      title: "Planlı ilerleyiş",
      desc: "Tarih, saat ve uygunluk durumuna göre net hizmet akışı.",
    },
  ] satisfies KartItem[],

  kimlerIcin: {
    rozet: "Kimler İçin?",
    baslik: "Desteğimizi en anlamlı anlarda doğru kişilere ulaştırıyoruz.",
    aciklama:
      "Bu hizmet alanı; toplumumuzda özel hassasiyet gösterdiğimiz kişi ve gruplara, özellikle özel günlerinde destek olmak amacıyla hazırlanmıştır.",
    kartlar: [
      {
        icon: Accessibility,
        title: "Engelli bireylerimiz için",
        desc: "Ulaşım sürecinde daha fazla desteğe ihtiyaç duyan bireylerimiz için güvenli, erişilebilir ve özenli araç desteği sağlanır.",
        image: "/vip1.jpg",
        points: [
          "Asansörlü araç desteği",
          "Güvenli sabitleme sistemi",
          "Kapıdan alım ve güvenli bırakma",
          "Sabırlı, saygılı ve destekleyici ekip",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Gazilerimiz için",
        desc: "Bu ülkeye emek vermiş gazilerimizin özel günlerinde yanlarında olmak, Mir Turizm için bir hizmetten önce vefa sorumluluğudur.",
        image: "/vip-2.jpg",
        points: [
          "Özel gün araç desteği",
          "Saygı ve vefa odaklı yaklaşım",
          "Konforlu ve güvenli ulaşım",
          "Tarih ve güzergaha göre planlama",
        ],
      },
      {
        icon: Heart,
        title: "Sevgi evlerinde büyüyen gençlerimiz için",
        desc: "Yeni bir hayata adım atarken, özellikle düğün gibi unutulmaz günlerde araç desteğiyle bu mutluluğa ortak oluyoruz.",
        image: "/vip11.jpg",
        points: [
          "Düğün günü araç desteği",
          "Gelin aracı planlaması",
          "Özel gün koordinasyonu",
          "Anlamlı ve zarif hizmet",
        ],
      },
      {
        icon: HomeIcon,
        title: "Huzur evi sakinlerimiz için",
        desc: "Büyüklerimizin özel günlerinde, ziyaretlerinde veya anlamlı anlarında ulaşımı daha kolay, rahat ve huzurlu hale getiriyoruz.",
        image: "/vip-4.jpg",
        points: [
          "Kapıdan alım desteği",
          "Rahat ve konforlu yolculuk",
          "Özenli refakat yaklaşımı",
          "Saygılı ve sakin hizmet süreci",
        ],
      },
    ] satisfies KartItem[],
  },

  hizmetler: {
    rozet: "Neler Yapıyoruz?",
    baslik: "Sadece araç vermiyoruz; günü, ihtiyacı ve duyguyu birlikte planlıyoruz.",
    kartlar: [
      {
        icon: Car,
        title: "Özel gün araç tahsisi",
        desc: "Düğün, nişan, tören, davet ve anlamlı günlerde uygun araç desteği sağlanır.",
      },
      {
        icon: Accessibility,
        title: "Erişilebilir ulaşım",
        desc: "İhtiyaca göre asansörlü araç ve güvenli sabitleme sistemiyle yolculuk hazırlanır.",
      },
      {
        icon: HeartHandshake,
        title: "Kapıdan alım desteği",
        desc: "Alınacak nokta belirlenir, kişi güvenli şekilde araca alınır ve varış noktasına ulaştırılır.",
      },
      {
        icon: Users,
        title: "Aile ve refakat uyumu",
        desc: "Gerekli durumlarda aile bireyleri veya refakatçilerle uyumlu bir yolculuk planlanır.",
      },
      {
        icon: CalendarCheck,
        title: "Randevulu ilerleme",
        desc: "Araç uygunluğu, tarih, saat ve güzergah önceden netleştirilerek süreç yönetilir.",
      },
      {
        icon: Star,
        title: "Saygılı hizmet dili",
        desc: "Her yolculukta mahremiyet, nezaket, sabır ve insan onuruna yakışan yaklaşım esas alınır.",
      },
    ] satisfies KartItem[],
  },

  gorselAlan: {
    rozet: "Hizmet Anlayışımız",
    baslik: "Her yolculuğun arkasında sevgi, bağ ve sorumluluk var.",
    aciklama:
      "Mir Turizm sosyal destek hizmetlerinde amaç yalnızca bir noktadan başka bir noktaya ulaşmak değildir. Bizim için önemli olan; kişinin kendini değerli, güvende ve yalnız olmadığını hissetmesidir.",
    gorseller: [
      {
        image: "/vip2.jpg",
        title: "Güvenli ulaşım",
        desc: "Her yolculuk öncesi ihtiyaç ve güzergah netleştirilir.",
      },
      {
        image: "/vip1.jpg",
        title: "Erişilebilir araç",
        desc: "İniş-biniş ve araç içi güvenlik süreci dikkatle yürütülür.",
      },
      {
        image: "/vip11.jpg",
        title: "Özel gün desteği",
        desc: "Mutluluk taşıyan günlerde Mir Turizm yanında olur.",
      },
    ],
  },

  surec: {
    rozet: "Süreç Nasıl İlerliyor?",
    baslik: "Talep geldikten sonra her adım sade ve net şekilde planlanır.",
    adimlar: [
      {
        title: "Talep alınır",
        desc: "Kim için destek istendiği, tarih, saat, alınacak yer ve gidilecek nokta öğrenilir.",
      },
      {
        title: "Uygunluk kontrol edilir",
        desc: "Araç durumu, destek kapsamı, güzergah ve ihtiyaç türü değerlendirilir.",
      },
      {
        title: "Plan netleşir",
        desc: "Araç, sürücü, saat ve yolculuk detayları karşılıklı olarak kesinleştirilir.",
      },
      {
        title: "Hizmet sağlanır",
        desc: "Belirlenen saatte güvenli, konforlu ve özenli ulaşım desteği verilir.",
      },
    ],
  },

  notlar: {
    rozet: "Önemli Bilgilendirme",
    baslik: "Destek kapsamı uygunluk ve planlamaya göre ilerler.",
    maddeler: [
      "Ücretsiz destek öncelikle düğün ve özel gün araç tahsisi kapsamında değerlendirilir.",
      "Hizmet; araç müsaitliği, tarih, güzergah ve ihtiyaç durumuna göre planlanır.",
      "Daha sağlıklı planlama için mümkünse en az 1 hafta önceden iletişime geçilmesi önerilir.",
      "Diğer özel ulaşım talepleri güzergah, hizmet türü ve mesafeye göre ayrıca değerlendirilir.",
    ],
  },

  cta: {
    rozet: "İletişime Geçin",
    baslik: "Mir Turizm ile özel gününüzü birlikte planlayalım.",
    aciklama:
      "Kimin için destek almak istediğinizi, tarih ve güzergah bilgisini WhatsApp üzerinden iletin. Uygunluk durumuna göre size en doğru planı hazırlayalım.",
    whatsapp: "WhatsApp’tan Yaz",
    telefon: "Hemen Ara",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#12091f] tum-yazilar-rgb">
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
              href={`https://wa.me/${phone}?text=Merhaba,%20Mir%20Turizm%20sosyal%20destek%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
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

              <p className="mt-6 max-w-2xl text-[15px] leading-7 rgb-love-text sm:text-lg sm:leading-8">
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
                  href={`https://wa.me/${phone}?text=Merhaba,%20sosyal%20destek%20kapsam%C4%B1nda%20ara%C3%A7%20deste%C4%9Fi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AKim%20i%C3%A7in:%0ATarih:%0AAl%C4%B1nacak%20yer:%0AGidilecek%20yer:`}
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
                    <p className="mt-2 text-sm leading-6 rgb-love-text">
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
                  <p className="mt-2 text-sm leading-6 rgb-love-text">
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
              {sayfaIcerigi.kimlerIcin.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.kimlerIcin.baslik}
            </h2>
            <p className="mt-5 text-sm leading-7 rgb-love-text sm:text-base sm:leading-8">
              {sayfaIcerigi.kimlerIcin.aciklama}
            </p>
          </div>

          <motion.div
            variants={siraliAnimasyon}
            initial="gizli"
            whileInView="goster"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {sayfaIcerigi.kimlerIcin.kartlar.map((item) => {
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
      className="absolute inset-0 h-full w-full object-cover object-center scale-[0.97] transition duration-700 hover:scale-100"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#12091f]/80 via-transparent to-transparent" />

    <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-love text-white shadow-xl">
      <Icon size={28} />
    </div>
  </div>

  <div className="p-6 sm:p-8">
    <h3 className="text-2xl font-black rgb-love-text">
      {item.title}
    </h3>

    <p className="mt-4 text-sm leading-7 rgb-love-text sm:text-base sm:leading-8">
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
            <p className="text-sm font-bold leading-6 rgb-love-text">
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
              {sayfaIcerigi.hizmetler.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.hizmetler.baslik}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {sayfaIcerigi.hizmetler.kartlar.map((item, index) => {
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

                  <p className="relative mt-3 text-sm font-medium leading-7 rgb-love-text">
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
              {sayfaIcerigi.gorselAlan.rozet}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight rgb-love-text sm:text-5xl">
              {sayfaIcerigi.gorselAlan.baslik}
            </h2>
            <p className="mt-5 text-sm leading-7 rgb-love-text sm:text-base sm:leading-8">
              {sayfaIcerigi.gorselAlan.aciklama}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {sayfaIcerigi.gorselAlan.gorseller.map((item, index) => (
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
                    <p className="mt-2 text-sm leading-6 rgb-love-text">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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

                <p className="mt-3 text-sm leading-7 rgb-love-text">
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
                    <p className="text-sm font-bold leading-7 rgb-love-text">
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

                <p className="mt-5 text-sm leading-7 rgb-love-text sm:text-base sm:leading-8">
                  {sayfaIcerigi.cta.aciklama}
                </p>
              </div>

              <div className="grid gap-3">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20Mir%20Turizm%20sosyal%20destek%20hizmeti%20i%C3%A7in%20bilgi%20almak%20istiyorum.%0AKim%20i%C3%A7in:%0ATarih:%0AAl%C4%B1nacak%20yer:%0AGidilecek%20yer:`}
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
    </main>
  );
}