function App() {
  return (
    <>
      {/* Klavye kullanıcıları için navigasyonu atlama bağlantısı [cite: 994-1000, 1216] */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <nav aria-label="Ana navigasyon"> {/* Navigasyonu etiketleme [cite: 981-982] */}
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content"> {/* Sayfada yalnızca bir tane olmalı [cite: 748, 1006] */}
        
        <section id="hakkimda">
          <h1>Feyza [Soyadın] - Portfolyo</h1> {/* Sayfanın ana başlığı [cite: 857] */}
          <figure> {/* Görsel ve açıklama grubu [cite: 761, 920] */}
            <img 
              src="https://via.placeholder.com/150" 
              alt="Feyza'nin profil fotografi" /* Anlamlı alt metin [cite: 906, 917] */
            />
            <figcaption>Feyza [Soyadın]</figcaption>
          </figure>
          <p>Modern web teknolojileri üzerine calisan bir yazilim gelistirici adayiyim.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2> {/* Ana bölüm başlığı [cite: 858] */}
          <article> {/* Bağımsız içerik [cite: 753] */}
            <h3>Bungalov Rezervasyon Sistemi</h3> {/* Alt bölüm başlığı [cite: 859] */}
            <p>C# WinForms ve MSSQL kullanilarak gelistirilmis bir rezervasyon yonetim sistemidir.</p>
          </article>
          <article>
            <h3>Web Lab Projesi</h3>
            <p>React ve TypeScript ile semantik HTML yapisi kullanilarak hazirlandi.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* noValidate: Tarayıcı balonlarını kapatıp özel hata mesajı alanlarını kullanmak için [cite: 1167-1168] */}
          <form action="#" method="POST" noValidate>
            <fieldset> {/* İlişkili alanları gruplama [cite: 1043] */}
              <legend>Iletisim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label> {/* label ve htmlFor ilişkisi [cite: 1050] */}
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" /* Hata mesajıyla bağlantı [cite: 958, 1099] */
                />
                <small id="name-error" className="error-msg" role="alert"></small> {/* Erişilebilir uyarı [cite: 1101, 1170] */}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
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
                <label htmlFor="message">Mesajiniz:</label>
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

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Feyza. Tum haklari saklidir.</p> {/* Telif bilgisi [cite: 814] */}
      </footer>
    </>
  );
}

export default App;