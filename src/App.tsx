function App() {
  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <nav aria-label="Ana navigasyon">
          <div className="logo">FZ</div>
          <ul>
            <li>
              <a href="#hakkimda">Hakkımda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="section-card hero-section">
          <div className="hero-text">
            <h1>Feyza [Soyadın]</h1>
            <p className="subtitle">
              Modern web teknolojileri ile kullanıcı odaklı deneyimler üreten bir yazılım geliştirici adayı.
            </p>
          </div>
          <figure className="hero-figure">
            <img
              src="https://via.placeholder.com/160"
              alt="Feyza'nın profil fotoğrafı"
            />
            <figcaption>Frontend &amp; .NET ile ilgileniyorum.</figcaption>
          </figure>
        </section>

        <section id="projeler" className="section-card">
          <h2>Projelerim</h2>
          <div className="projects-grid">
            <article className="project-card">
              <h3>Bungalov Rezervasyon Sistemi</h3>
              <p>
                C# WinForms ve MSSQL kullanılarak geliştirilmiş, bungalov rezervasyon süreçlerini
                kolaylaştıran masaüstü uygulaması.
              </p>
            </article>
            <article className="project-card">
              <h3>Web Lab Projesi</h3>
              <p>
                React ve TypeScript ile hazırlanmış, semantik HTML ve erişilebilirlik odaklı bir web
                arayüzü çalışması.
              </p>
            </article>
          </div>
        </section>

        <section id="iletisim" className="section-card">
          <h2>İletişim</h2>
          <p className="section-intro">
            Aşağıdaki formu doldurarak benimle iletişime geçebilirsiniz.
          </p>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Feyza. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;