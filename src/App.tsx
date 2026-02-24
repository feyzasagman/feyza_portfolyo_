function App() {
  return (
    <>
      {/* Klavye kullanıcıları için navigasyonu atlama bağlantısı [cite: 994-1000] */}
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

      <main id="main-content"> {/* Sayfada sadece bir kez bulunmalı [cite: 748, 818] */}
        
        <section id="hakkimda">
          <h1>[Adiniz Soyadiniz] - Kisisel Portfolyo</h1> {/* Ana başlık [cite: 857] */}
          <figure> {/* Görsel ve açıklama grubu [cite: 761-762, 920-926] */}
            <img 
              src="https://via.placeholder.com/150" 
              alt="[Adiniz]'in vesikalik fotografi" /* Anlamlı alt metin [cite: 906, 917-918] */
            />
            <figcaption>[Adiniz Soyadiniz]</figcaption>
          </figure>
          <p>Modern web teknolojileri üzerine calisan bir ogrenciyim.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2> {/* Hiyerarşik başlık [cite: 858] */}
          <article> {/* Bağımsız içerik bloğu [cite: 753-755] */}
            <h3>Bungalov Rezervasyon Sistemi</h3> {/* Alt bölüm başlığı [cite: 859] */}
            <p>C# WinForms ve MSSQL kullanilarak gelistirilmis bir masaustu uygulamasidir.</p>
          </article>
          <article>
            <h3>Web Lab Projesi</h3>
            <p>React ve TypeScript ile semantik HTML yapisi kullanilarak olusturuldu.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* noValidate: Tarayıcı balonlarını kapatıp özel hata alanı kullanmak için [cite: 1167-1168] */}
          <form action="#" method="POST" noValidate>
            <fieldset> {/* İlişkili alanları gruplama [cite: 1043-1044] */}
              <legend>Iletisim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label> {/* Label/Input ilişkisi [cite: 1050-1052] */}
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" /* Hata mesajıyla bağlama [cite: 958-959, 1099] */
                />
                <small id="name-error" className="error-msg" role="alert"></small> {/* Dinamik uyarı [cite: 1101, 1170] */}
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
        <p>&copy; 2026 [Adiniz]. Tum haklari saklidir.</p> {/* Telif bilgisi [cite: 760, 814] */}
      </footer>
    </>
  );
}

export default App;