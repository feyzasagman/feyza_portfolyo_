export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const profile = {
  name: 'Feyza Sağman',
  initials: 'FZ',
  title: 'Yazılım Mühendisi Adayı | 3. Sınıf',
  university: 'Fırat Üniversitesi Yazılım Mühendisliği',
  location: 'Elazığ, Türkiye',
  shortDescription:
    'Yazılım mühendisliği öğrencisi; web geliştirme, veri bilimi, yapay zeka ve otomasyon alanlarında projeler üretiyorum.',
  about:
    'Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Web geliştirme, veri bilimi, yapay zeka ve otomasyon alanlarına güçlü bir ilgi duyuyorum. React, TypeScript, Python, Firebase ve Git teknolojileriyle kullanıcı odaklı çözümler geliştiriyorum. Öğrenmeye açık, takım çalışmasına yatkın ve yeni projeler üretmeye istekli bir geliştirici olarak hem teknik becerilerimi hem de problem çözme yeteneğimi sürekli geliştiriyorum.',
  email: 'sagmanfeyza@gmail.com',
  githubUsername: 'feyzasagman',
  githubUrl: 'https://github.com/feyzasagman',
  linkedinUrl: 'https://www.linkedin.com/in/feyza-sa%C4%9Fman-01773428b/',
  featuredSkills: [
    'Frontend Geliştirme',
    'Veri Bilimi',
    'Yapay Zeka',
    'Firebase',
    'Python',
    'React',
  ],
  skillCategories: [
    {
      title: 'Frontend Geliştirme',
      description: 'Modern ve responsive kullanıcı arayüzleri geliştirme.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React',
        'Responsive Design',
        'UI/UX Temelleri',
      ],
    },
    {
      title: 'Backend ve Veritabanı',
      description: 'Veri yönetimi, kullanıcı işlemleri ve temel backend süreçleri.',
      skills: [
        'Firebase',
        'Firestore',
        'SQL',
        'REST API',
        'Authentication',
        'Veri Modelleme',
      ],
    },
    {
      title: 'Veri Bilimi ve Yapay Zeka',
      description: 'Veri analizi, makine öğrenmesi ve yapay zeka destekli çözümler.',
      skills: [
        'Python',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Scikit-learn',
        'Makine Öğrenmesi',
        'Veri Analizi',
        'Yapay Zeka',
        'LLM',
        'NLP / Metin İşleme',
      ],
    },
    {
      title: 'Mobil ve Uygulama Geliştirme',
      description: 'Mobil arayüz ve uygulama geliştirme süreçlerine yönelik deneyim.',
      skills: ['Flutter', 'React Native', 'Android Temelleri', 'Mobil UI', 'QR / Check-in Akışı'],
    },
    {
      title: 'Araştırma ve Simülasyon',
      description: 'Akademik araştırma, simülasyon ve teknik analiz süreçleri.',
      skills: [
        'Python Simülasyon',
        'Kanal Modelleme',
        'BER Analizi',
        'Sinyal İşleme',
        'OFDM / FBMC-OQAM',
        'Teknik Raporlama',
      ],
    },
    {
      title: 'Araçlar ve Çalışma Ortamı',
      description: 'Geliştirme, versiyon kontrolü ve üretkenlik araçları.',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Cursor',
        'Docker Temelleri',
        'Figma',
        'Postman',
        'Chrome DevTools',
      ],
    },
  ] satisfies SkillCategory[],
  interests: [
    'Yapay Zeka',
    'Veri Bilimi',
    'Frontend Geliştirme',
    'Mobil Uygulama',
    'Robotik',
    'Fotoğrafçılık',
  ],
  focusAreas: ['Web Geliştirme', 'Veri Bilimi', 'Yapay Zeka', 'Otomasyon'],
  experiences: [
    {
      company: 'Google Yapay Zeka ve Teknoloji Akademisi',
      role: 'Bursiyer',
      period: '2026',
      location: 'Türkiye',
      type: 'Eğitim / Burs Programı',
      description:
        'Veri bilimi, yapay zeka, proje geliştirme ve takım çalışması alanlarında eğitimler alarak uygulamalı projeler geliştirdim.',
      responsibilities: [
        'Veri bilimi ve yapay zeka temelli eğitim süreçlerine katıldım.',
        'Makine öğrenmesi, veri analizi ve proje geliştirme alanlarında uygulamalı çalışmalar yaptım.',
        'Takım çalışmasıyla problem çözme, veri yorumlama ve model geliştirme deneyimi kazandım.',
        'Datathon ve proje odaklı çalışmalarla gerçek veri problemleri üzerine çözümler geliştirdim.',
      ],
      technologies: [
        'Python',
        'Veri Bilimi',
        'Makine Öğrenmesi',
        'Yapay Zeka',
        'Pandas',
        'Scikit-learn',
      ],
    },
    {
      company: 'TÜBİTAK 2247-C',
      role: 'Araştırmacı Stajyer',
      period: '2026',
      location: 'Türkiye',
      type: 'Araştırma / Yazılım Geliştirme',
      description:
        'Python tabanlı simülasyon, kanal modelleme ve yapay zeka destekli analiz çalışmaları yürüttüm.',
      responsibilities: [
        'Haberleşme sistemleri üzerine Python tabanlı simülasyonlar geliştirdim.',
        'FBMC-OQAM, kanal modelleme ve fiziksel katman güvenliği üzerine araştırma süreçlerine katkı sağladım.',
        'Modülasyon, demodülasyon, BER analizi ve kanal kestirimi konularında deneyim kazandım.',
        'Araştırma sonuçlarını analiz ederek teknik rapor ve grafiklerle yorumladım.',
      ],
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Simülasyon', 'Sinyal İşleme', 'Yapay Zeka'],
    },
    {
      company: 'SİA Teknoloji',
      role: 'Yazılım / Veri Odaklı Stajyer',
      period: '2026',
      location: 'Türkiye',
      type: 'Staj',
      description:
        'Python tabanlı metin işleme, veri çıkarımı, otomasyon ve LLM destekli chatbot geliştirme süreçlerinde görev aldım.',
      responsibilities: [
        'WhatsApp lojistik mesajlarından rota, fiyat ve iş bilgisi çıkarımı üzerine çalıştım.',
        'Metin işleme ve veri temizleme süreçleri geliştirdim.',
        'Çıkarılan verilerin tablo formatına aktarılması için otomasyon mantığı oluşturdum.',
        'LLM destekli chatbot geliştirme ve kullanıcı mesajlarından anlamlı veri çıkarma süreçlerine katkı sağladım.',
      ],
      technologies: ['Python', 'Metin İşleme', 'LLM', 'Chatbot', 'Otomasyon', 'Veri Çıkarımı'],
    },
    {
      company: 'Software Persona',
      role: 'Yazılım Stajyeri',
      period: '2026',
      location: 'Türkiye',
      type: 'Staj',
      description:
        'Yazılım geliştirme süreçlerini gözlemleyerek web teknolojileri, proje yapısı ve ekip içi geliştirme akışı hakkında deneyim kazandım.',
      responsibilities: [
        'Web geliştirme süreçlerinde kullanılan temel teknolojileri inceledim.',
        'Frontend geliştirme, proje dosya yapısı ve kullanıcı arayüzü mantığı üzerine çalışmalar yaptım.',
        'Ekip içi yazılım geliştirme süreci, görev takibi ve kod düzeni hakkında deneyim kazandım.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
    },
  ] satisfies Experience[],
  education: [
    {
      school: 'Fırat Üniversitesi',
      department: 'Yazılım Mühendisliği',
      period: 'Devam ediyor',
      description: '3. sınıf yazılım mühendisliği öğrencisi.',
    },
  ],
  certifications: [
    {
      title: 'Google Yapay Zeka ve Teknoloji Akademisi',
      issuer: 'Google',
      year: '2026',
    },
  ],
};
