# 🍽️ Dört Ayaklı Kahvaltı Kafe – QR Menü

Modern ve şık bir dijital QR menü sistemi. Diyarbakır'ın bazalt avlusu temalı tasarımıyla, müşterileriniz menüye QR kod ile kolayca erişebilir.

## ✨ Özellikler

- 📱 **Mobil Uyumlu**: Tüm cihazlarda kusursuz görünüm
- 🎨 **Modern Tasarım**: Bazalt avlusu teması ile şık, koyu renkli arayüz
- 🔍 **Gelişmiş Arama**: Kategori ve ürün bazında arama
- 📊 **Sıralama Seçenekleri**: A-Z, Z-A, fiyat bazlı sıralama
- 🎯 **QR Kod Üretici**: Her masa için özel QR kod oluşturma
- ⚡ **Hızlı Yükleme**: Next.js 14 ile optimize performans
- 🌐 **SEO Uyumlu**: Robots.txt ve sitemap desteği

## 🚀 Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

### 3. Production Build

```bash
npm run build
npm start
```

## 📂 Proje Yapısı

```
dortayakli-qr-menu/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Ana layout (header, footer)
│   ├── page.tsx           # Ana sayfa (kategori listesi)
│   ├── globals.css        # Global stiller
│   ├── menu/[category]/   # Kategori detay sayfası
│   ├── t/[id]/            # Masa QR yönlendirme sayfası
│   └── qr/                # QR kod oluşturma sayfası
├── components/            # React bileşenleri
│   ├── CategoryCard.tsx   # Kategori kartı
│   ├── ProductRow.tsx     # Ürün satırı
│   └── SearchBar.tsx      # Arama çubuğu
├── data/
│   └── menu.json          # Menü verisi
├── lib/
│   ├── types.ts           # TypeScript tipleri
│   └── format.ts          # Yardımcı fonksiyonlar
└── public/
    └── favicon.ico
```

## 📝 Menü Düzenleme

Menüyü düzenlemek için `data/menu.json` dosyasını güncelleyin:

```json
{
  "Kategori Adı": [
    {
      "name": "Ürün Adı",
      "price": 100,
      "desc": "Ürün açıklaması (opsiyonel)"
    }
  ]
}
```

## 🔗 QR Kod Kullanımı

1. `/qr` sayfasına gidin
2. Masa kodunu girin (örn: A1, B3, C5)
3. QR kodu indirin ve yazdırın
4. Müşteriler QR kodu okuttuğunda doğrudan menüye yönlendirilir

## 🎨 Tasarım Sistemi

### Renkler

- **Basalt 900**: Ana arka plan (#0f1113)
- **Basalt 800**: Kart arka planı (#1a1d21)
- **Wood**: Vurgu rengi (#b07a39)
- **Leaf**: Odak rengi (#3da35d)

### Fontlar

- **Display**: Serif font (başlıklar için)
- **Body**: Sans-serif (içerik için)

## 🛠️ Teknolojiler

- **Next.js 14**: React framework (App Router)
- **TypeScript**: Tip güvenliği
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animasyonlar
- **Lucide React**: İkonlar
- **qrcode.react**: QR kod üretimi

## 📦 npm Scriptleri

```bash
npm run dev      # Geliştirme sunucusu (port 3000)
npm run build    # Production build
npm run start    # Production sunucusu
npm run lint     # ESLint kontrolü
```

## 🌐 Deployment

### Vercel (Önerilen)

1. GitHub'a push edin
2. Vercel'e import edin
3. Otomatik deploy!

### Diğer Platformlar

Build komutunu çalıştırın ve `.next` klasörünü deploy edin:

```bash
npm run build
```

## 📄 Lisans

© 2025 Dört Ayaklı Kahvaltı Kafe · Diyarbakır

## 🤝 Destek

Sorularınız için: [info@dortayakli.com](mailto:info@dortayakli.com)

---

**Afiyet olsun!** ☕🍽️

