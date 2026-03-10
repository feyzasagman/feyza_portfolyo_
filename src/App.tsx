import { useState, useEffect } from 'react';
import './App.css'; // Mevcut CSS'in durabilir, Tailwind üzerine eklenecektir
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import UIKit from './UIKit'; // UI Kit sayfasını görmek istersen

function App() {
  const [showUIKit, setShowUIKit] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  // Sync dark mode class on mount and change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (showUIKit) {
    return (
      <div className="relative">
        <div className="fixed top-4 left-4 right-4 z-[100] flex justify-center sm:justify-end sm:right-8">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowUIKit(false)}
            className="shadow-xl backdrop-blur-md bg-opacity-80 border-white/10"
          >
            Portfolyoya Dön
          </Button>
        </div>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header className="site-header">
        <nav aria-label="Ana navigasyon">
          <div className="logo">FZ</div>
          <ul className="nav-links">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
            <li>
              <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                🌙/☀️
              </Button>
            </li>
            <li>
              <Button variant="primary" size="sm" onClick={() => setShowUIKit(true)}>
                UI Kit
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">

        {/* --- HAKKIMDA (HERO) --- */}
        <section id="hakkimda" className="section-card hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="text-gray-900 dark:text-white">Feyza Sağman</h1>
              <p className="subtitle">Yazılım Mühendisi Adayı | 3. Sınıf</p>
              <p className="bio-description leading-relaxed">
                <strong>Fırat Üniversitesi</strong> Yazılım Mühendisliği öğrencisiyim.
                Şu anda ağırlıklı olarak <strong>Veri Bilimi</strong> ve <strong>Yapay Zeka</strong> üzerine çalışmalarımı sürdürüyorum.
              </p>
              <div className="hobbies">
                <h3>Hobilerim</h3>
                <ul className="hobby-list">
                  <li>Yapay Zeka</li>
                  <li>Robotik</li>
                  <li>Fotoğrafçılık</li>
                  <li>Okçuluk</li>
                </ul>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="primary">CV İndir</Button>
                <Button variant="secondary">Projelerime Git</Button>
              </div>
            </div>

            <figure className="hero-figure">
              <div className="profile-img-wrapper">
                <img src="/feyza.jpg" alt="Feyza Sağman" className="profile-img" />
              </div>
              <figcaption>Fırat Üniversitesi & Yazılım Mühendisliği</figcaption>
            </figure>
          </div>
        </section>

        {/* --- PROJELER --- */}
        <section id="projeler" className="section-card">
          <h2>Projelerim</h2>
          <div className="projects-grid">
            <Card title="Bungalov Rezervasyon" variant="elevated" footer={<Button variant="ghost" size="sm">Detaylar →</Button>}>
              <div className="project-card">
                <div className="project-icon">🏠</div>
                <div className="project-info">
                  <p>C# WinForms ve MSSQL kullanılarak geliştirilmiş rezervasyon yönetim sistemi.</p>
                </div>
              </div>
            </Card>
            <Card title="Web Lab Projesi" variant="elevated" footer={<Button variant="ghost" size="sm">Detaylar →</Button>}>
              <div className="project-card">
                <div className="project-icon">🧪</div>
                <div className="project-info">
                  <p>React ve TypeScript ile hazırlanmış semantik HTML çalışması.</p>
                </div>
              </div>
            </Card>
            <Card title="E-Ticaret Sitesi" variant="elevated" footer={<Button variant="ghost" size="sm">Detaylar →</Button>}>
              <div className="project-card">
                <div className="project-icon">🛒</div>
                <div className="project-info">
                  <p>React ile yapılmış kapsamlı bir e-ticaret uygulaması.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* --- İLETİŞİM --- */}
        <section id="iletisim" className="section-card">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center mb-12">İletişim</h2>
            <form className="contact-form space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input id="name" label="Ad Soyad" placeholder="Adınızı girin" required />
                <Input id="email" type="email" label="E-posta" placeholder="E-posta adresinizi girin" required />
              </div>
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/20 text-white focus:border-[#818cf8]/50 focus:ring-2 focus:ring-[#818cf8]/20 transition-all outline-none"
                  placeholder="Mesajınızı buraya yazın..."
                  required
                ></textarea>
              </div>
              <Button variant="primary" className="submit-btn h-14">
                Gönder
                <span className="btn-glow"></span>
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Feyza Sağman. Fırat Üniversitesi Yazılım Mühendisliği.</p>
      </footer>
    </div>
  );
}

export default App;