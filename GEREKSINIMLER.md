# 📋 Frontend Gereksinim Analizi
## Dört Ayaklı Kahvaltı Kafe - QR Menü Sistemi

### 🎯 Proje Özeti
Diyarbakır'ın tarihi ve kültürel dokusunu yansıtan, bazalt taşı ve tahta dokusu temalı, modern ve kullanıcı dostu dijital QR menü sistemi.

---

## 1. 📱 Fonksiyonel Gereksinimler

### 1.1 Ana Sayfa
**Açıklama**: Kullanıcıların menü kategorilerini görüntüleyebileceği karşılama sayfası.

**Özellikler**:
- ✅ Tüm menü kategorilerinin liste halinde gösterimi
- ✅ Her kategoride bulunan ürün sayısının gösterimi
- ✅ Kategorilere tıklayarak detay sayfasına geçiş
- ✅ "Hoş Geldiniz" başlık bölümü
- ✅ Animasyonlu kategori kartları (Framer Motion)
- ✅ Responsive grid layout (mobil: 1 kolon, tablet+: 2 kolon)

**Kullanıcı Senaryosu**:
1. Müşteri masadaki QR kodu okutarak menüye girer
2. Ana sayfada 6 kategori görür: Kahvaltı, Sıcak İçecekler, Soğuk İçecekler, Tatlılar, Ana Yemekler, Salatalar
3. İstediği kategoriye tıklar

### 1.2 Kategori Detay Sayfası
**Açıklama**: Seçilen kategorideki tüm ürünlerin listelendiği sayfa.

**Özellikler**:
- ✅ Kategori adının başlıkta gösterimi
- ✅ "Ana Sayfa" geri dönüş butonu
- ✅ Ürün sıralama seçenekleri:
  - A → Z (alfabetik artan)
  - Z → A (alfabetik azalan)
  - Fiyat (Artan)
  - Fiyat (Azalan)
- ✅ Ürün listesi:
  - Ürün adı
  - Ürün açıklaması (varsa)
  - Fiyat (TL formatında)
- ✅ Toplam ürün sayısının gösterimi
- ✅ Hover efektleri

**Kullanıcı Senaryosu**:
1. Kullanıcı "Kahvaltı" kategorisine tıklar
2. Sayfada tüm kahvaltı ürünlerini görür
3. Fiyata göre sıralama yapabilir
4. Her ürünün adını, açıklamasını ve fiyatını görür

### 1.3 QR Kod Oluşturma Sayfası
**Açıklama**: Restoran yöneticilerinin masa QR kodları oluşturabildiği panel.

**Özellikler**:
- ✅ Masa kodu giriş alanı
- ✅ Dinamik QR kod oluşturma (qrcode.react)
- ✅ QR kod önizleme
- ✅ QR kod indirme özelliği
- ✅ Yazdırma özelliği
- ✅ Kullanım talimatları bölümü
- ✅ URL önizleme

**Kullanıcı Senaryosu**:
1. Yönetici /qr sayfasına gider
2. "A1" masa kodunu girer
3. QR kod otomatik oluşturulur
4. "İndir" butonuyla PNG olarak indirir
5. QR kodu yazdırıp masaya yerleştirir

### 1.4 Masa Yönlendirme Sayfası
**Açıklama**: QR kod okutulduğunda kullanıcının yönlendirildiği geçiş sayfası.

**Özellikler**:
- ✅ Masa numarasının gösterimi
- ✅ Hoş geldiniz mesajı
- ✅ Otomatik ana sayfaya yönlendirme (1.5 saniye)
- ✅ Masa bilgisinin localStorage'a kaydedilmesi
- ✅ Loading animasyonu

**Kullanıcı Senaryosu**:
1. Müşteri QR kodu okuttur (örn: /t/A1)
2. "Masa A1 - Hoş geldiniz" ekranı görür
3. 1.5 saniye sonra otomatik ana sayfaya yönlendirilir

### 1.5 Hata Sayfaları

#### 404 - Sayfa Bulunamadı
- ✅ Kullanıcı dostu hata mesajı
- ✅ "Ana Sayfaya Dön" butonu
- ✅ Diyarbakır temalı tasarım

#### Error - Genel Hata
- ✅ Hata mesajının gösterimi
- ✅ "Tekrar Dene" butonu
- ✅ Error boundary ile yakalama

#### Loading Durumu
- ✅ Skeleton ekranlar
- ✅ Animasyonlu loading state

---

## 2. 🎨 Tasarım Gereksinimleri

### 2.1 Renk Paleti

#### Ana Renkler
- **Basalt (Bazalt Taşı)**: `#0f0f0f` - `#f7f7f7`
  - Diyarbakır'ın tarihi surlarını temsil eder
  - Header, footer ve koyu temalar için

- **Copper (Bakır)**: `#d95420` - `#fef6f0`
  - Geleneksel bakırcılık sanatını yansıtır
  - Butonlar, rozetler, vurgu renkleri

- **Terracotta (Toprak)**: `#b1563c` - `#faf5f2`
  - Dicle'nin bereketli toprağı
  - Gradient'ler ve aksan renkleri

- **Dicle (Yeşil)**: `#366d53` - `#f2f8f5`
  - Dicle Nehri ve doğa
  - İkincil vurgu renkleri

### 2.2 Tipografi

#### Font Aileleri
- **Playfair Display**: Başlıklar ve ürün isimleri (serif, elegant)
- **Cinzel**: Ottoman tarzı - Badge'ler ve özel yazılar (serif, klasik)
- **Inter**: Gövde metni ve açıklamalar (sans-serif, modern)

#### Font Ağırlıkları
- Light (300): Açıklama metinleri
- Regular (400): Normal metin
- Medium (500): Vurgular
- Semibold (600): Alt başlıklar
- Bold (700): Başlıklar
- Black (800-900): Ana başlıklar

#### Font Boyutları
- H1: 3rem - 5rem (48px - 80px)
- H2: 2rem - 3rem (32px - 48px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)
- XSmall: 0.75rem (12px)

### 2.3 Doku ve Pattern'ler

#### Bazalt Taşı Dokusu
- Yatay çizgiler (80px aralık) - taş sıraları
- Dikey çizgiler (120px aralık) - birleşim noktaları
- Şaşırtmalı pattern - gerçek sur yapısı
- SVG bazlı taş detayları
- Arka planda sabit (fixed position)

#### Tahta Dokusu
- Dikey ahşap damarları (3-4px aralık)
- İnce detay çizgileri (15px aralık)
- Ahşap halkası efekti (25-50px)
- SVG dalgalı pattern
- Copper/terracotta renkli elementlerde

### 2.4 Gölgeler ve Efektler

#### Shadow Tipleri
- **Soft**: `0 4px 20px rgba(0, 0, 0, 0.08)` - Hafif kartlar
- **Medium**: `0 10px 40px rgba(0, 0, 0, 0.15)` - Standart kartlar
- **Strong**: `0 20px 60px rgba(0, 0, 0, 0.25)` - Hover durumları
- **Basalt**: `0 8px 32px rgba(15, 15, 15, 0.3)` - Koyu elementler
- **Copper**: `0 0 30px rgba(233, 109, 47, 0.25)` - Bakır glow

#### Hover Efektleri
- Scale: `1.02` - `1.05`
- TranslateY: `-4px` - `-6px`
- Shadow artışı
- Renk geçişleri
- Süre: `300ms`

### 2.5 Responsive Tasarım

#### Breakpoint'ler
- Mobile: `< 640px` (sm)
- Tablet: `640px - 768px` (md)
- Desktop: `768px - 1024px` (lg)
- Large Desktop: `> 1024px` (xl)

#### Layout Değişimleri
- **Mobile**: 
  - 1 kolon grid
  - Tam genişlik butonlar
  - Stack'lenmiş elementler
  - Küçük padding'ler

- **Tablet**: 
  - 2 kolon grid
  - Flex layout
  - Orta boyut padding

- **Desktop**: 
  - 2-3 kolon grid
  - Geniş container (max-w-7xl)
  - Büyük padding'ler
  - Yan yana butonlar

---

## 3. 🔧 Teknik Gereksinimler

### 3.1 Teknoloji Stack

#### Frontend Framework
- **Next.js 14**: React framework (App Router)
  - Server Components
  - Client Components
  - Dynamic routing
  - Metadata API

#### Styling
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Custom CSS**: Özel doku ve pattern'ler
- **Google Fonts**: Playfair Display, Cinzel, Inter

#### Animasyonlar
- **Framer Motion 11**: React animasyon kütüphanesi
  - Page transitions
  - Hover animations
  - Stagger animations
  - Exit animations

#### Utilities
- **Lucide React**: İkon seti
- **qrcode.react**: QR kod oluşturma
- **TypeScript**: Type safety

### 3.2 Proje Yapısı

```
dortayakli-qr-menu/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (header, footer)
│   ├── page.tsx                 # Ana sayfa (kategoriler)
│   ├── globals.css              # Global CSS + Tailwind
│   ├── loading.tsx              # Loading state
│   ├── not-found.tsx            # 404 sayfası
│   ├── error.tsx                # Error boundary
│   ├── menu/[category]/         # Dinamik kategori sayfası
│   │   └── page.tsx
│   ├── qr/                      # QR kod oluşturma
│   │   └── page.tsx
│   ├── t/[id]/                  # Masa yönlendirme
│   │   └── page.tsx
│   ├── robots.txt/              # SEO
│   │   └── route.ts
│   └── sitemap.xml/             # SEO
│       └── route.ts
├── components/                   # React bileşenleri
│   ├── CategoryCard.tsx         # Kategori kartı
│   ├── ProductRow.tsx           # Ürün satırı
│   └── SearchBar.tsx            # Arama çubuğu (kullanılmıyor)
├── data/                        # Veri dosyaları
│   └── menu.json               # Menü verisi
├── lib/                         # Utility fonksiyonlar
│   ├── types.ts                # TypeScript tipleri
│   └── format.ts               # Format fonksiyonları
├── public/                      # Statik dosyalar
│   └── favicon.ico
├── package.json                 # Bağımlılıklar
├── postcss.config.js           # PostCSS config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
└── README.md                    # Dokümantasyon
```

### 3.3 Veri Yapısı

#### Menu.json Format
```typescript
{
  "Kategori Adı": [
    {
      "name": "Ürün Adı",        // String (zorunlu)
      "price": 100,               // Number (zorunlu)
      "desc": "Açıklama"          // String (opsiyonel)
    }
  ]
}
```

#### TypeScript Tipleri
```typescript
type MenuItem = {
  name: string
  price: number
  desc?: string
  tags?: string[]
}

type MenuData = Record<string, MenuItem[]>
```

### 3.4 Performans Gereksinimleri

#### Optimizasyon
- ✅ Server-side rendering (SSR)
- ✅ Static generation where possible
- ✅ Image optimization (Next.js)
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification

#### Metrikler
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

#### Bundle Size
- Main bundle: < 200KB (gzipped)
- Total page size: < 500KB
- Font files: Optimized loading

### 3.5 Browser Desteği

#### Desteklenen Tarayıcılar
- Chrome/Edge: Son 2 versiyon
- Firefox: Son 2 versiyon
- Safari: Son 2 versiyon
- Mobile Safari: iOS 13+
- Chrome Mobile: Android 8+

#### Feature Support
- ES6+ syntax
- CSS Grid & Flexbox
- CSS Custom Properties
- SVG support
- LocalStorage
- Service Workers (opsiyonel)

---

## 4. 🎭 Kullanıcı Deneyimi (UX)

### 4.1 Navigasyon

#### Ana Navigasyon Akışı
```
QR Kod Okutma → Masa Yönlendirme (1.5s) → Ana Sayfa (Kategoriler)
                                              ↓
                                      Kategori Seçimi
                                              ↓
                                      Ürün Listesi
                                              ↓
                                      Geri Butonu → Ana Sayfa
```

#### Header
- Logo (Coffee icon + "DÖRT AYAKLI")
- "Dijital Menü" rozeti
- Sticky positioning
- Bazalt taşı + tahta doku

#### Footer
- Logo ve işletme adı
- Açıklama metni
- Copyright bilgisi
- Bazalt taşı doku

### 4.2 Etkileşim Tasarımı

#### Tıklanabilir Elementler
- **Minimum boyut**: 44x44px (Apple HIG)
- **Hover feedback**: Renk/shadow değişimi
- **Active state**: Scale(0.98)
- **Focus state**: Ring border

#### Butonlar
- **Primary**: Bakır gradient + tahta doku
- **Secondary**: Beyaz arka plan + border
- **Disabled**: Opacity 0.5 + pointer-events-none

#### Form Elementler
- Input: Beyaz arka plan + border
- Focus: Copper border + ring
- Placeholder: Açık gri
- Error: Kırmızı border

### 4.3 Feedback ve Durum Gösterimi

#### Loading States
- Skeleton screens
- Animasyonlu placeholder'lar
- Spinner (QR redirect)

#### Empty States
- Açıklayıcı mesaj
- Yardımcı ikon
- Geri dönüş önerisi

#### Success/Error Messages
- Toast notifications (opsiyonel)
- Inline error messages
- Success animations

### 4.4 Erişilebilirlik (A11y)

#### WCAG 2.1 AA Standartları
- ✅ Kontrast oranı: En az 4.5:1 (normal metin)
- ✅ Kontrast oranı: En az 3:1 (büyük metin)
- ✅ Keyboard navigasyonu
- ✅ Focus indicators
- ✅ Alt text'ler
- ✅ ARIA labels
- ✅ Semantic HTML

#### Screen Reader Support
- Proper heading hierarchy (h1, h2, h3)
- Descriptive link text
- Form labels
- Button descriptions
- Image alt attributes

---

## 5. 📊 SEO ve Metadata

### 5.1 Meta Tags

#### Her Sayfa için
```typescript
{
  title: "Dört Ayaklı Kahvaltı Kafe – QR Menü",
  description: "Diyarbakır'ın tarihi dokusunu ve bazalt avlusunun ruhunu taşıyan otantik dijital menü.",
  themeColor: "#f7f7f7",
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8"
}
```

### 5.2 Robots.txt
```
User-agent: *
Allow: /
```

### 5.3 Sitemap.xml
- Ana sayfa (/)
- QR sayfa (/qr)
- Dinamik kategori sayfaları (opsiyonel)

### 5.4 Open Graph
```html
<meta property="og:title" content="Dört Ayaklı Kahvaltı Kafe" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/og-image.png" />
```

---

## 6. 🔒 Güvenlik Gereksinimleri

### 6.1 XSS Protection
- Next.js built-in XSS protection
- Input sanitization
- Content Security Policy (CSP)

### 6.2 Data Validation
- TypeScript type checking
- Runtime validation (optional)
- Safe JSON parsing

### 6.3 HTTPS
- SSL sertifikası (production)
- Secure cookie settings
- HSTS headers

---

## 7. 📱 Mobil Optimizasyon

### 7.1 Touch Gestures
- Tap targets: Minimum 44x44px
- Swipe gestures: Sayfa geçişleri (opsiyonel)
- Pinch-to-zoom: Disabled (viewport-fit)

### 7.2 Mobile Performance
- Lazy loading images
- Code splitting
- Prefetching critical resources
- Service Worker caching (PWA opsiyonel)

### 7.3 Network Handling
- Offline fallback (opsiyonel)
- Slow network indicators
- Error retry mechanisms

---

## 8. 🧪 Test Gereksinimleri

### 8.1 Tarayıcı Testleri
- Chrome DevTools
- Firefox Developer Tools
- Safari Web Inspector
- Responsive design mode

### 8.2 Cihaz Testleri
- iPhone (Safari)
- Android (Chrome)
- Tablet (iPad/Android)
- Desktop (Windows/Mac)

### 8.3 Kullanıcı Senaryoları
1. ✅ QR kod okutma ve menüye erişim
2. ✅ Kategori gezinme
3. ✅ Ürün görüntüleme ve sıralama
4. ✅ QR kod oluşturma ve indirme
5. ✅ Hata durumları
6. ✅ Loading durumları

---

## 9. 📦 Deployment Gereksinimleri

### 9.1 Hosting Önerileri
- **Vercel**: Next.js için optimize (önerilen)
- **Netlify**: Alternatif
- **AWS/DigitalOcean**: Self-hosted

### 9.2 Environment Variables
```env
NEXT_PUBLIC_BASE_URL=https://example.com
NODE_ENV=production
```

### 9.3 Build Optimizasyonları
- Production build: `next build`
- Static export (opsiyonel): `next export`
- Image optimization
- Font optimization
- CSS minification

---

## 10. 🔄 Bakım ve Güncellemeler

### 10.1 Menü Güncelleme
- `data/menu.json` dosyasını düzenle
- Git commit
- Deploy (otomatik Vercel/Netlify ile)

### 10.2 Versiyon Kontrolü
- Git repository
- Semantic versioning
- Changelog

### 10.3 Monitoring
- Error tracking (Sentry opsiyonel)
- Analytics (Google Analytics opsiyonel)
- Performance monitoring

---

## 11. 📋 Geliştirme Checklist

### ✅ Tamamlanan Özellikler
- [x] Ana sayfa (kategori listesi)
- [x] Kategori detay sayfası
- [x] Ürün sıralama
- [x] QR kod oluşturma
- [x] Masa yönlendirme
- [x] Loading states
- [x] Error handling
- [x] 404 sayfası
- [x] Responsive design
- [x] Animasyonlar
- [x] Diyarbakır teması
- [x] Bazalt taşı dokusu
- [x] Tahta dokusu
- [x] SEO optimizasyonu

### 🔄 Gelecek Özellikler (Opsiyonel)
- [ ] Dil desteği (TR/EN)
- [ ] Ürün resimleri
- [ ] Filtre sistemi (vegan, glutensiz, vb.)
- [ ] Favoriler
- [ ] Sipariş sistemi entegrasyonu
- [ ] Admin paneli
- [ ] Analitik dashboard
- [ ] PWA desteği
- [ ] Dark/Light mode

---

## 12. 📞 İletişim ve Destek

### Teknik Destek
- Email: info@dortayakli.com
- GitHub Issues
- Dokümantasyon: README.md

### Güncellemeler
- npm run dev: Geliştirme sunucusu
- npm run build: Production build
- npm run start: Production sunucusu

---

**Son Güncelleme**: Ekim 2025  
**Versiyon**: 1.0.0  
**Durum**: ✅ Tamamlandı ve Çalışır Durumda

