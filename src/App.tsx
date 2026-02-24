import './App.css';
function App() {

  return (
    <div className="app-container">
      {/* Klavye kullanıcıları için navigasyonu atlama bağlantısı [cite: 677] */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header className="site-header">
        <nav aria-label="Ana navigasyon" className="container"> {/* [cite: 524] */}
          <div className="logo">FZ</div>
          <ul className="nav-links">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="container"> {/* Sayfada yalnızca bir tane olmalı [cite: 83, 153] */}
        
        <section id="hakkimda" className="section-card hero-section"> {/* [cite: 526] */}
          <div className="hero-content">
            <div className="hero-text">
              <h1>Feyza Sağman</h1> {/* H1 ana başlık hiyerarşisi [cite: 192, 671] */}
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
  <img
    src="/feyza.jpg"
    alt="Feyza Sağman'ın profil fotoğrafı"
    className="profile-img" 
  />
  <figcaption>Fırat Üniversitesi & Yazılım Mühendisliği</figcaption>
</figure>
          </div>
        </section>

        <section id="projeler" className="section-card">
          <h2>Projelerim</h2>
          <div className="projects-grid">
            <article className="project-card"> {/* Bağımsız içerik bloğu [cite: 88, 532] */}
              <h3>Bungalov Rezervasyon Sistemi</h3>
              <p>C# WinForms ve MSSQL kullanılarak geliştirilmiş rezervasyon yönetim sistemi.</p>
            </article>
            <article className="project-card">
              <h3>Web Lab Projesi</h3>
              <p>React ve TypeScript ile hazırlanmış semantik HTML çalışması.</p>
            </article>
          </div>
        </section>

        <section id="iletisim" className="section-card">
          <h2>İletişim</h2>
          {/* noValidate: Özel hata mesajları için tarayıcı balonlarını kapatır [cite: 426, 503] */}
          <form action="#" method="POST" noValidate className="contact-form">
            <fieldset> {/* İlişkili alanları gruplar [cite: 378] */}
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label> {/* Label ve htmlFor ilişkisi [cite: 385, 673] */}
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small> {/* Erişilebilir uyarı [cite: 505, 675] */}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit" className="submit-btn">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="site-footer"> {/* [cite: 94, 684] */}
        <p>&copy; 2026 Feyza Sağman. Fırat Üniversitesi Yazılım Mühendisliği.</p>
      </footer>
    </div>
  );
}

export default App;