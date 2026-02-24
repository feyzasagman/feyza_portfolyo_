function App() {
  return (
    <>
      {/* 1. Skip Navigation: Klavye kullanıcıları için [cite: 994-1000] */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h1>Feyza [Soyadın] - Portfolyo</h1>
          <figure>
            <img src="https://via.placeholder.com/150" alt="Feyza'nin profil fotografi" />
            <figcaption>Feyza [Soyadın]</figcaption>
          </figure>
          <p>Modern web teknolojileri öğreniyorum.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Bungalov Rezervasyon Sistemi</h3>
            <p>C# WinForms ve MSSQL projesi.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* HATA DÜZELTİLDİ: novalidate -> noValidate [cite: 1168] */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
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
              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Feyza. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App