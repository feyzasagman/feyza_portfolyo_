import './App.css';

function App() {
  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header className="site-header">
        <nav aria-label="Ana navigasyon" className="container">
          <div className="logo">FZ</div>
          <ul className="nav-links">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="container">

        <section id="hakkimda" className="section-card hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Feyza Sağman</h1>
              <p className="subtitle">Yazılım Mühendisi Adayı | 3. Sınıf</p>
              <p className="bio-description">
                <strong>Fırat Üniversitesi</strong> Yazılım Mühendisliği 3. sınıf öğrencisiyim.
                Şu anda ağırlıklı olarak <strong>Veri Bilimi</strong> ve <strong>Yapay Zeka</strong> üzerine çalışmalarımı sürdürüyorum.
              </p>

              <div className="hobbies">
                <h3>Hobilerim</h3>
                <ul className="hobby-list">
                  <li>🤖 Yapay Zeka Araştırmaları</li>
                  <li>📊 Veri Görselleştirme</li>
                  <li>📚 Teknik Okumalar</li>
                  <li>🌱 Sürekli Öğrenme</li>
                </ul>
              </div>
            </div>

            <figure className="hero-figure">
              <div className="profile-img-wrapper">
                <img
                  src="/feyza.jpg"
                  alt="Feyza Sağman'ın profil fotoğrafı"
                  className="profile-img"
                />
              </div>
              <figcaption>Fırat Üniversitesi & Yazılım Mühendisliği</figcaption>
            </figure>
          </div>
        </section>

        <section id="projeler" className="section-card">
          <h2>Projelerim</h2>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-icon">🏨</div>
              <div className="project-info">
                <h3>Bungalov Rezervasyon Sistemi</h3>
                <p>C# WinForms ve MSSQL kullanılarak geliştirilmiş rezervasyon yönetim sistemi.</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-icon">🌐</div>
              <div className="project-info">
                <h3>Web Lab Projesi</h3>
                <p>React ve TypeScript ile hazırlanmış semantik HTML çalışması.</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-icon">🛒</div>
              <div className="project-info">
                <h3>E-Ticaret Sitesi</h3>
                <p>React ile yapılmış kapsamlı bir e-ticaret uygulaması.</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-icon">📝</div>
              <div className="project-info">
                <h3>Blog Uygulaması</h3>
                <p>Markdown destekli modern blog sistemi.</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-icon">☁️</div>
              <div className="project-info">
                <h3>Hava Durumu</h3>
                <p>API entegrasyonu ile gerçek zamanlı hava durumu uygulaması.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="iletisim" className="section-card">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate className="contact-form">
            <fieldset>
              <legend className="sr-only">İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input type="text" id="name" name="name" required minLength={2} placeholder="Adınızı girin" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input type="email" id="email" name="email" required placeholder="E-posta adresinizi girin" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea id="message" name="message" rows={5} required minLength={10} placeholder="Mesajınızı buraya yazın..."></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit" className="submit-btn">
                <span>Gönder</span>
                <div className="btn-glow"></div>
              </button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Feyza Sağman. Fırat Üniversitesi Yazılım Mühendisliği.</p>
      </footer>
    </div>
  );
}

export default App;