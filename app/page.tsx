"use client";

import { useMemo, useState, type FormEvent, type MouseEvent } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

const phone = "905533545018";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const googleConversionSendTo = "AW-18187004518/N5pSCJX4jLMcEObUnuBD";

function donusumGonder(e: MouseEvent<HTMLAnchorElement>, url: string) {
  e.preventDefault();

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    let yonlendirildi = false;

    const yonlendir = () => {
      if (yonlendirildi) return;
      yonlendirildi = true;
      window.location.href = url;
    };

    window.gtag("event", "conversion", {
      send_to: googleConversionSendTo,
      event_callback: yonlendir,
    });

    setTimeout(yonlendir, 800);
  } else {
    window.location.href = url;
  }
}

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
  marka: "MİR ULAŞIM",

  header: {
    kucukYazi: "MİR ULAŞIM",
    baslik: "İstanbul Engelli Taksi • Engelli Ulaşım • Tekerlekli Sandalye Uyumlu Araç",
    buton: "WhatsApp",
  },

  hero: {
    rozet: "Kadıköy merkezli, İstanbul genelinde randevulu engelli ulaşım",
    baslik1: "Ulaşımda engel yok.",
    baslik2: "Yolculuğunuz güvenle planlansın.",
    aciklama:
      "Mir Ulaşım, Kadıköy merkezli olarak İstanbul genelinde tekerlekli sandalye uyumlu araçlarla randevulu engelli taksi ve kapıdan kapıya engelli ulaşım hizmeti sunar. Hastane, fizik tedavi, havalimanı, gezi, düğün, organizasyon ve özel adres yolculukları güzergâh ile saate göre planlanır.",
    etiketler: [
      "Tekerlekli Sandalye Uyumlu Araç",
      "Kapıdan Alım ve Adrese Bırakma",
      "Yolculuk Öncesi Fiyat Bilgisi",
      "Kadıköy • Üsküdar • Ataşehir • Maltepe",
    ],
    anaButon: "Hızlı Talep Oluştur",
    ikinciButon: "Telefonla Hemen Ara",
    gorsel: "/vip1.jpg",
    gorselUstYazi: "İstanbul Engelli Ulaşım",
    gorselBaslik: "Kadıköy’den İstanbul geneline planlı ulaşım.",
    gorselAciklama:
      "Kadıköy, Anadolu Yakası ve İstanbul genelinde alınacak konum, gidilecek adres, tarih, saat ve kullanım amacına göre tekerlekli sandalye uyumlu araç planı oluşturulur.",
  },

  istatistikler: [
    ["Kadıköy", "Merkezli Hizmet"],
    ["İstanbul", "Geneli Ulaşım"],
    ["En Az", "3 Saat Önce"],
    ["7/24", "Bilgi ve Randevu"],
  ],

  ozetKartlar: [
    {
      icon: Accessibility,
      title: "İstanbul engelli taksi",
      desc: "İstanbul içinde engelli bireyler için tekerlekli sandalye uyumlu araçlarla randevulu ulaşım hizmeti.",
    },
    {
      icon: Car,
      title: "Engelli ulaşım",
      desc: "Kadıköy, Üsküdar, Ataşehir, Maltepe ve İstanbul genelinde planlı, güvenli ve konforlu ulaşım desteği.",
    },
    {
      icon: CalendarCheck,
      title: "Tekerlekli sandalye uyumlu araç",
      desc: "Tekerlekli sandalye kullanan yolcular için iniş-binişi kolaylaştıran özel donanımlı araç desteği.",
    },
    {
      icon: ShieldCheck,
      title: "Hızlı aksiyon",
      desc: "Alınacak yer, gidilecek yer ve saat bilgisi gönderildiğinde en uygun ulaşım planı hızlıca netleştirilir.",
    },
  ] satisfies KartItem[],

  hizmetler: {
    rozet: "Hizmetlerimiz",
    baslik: "Kadıköy ve İstanbul genelinde engelli taksi hizmetleri.",
    aciklama:
      "Mir Ulaşım; Kadıköy merkezli olarak İstanbul genelinde engelli bireylerin hastane, fizik tedavi, havalimanı, sosyal yaşam, özel gün ve planlı ulaşım ihtiyaçları için randevulu hizmet sunar.",
    kartlar: [
      {
        icon: Accessibility,
        title: "İstanbul Engelli Taksi",
        desc: "İstanbul genelinde engelli bireyler için tekerlekli sandalye uyumlu araçlarla randevulu engelli taksi hizmeti sunulur.",
        image: "/vip1.jpg",
        points: [
          "Kadıköy merkezli hizmet",
          "Üsküdar, Ataşehir, Maltepe ulaşım",
          "Kapıdan alım ve adrese bırakma",
          "Güzergaha göre fiyatlandırma",
        ],
      },
      {
        icon: Car,
        title: "Engelli Ulaşım",
        desc: "Şehir içi kısa ve orta mesafe ulaşımlarda engelli bireylerin sosyal yaşamına uygun, randevulu ulaşım desteği sağlanır.",
        image: "/vip-2.jpg",
        points: [
          "İstanbul içi ulaşım",
          "Randevulu araç yönlendirme",
          "Gezi, yemek ve özel adres transferi",
          "Kısa ve uzun mesafe ulaşım",
        ],
      },
      {
        icon: CalendarCheck,
        title: "Tekerlekli Sandalye Uyumlu Araç",
        desc: "Tekerlekli sandalye kullanan yolcular için iniş-biniş kolaylığı sağlayan özel donanımlı araçlarla ulaşım planlanır.",
        image: "/vip11.jpg",
        points: [
          "Tekerlekli sandalye uyumlu araç",
          "Güvenli iniş-biniş desteği",
          "Konforlu şehir içi transfer",
          "Önceden randevu önerilir",
        ],
      },
      {
        icon: Clock,
        title: "Kadıköy Engelli Taksi ve Ulaşım",
        desc: "Kadıköy merkezli olarak Üsküdar, Ataşehir, Maltepe, Kartal, Pendik ve İstanbul genelinde engelli ulaşım planı oluşturulur.",
        image: "/vip-4.jpg",
        points: [
          "Kadıköy çıkışlı planlama",
          "Üsküdar ve Ataşehir ulaşım",
          "Maltepe, Kartal ve Pendik çevresi",
          "En az 3 saat önce randevu",
        ],
      },
    ] satisfies KartItem[],
  },

  kullanimAlanlari: {
    rozet: "Nerelerde Kullanılır?",
    baslik: "İstanbul’da günlük yaşamdan özel organizasyonlara kadar engelli ulaşım.",
    kartlar: [
      {
        icon: Sparkles,
        title: "Gezi ve sosyal yaşam",
        desc: "Sahil, alışveriş merkezi, aile ziyareti, şehir gezisi veya özel programlar için konforlu ulaşım.",
      },
      {
        icon: Users,
        title: "Yemek ve davet programları",
        desc: "Restoran, aile yemeği, arkadaş buluşması veya özel davetlere erişilebilir ulaşım desteği.",
      },
      {
        icon: CalendarCheck,
        title: "Düğün organizasyonları",
        desc: "Düğün, nişan ve özel günlerde gelin arabası dahil olmak üzere planlı ulaşım hizmeti.",
      },
      {
        icon: Clock,
        title: "Fizik tedavi ulaşımı",
        desc: "Fizik tedavi randevularına düzenli veya tek seferlik gidiş-geliş için planlı araç kiralama.",
      },
      {
        icon: MapPin,
        title: "Şehir içi özel adresler",
        desc: "Ev, otel, etkinlik alanı, düğün salonu, restoran veya özel adreslere ulaşım.",
      },
      {
        icon: ShieldCheck,
        title: "Planlı etkinlikler",
        desc: "Konser, toplantı, kutlama, aile programı ve organizasyonlara güvenli ulaşım planı.",
      },
    ] satisfies KartItem[],
  },

  araclar: {
    rozet: "Araç Seçenekleri",
    baslik: "İhtiyaca ve kullanım amacına göre uygun araç planlanır.",
    kartlar: [
      {
        title: "İstanbul Engelli Taksi",
        desc: "Tekerlekli sandalye kullanan bireyler için erişilebilir, konforlu ve randevulu ulaşım.",
        image: "/vip1.jpg",
      },
      {
        title: "Engelli Ulaşım",
        desc: "Kadıköy, Üsküdar, Ataşehir, Maltepe ve İstanbul genelinde şehir içi ulaşım desteği.",
        image: "/vip-2.jpg",
      },
      {
        title: "Tekerlekli Sandalye Uyumlu Araç",
        desc: "İniş-biniş kolaylığı ve güvenli yolculuk için özel donanımlı araç planlaması.",
        image: "/vip11.jpg",
      },
    ],
  },

  nedenBiz: {
    rozet: "Neden Mir Turizm?",
    baslik: "Engelli taksi hizmetinde güven, zamanlama ve doğru planlama önemlidir.",
    kartlar: [
      {
        icon: ShieldCheck,
        title: "Güvenli",
        desc: "Yolculuk öncesi kullanım amacı, güzergah ve ihtiyaçlar alınır; araç buna göre hazırlanır.",
      },
      {
        icon: Clock,
        title: "Zamanında",
        desc: "Fizik tedavi, düğün organizasyonu ve planlı etkinliklerde saat hassasiyetiyle hareket edilir.",
      },
      {
        icon: Star,
        title: "Konforlu",
        desc: "Engelli bireyin rahatlığına uygun, sakin ve özenli bir yolculuk deneyimi sunulur.",
      },
      {
        icon: Sparkles,
        title: "Şahsa özel",
        desc: "Her ulaşım talebi kişinin ihtiyacına, kullanım amacına ve güzergahına göre planlanır.",
      },
    ] satisfies KartItem[],
  },

  surec: {
    rozet: "Süreç Nasıl İlerler?",
    baslik: "Randevu oluşturmak için birkaç bilgi yeterlidir.",
    adimlar: [
      {
        title: "Bilgiler alınır",
        desc: "Alınacak adres, gidilecek adres, tarih, saat ve kullanım amacı öğrenilir.",
      },
      {
        title: "Araç belirlenir",
        desc: "Engelli araç kiralama, engelli taksi veya gelin arabası ihtiyacına göre planlama yapılır.",
      },
      {
        title: "Plan netleşir",
        desc: "Saat, güzergah, hizmet türü ve fiyat bilgisi karşılıklı olarak netleştirilir.",
      },
      {
        title: "Ulaşım sağlanır",
        desc: "Belirlenen saatte güvenli, konforlu ve şahsa özel ulaşım hizmeti verilir.",
      },
    ],
  },

  yorumlar: {
    rozet: "Hizmet Anlayışımız",
    baslik: "İstanbul engelli ulaşımında güven veren, saygılı ve planlı hizmet.",
    kartlar: [
      {
        title: "Sosyal yaşama erişim",
        desc: "Engelli bireylerin gezi, yemek, aile ziyareti ve özel günlere daha rahat katılabilmesi için ulaşım süreci planlanır.",
      },
      {
        title: "Özel günlerde destek",
        desc: "Düğün organizasyonu, gelin arabası ve planlı etkinliklerde zamanlama ve konfor öncelikli ilerlenir.",
      },
      {
        title: "Düzenli ulaşım kolaylığı",
        desc: "Fizik tedaviye gidiş-geliş gibi düzenli ihtiyaçlarda randevu saatlerine uygun araç planı oluşturulur.",
      },
    ],
  },

  notlar: {
    rozet: "Önemli Bilgilendirme",
    baslik: "En uygun engelli ulaşım planı için bilgilerinizi önceden paylaşın.",
    maddeler: [
      "İstanbul engelli taksi ve engelli ulaşım hizmetleri randevulu olarak planlanır.",
      "Randevu için 1 gün önceden iletişime geçilmesi önerilir.",
      "Acil planlamalarda en az 3 saat önceden randevu alınmalıdır.",
      "Alınacak adres, gidilecek adres, tarih, saat ve kullanım amacı WhatsApp üzerinden paylaşılmalıdır.",
      "Gelin arabası ve düğün organizasyonu taleplerinde tarih uygunluğu ayrıca kontrol edilir.",
      "Fiyatlandırma mesafe, güzergah, bekleme süresi ve hizmet türüne göre belirlenir.",
    ],
  },

  cta: {
    rozet: "Randevu ve Bilgi",
    baslik: "Kadıköy ve İstanbul geneli için engelli ulaşım talebi oluşturun.",
    aciklama:
      "Alınacak yer, gidilecek adres, tarih ve saat bilgilerini formda doldurun. Bilgileriniz WhatsApp mesajına otomatik eklenerek Kadıköy ve İstanbul geneli için hızlı ulaşım talebi oluşturulsun.",
    whatsapp: "WhatsApp’tan Ulaşım Planı Al",
    telefon: "Telefonla Ara",
  },
};

type TalepFormu = {
  adSoyad: string;
  telefon: string;
  alinacakYer: string;
  gidilecekYer: string;
  tarih: string;
  saat: string;
  hizmetTuru: string;
  gidisDonus: string;
  refakatci: string;
  not: string;
  kvkk: boolean;
};

const bosTalepFormu: TalepFormu = {
  adSoyad: "",
  telefon: "",
  alinacakYer: "",
  gidilecekYer: "",
  tarih: "",
  saat: "",
  hizmetTuru: "Hastane veya fizik tedavi ulaşımı",
  gidisDonus: "Tek yön",
  refakatci: "0 refakatçi",
  not: "",
  kvkk: false,
};

function HizliTalepFormu({ formId, kisa = false }: { formId: string; kisa?: boolean }) {
  const [form, setForm] = useState<TalepFormu>(bosTalepFormu);
  const [hata, setHata] = useState("");

  const bugun = useMemo(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split("T")[0];
  }, []);

  function guncelle<K extends keyof TalepFormu>(alan: K, deger: TalepFormu[K]) {
    setForm((onceki) => ({ ...onceki, [alan]: deger }));
  }

  function gonder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHata("");

    if (!form.kvkk) {
      setHata("Talebi oluşturmak için aydınlatma metnini onaylayın.");
      return;
    }

    const whatsappMesaji = [
      "Merhaba, engellitasima.com üzerinden ulaşım talebi oluşturuyorum.",
      "",
      `Ad Soyad: ${form.adSoyad}`,
      `Telefon: ${form.telefon}`,
      `Alınacak Yer: ${form.alinacakYer}`,
      `Gidilecek Yer: ${form.gidilecekYer}`,
      `Tarih: ${form.tarih}`,
      `Saat: ${form.saat}`,
      `Hizmet Türü: ${form.hizmetTuru}`,
      `Yolculuk: ${form.gidisDonus}`,
      `Refakatçi: ${form.refakatci}`,
      form.not.trim() ? `Ek Not: ${form.not.trim()}` : "Ek Not: Belirtilmedi",
      "",
      "Kadıköy / İstanbul geneli için araç uygunluğu ve fiyat bilgisi rica ediyorum.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMesaji)}`;

    window.gtag?.("event", "conversion", {
      send_to: googleConversionSendTo,
    });

    const yeniPencere = window.open(whatsappUrl, "_blank");
    if (yeniPencere) {
      yeniPencere.opener = null;
    } else {
      window.location.href = whatsappUrl;
    }
  }

  const alan =
    "h-12 w-full rounded-xl border border-white/15 bg-[#12091f]/70 px-4 text-sm font-bold text-white outline-none placeholder:text-white/45 focus:border-[#ffd166] focus:ring-4 focus:ring-[#ffd166]/10";

  return (
    <div
      id={formId}
      className="relative scroll-mt-6 overflow-hidden rounded-[2rem] border border-fuchsia-300/25 bg-[#12091f]/94 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff9f1c]/20 blur-3xl" />

      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[0.25em] rgb-love-text">
          Hızlı Ulaşım Talebi
        </p>

        <h2 className="mt-3 text-2xl font-black rgb-love-text sm:text-3xl">
          Fiyat ve araç uygunluğunu WhatsApp’tan öğrenin.
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#d8f7ff]">
          Bilgileri doldurup butona bastığınızda WhatsApp açılır ve tüm alanlar hazır mesaja otomatik eklenir.
        </p>

        <form onSubmit={gonder} className="mt-5 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              autoComplete="name"
              value={form.adSoyad}
              onChange={(e) => guncelle("adSoyad", e.target.value)}
              placeholder="Ad soyad"
              className={alan}
            />
            <input
              required
              inputMode="tel"
              autoComplete="tel"
              value={form.telefon}
              onChange={(e) => guncelle("telefon", e.target.value)}
              placeholder="Telefon numarası"
              className={alan}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              value={form.alinacakYer}
              onChange={(e) => guncelle("alinacakYer", e.target.value)}
              placeholder="Alınacak ilçe veya adres"
              className={alan}
            />
            <input
              required
              value={form.gidilecekYer}
              onChange={(e) => guncelle("gidilecekYer", e.target.value)}
              placeholder="Gidilecek ilçe veya adres"
              className={alan}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              aria-label="Yolculuk tarihi"
              type="date"
              min={bugun}
              value={form.tarih}
              onChange={(e) => guncelle("tarih", e.target.value)}
              className={`${alan} [color-scheme:dark]`}
            />
            <input
              required
              aria-label="Yolculuk saati"
              type="time"
              value={form.saat}
              onChange={(e) => guncelle("saat", e.target.value)}
              className={`${alan} [color-scheme:dark]`}
            />
          </div>

          <select
            aria-label="Hizmet türü"
            value={form.hizmetTuru}
            onChange={(e) => guncelle("hizmetTuru", e.target.value)}
            className={alan}
          >
            <option className="bg-[#12091f]">Hastane veya fizik tedavi ulaşımı</option>
            <option className="bg-[#12091f]">Şehir içi özel adres ulaşımı</option>
            <option className="bg-[#12091f]">Havalimanı transferi</option>
            <option className="bg-[#12091f]">Düğün ve organizasyon</option>
            <option className="bg-[#12091f]">Gezi ve sosyal yaşam</option>
            <option className="bg-[#12091f]">Düzenli veya kurumsal ulaşım</option>
          </select>

          {!kisa && (
            <div className="grid gap-4 sm:grid-cols-2">
              <select
                aria-label="Yolculuk yönü"
                value={form.gidisDonus}
                onChange={(e) => guncelle("gidisDonus", e.target.value)}
                className={alan}
              >
                <option className="bg-[#12091f]">Tek yön</option>
                <option className="bg-[#12091f]">Gidiş - dönüş</option>
                <option className="bg-[#12091f]">Saatlik araç</option>
              </select>

              <select
                aria-label="Refakatçi sayısı"
                value={form.refakatci}
                onChange={(e) => guncelle("refakatci", e.target.value)}
                className={alan}
              >
                <option className="bg-[#12091f]">0 refakatçi</option>
                <option className="bg-[#12091f]">1 refakatçi</option>
                <option className="bg-[#12091f]">2 refakatçi</option>
                <option className="bg-[#12091f]">3+ refakatçi</option>
              </select>
            </div>
          )}

          <textarea
            rows={3}
            value={form.not}
            onChange={(e) => guncelle("not", e.target.value)}
            placeholder="Ek bilgi veya bekleme süresi (isteğe bağlı)"
            className="w-full resize-none rounded-xl border border-white/15 bg-[#12091f]/70 px-4 py-3 text-sm font-bold text-white outline-none placeholder:text-white/45 focus:border-[#ffd166] focus:ring-4 focus:ring-[#ffd166]/10"
          />

          <label className="flex items-start gap-3 text-xs leading-5 text-white/65">
            <input
              required
              type="checkbox"
              checked={form.kvkk}
              onChange={(e) => guncelle("kvkk", e.target.checked)}
              className="mt-1 accent-[#ff9f1c]"
            />
            <span>
              Talebimin yanıtlanması amacıyla bu bilgilerin WhatsApp mesajına eklenmesini kabul ediyorum.
              Sağlık bilgisi veya teşhis paylaşmayın. {" "}
              <a href="/kvkk" className="font-black text-[#ffd166] underline">
                Aydınlatma metni
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-love px-5 text-sm font-black text-white shadow-xl transition hover:-translate-y-1"
          >
            Talebi WhatsApp’tan Gönder
            <MessageCircle size={19} />
          </button>

          {hata && (
            <p className="rounded-xl border border-red-300/25 bg-red-400/10 p-3 text-sm font-bold text-red-100">
              {hata}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-super-rgb min-h-screen overflow-hidden bg-transparent text-[#fff4d6]">
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

        .site-super-rgb {
          position: relative;
          background:
            radial-gradient(circle at 8% 8%, rgba(255, 167, 38, 0.5), transparent 30%),
            radial-gradient(circle at 92% 12%, rgba(255, 92, 138, 0.32), transparent 32%),
            radial-gradient(circle at 80% 88%, rgba(35, 213, 255, 0.24), transparent 34%),
            linear-gradient(135deg, #3a1704 0%, #6f2a05 28%, #5a1b36 58%, #103d5c 100%);
          color: #fff4d6;
        }

        .site-super-rgb::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), transparent 85%);
        }

        .site-super-rgb::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at center, transparent 0%, rgba(18, 9, 31, 0.18) 65%, rgba(18, 9, 31, 0.48) 100%);
        }

        .site-super-rgb section,
        .site-super-rgb header,
        .site-super-rgb footer {
          position: relative;
          z-index: 1;
        }

        .site-super-rgb .fixed {
          position: fixed !important;
          z-index: 9999 !important;
        }

        .rgb-love-text {
          background: linear-gradient(
            90deg,
            #fff7b2,
            #ffd166,
            #ff8a00,
            #ff5c5c,
            #ffcf6b,
            #42e8ff,
            #ff9f1c,
            #fff7b2
          );
          background-size: 380% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent !important;
          -webkit-text-fill-color: transparent;
          animation: rgbText 5s linear infinite;
          filter: drop-shadow(0 0 16px rgba(255, 138, 0, 0.18));
        }

        .bg-love {
          background: linear-gradient(
            90deg,
            #ff7a00,
            #ffb347,
            #ff4f7b,
            #23d5ff,
            #a855f7,
            #ff9f1c,
            #ff7a00
          );
          background-size: 380% 100%;
          animation: rgbText 5s linear infinite;
        }

        .rgb-love-card {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          padding: 1px;
          border: 1px solid rgba(255, 209, 102, 0.28);
          background: linear-gradient(
            135deg,
            rgba(255, 122, 0, 0.85),
            rgba(255, 179, 71, 0.68),
            rgba(255, 92, 138, 0.54),
            rgba(35, 213, 255, 0.44)
          );
          box-shadow:
            0 30px 110px rgba(255, 122, 0, 0.22),
            0 18px 70px rgba(15, 23, 42, 0.24);
        }

        .rgb-love-card::before {
          content: "";
          position: absolute;
          inset: -90px;
          background:
            radial-gradient(circle at 20% 20%, rgba(255, 179, 71, 0.38), transparent 32%),
            radial-gradient(circle at 80% 16%, rgba(255, 92, 138, 0.28), transparent 34%),
            radial-gradient(circle at 52% 90%, rgba(35, 213, 255, 0.22), transparent 34%);
          filter: blur(24px);
          opacity: 0.9;
          transition: 0.5s ease;
        }

        .rgb-love-card:hover::before {
          transform: scale(1.08);
          opacity: 1;
        }

        .animate-softPulse {
          animation: softPulse 7s ease-in-out infinite;
        }

        .animate-softPulseSlow {
          animation: softPulse 9s ease-in-out infinite;
        }

        .site-super-rgb p,
        .site-super-rgb li {
          color: #fff1d2 !important;
        }

        .site-super-rgb .text-\\[\\#d8f7ff\\],
        .site-super-rgb .text-\\[\\#90e8ff\\] {
          color: #fff1d2 !important;
        }

        .site-super-rgb .text-\\[\\#ffb86b\\] {
          color: #ffd166 !important;
        }

        .site-super-rgb .bg-\\[\\#12091f\\],
        .site-super-rgb .bg-\\[\\#12091f\\]\\/55,
        .site-super-rgb .bg-\\[\\#12091f\\]\\/60,
        .site-super-rgb .bg-\\[\\#12091f\\]\\/65,
        .site-super-rgb .bg-\\[\\#12091f\\]\\/70,
        .site-super-rgb .bg-\\[\\#12091f\\]\\/72,
        .site-super-rgb .bg-\\[\\#12091f\\]\\/94 {
          background-color: rgba(74, 31, 8, 0.72) !important;
        }

        .site-super-rgb .bg-\\[\\#241039\\],
        .site-super-rgb .bg-\\[\\#241039\\]\\/80,
        .site-super-rgb .bg-\\[\\#241039\\]\\/90 {
          background:
            linear-gradient(145deg, rgba(101, 43, 9, 0.78), rgba(82, 27, 52, 0.72)) !important;
        }

        .site-super-rgb .bg-\\[\\#291044\\]\\/72,
        .site-super-rgb .bg-\\[\\#291044\\]\\/80 {
          background:
            linear-gradient(145deg, rgba(113, 47, 8, 0.78), rgba(70, 31, 78, 0.7)) !important;
        }

        .site-super-rgb .bg-\\[\\#2a1044\\]\\/70 {
          background:
            linear-gradient(145deg, rgba(121, 52, 8, 0.78), rgba(74, 31, 86, 0.68)) !important;
        }

        .site-super-rgb .bg-\\[\\#1d102f\\]\\/90,
        .site-super-rgb .bg-\\[\\#1d102f\\]\\/94 {
          background:
            linear-gradient(145deg, rgba(78, 33, 9, 0.84), rgba(53, 23, 64, 0.78)) !important;
        }

        .site-super-rgb .border-cyan-300\\/20,
        .site-super-rgb .border-cyan-300\\/15,
        .site-super-rgb .border-fuchsia-300\\/20,
        .site-super-rgb .border-fuchsia-300\\/25 {
          border-color: rgba(255, 209, 102, 0.32) !important;
        }

        .site-super-rgb .shadow-xl,
        .site-super-rgb .shadow-2xl {
          box-shadow:
            0 20px 70px rgba(255, 122, 0, 0.12),
            0 10px 45px rgba(15, 23, 42, 0.22) !important;
        }

        .site-super-rgb .from-\\[\\#12091f\\]\\/95,
        .site-super-rgb .from-\\[\\#12091f\\]\\/90,
        .site-super-rgb .from-\\[\\#12091f\\]\\/85 {
          --tw-gradient-from: rgba(58, 23, 4, 0.9) var(--tw-gradient-from-position) !important;
          --tw-gradient-to: rgba(58, 23, 4, 0) var(--tw-gradient-to-position) !important;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }

        .site-super-rgb .via-\\[\\#12091f\\]\\/35 {
          --tw-gradient-via: rgba(58, 23, 4, 0.24) var(--tw-gradient-via-position) !important;
        }

        .site-super-rgb .fill-\\[\\#ffb86b\\] {
          fill: #ffd166 !important;
        }

        .site-super-rgb .text-\\[\\#23d5ff\\] {
          color: #42e8ff !important;
        }

        @media (max-width: 640px) {
          .rgb-love-card {
            border-radius: 1.6rem;
          }

          .site-super-rgb {
            background:
              radial-gradient(circle at 18% 6%, rgba(255, 167, 38, 0.48), transparent 34%),
              radial-gradient(circle at 88% 18%, rgba(255, 92, 138, 0.28), transparent 36%),
              linear-gradient(135deg, #431a04 0%, #6a2705 42%, #3b1746 100%);
          }

          .site-super-rgb p,
          .site-super-rgb li {
            color: #fff3dc !important;
          }
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
              href={`https://wa.me/${phone}?text=Merhaba,%20web%20siteniz%20%C3%BCzerinden%20yaz%C4%B1yorum.%20%C4%B0stanbul%20engelli%20taksi%20/%20engelli%20ula%C5%9F%C4%B1m%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) =>
                donusumGonder(
                  e,
                  `https://wa.me/${phone}?text=Merhaba,%20web%20siteniz%20%C3%BCzerinden%20yaz%C4%B1yorum.%20%C4%B0stanbul%20engelli%20taksi%20/%20engelli%20ula%C5%9F%C4%B1m%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`
                )
              }
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
                  href="#hizli-talep"
                  className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-love px-6 py-4 text-sm font-black text-white shadow-xl shadow-fuchsia-500/25 transition hover:-translate-y-1 sm:text-base"
                >
                  {sayfaIcerigi.hero.anaButon}
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  onClick={(e) => donusumGonder(e, `tel:+${phone}`)}
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
            >
              <HizliTalepFormu formId="hizli-talep" />
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

              <HizliTalepFormu formId="alt-talep-formu" kisa />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-300/20 bg-[#12091f] px-4 pb-24 pt-10 sm:px-6 sm:pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-[#d8f7ff] md:grid-cols-3">
          <div>
            <h3 className="text-lg font-black rgb-love-text">Mir Turizm</h3>
            <p className="mt-3 leading-7">
              İstanbul genelinde engelli taksi, engelli ulaşım, tekerlekli sandalye uyumlu araç, planlı etkinlik ve özel ulaşım hizmetleri.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-black rgb-love-text">Hizmetler</h4>
            <p>İstanbul Engelli Taksi</p>
            <p>Engelli Ulaşım</p>
            <p>Tekerlekli Sandalye Uyumlu Araç</p>
            <p>Kadıköy Engelli Taksi</p>
          </div>

          <div>
            <h4 className="mb-3 font-black rgb-love-text">İletişim</h4>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Kadıköy / İstanbul
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
          onClick={(e) => donusumGonder(e, `tel:+${phone}`)}
          className="flex items-center justify-center gap-2 rounded-full bg-[#241039] px-4 py-3 text-sm font-black text-white shadow-2xl ring-1 ring-cyan-300/20 transition hover:-translate-y-1"
        >
          <Phone size={18} />
          Ara
        </a>

        <a
          href={`https://wa.me/${phone}?text=Merhaba,%20web%20siteniz%20%C3%BCzerinden%20yaz%C4%B1yorum.%20%C4%B0stanbul%20engelli%20taksi%20/%20engelli%20ula%C5%9F%C4%B1m%20hizmeti%20i%C3%A7in%20bilgi%20almak%20istiyorum.`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) =>
            donusumGonder(
              e,
              `https://wa.me/${phone}?text=Merhaba,%20web%20siteniz%20%C3%BCzerinden%20yaz%C4%B1yorum.%20%C4%B0stanbul%20engelli%20taksi%20/%20engelli%20ula%C5%9F%C4%B1m%20hizmeti%20i%C3%A7in%20bilgi%20almak%20istiyorum.`
            )
          }
          className="flex items-center justify-center gap-2 rounded-full bg-love px-4 py-3 text-sm font-black text-white shadow-2xl transition hover:-translate-y-1"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </main>
  );
}