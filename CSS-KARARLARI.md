CSS Kararları

1. Breakpoint Seçimi



Mobil (Varsayılan): Tasarımı en küçük ekranlardan başlatarak mobile-first yaklaşımını uyguladım.



Tablet (640px): İçeriğin (özellikle "Hakkımda" bölümü) yan yana gelmeye başladığı ilk kırılım noktası olarak belirledim.



Masaüstü (1024px): Geniş ekranlarda içerik genişliğini sınırlamak ve proje kartlarını 3 sütunlu yapıya geçirmek için bu noktayı seçtim.

2. Layout Tercihleri



Header: Logo ve navigasyon linklerini iki uca yaslamak ve mobilde dikey hizalamak için Flexbox kullandım.



Proje Kartları: Kartları ızgara düzeninde tutmak ve ekran daraldığında otomatik olarak alt alta geçmelerini sağlamak için CSS Grid (repeat(auto-fit, minmax(280px, 1fr))) kullandım.



Neden auto-fit?: Boş kalan alanların kartlar tarafından doldurulması ve esnek bir yapı sunması için tercih ettim.

3. Design Tokens



Renk Paleti: Marka kimliğini yansıtması için koyu bir arka plan üzerine mor/lavanta tonlarını (--color-primary) ana renk olarak seçtim.



Spacing: Tutarlılık sağlamak için 0.25rem ile 4rem arasında değişen bir ölçek (--space-xs'ten --space-3xl'e) kullandım.



Fluid Typography: Yazı boyutlarının ekran genişliğine göre akıcı değişmesi için clamp() fonksiyonunu uyguladım.

4. Responsive Stratejiler



Mobile-First: Tüm CSS'i önce mobil için yazdım, ardından min-width kullanarak büyük ekranlar için geliştirdim.



Görseller: Resimlerin kapsayıcı dışına taşmaması için max-width: 100% ve bozulmadan sığması için object-fit: cover kurallarını kullandım.