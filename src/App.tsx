import { useEffect, useState } from 'react';
import './App.css';
import { profile } from './data/profile';

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
};

const navItems = [
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#yetenekler', label: 'Yetenekler' },
  { href: '#projeler', label: 'Projeler' },
  { href: '#deneyimler', label: 'Deneyimler' },
  { href: '#iletisim', label: 'İletişim' },
];

function App() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleRepos = showAllProjects ? repos : repos.slice(0, 4);

  useEffect(() => {
    async function loadRepos() {
      try {
        setLoading(true);
        setFetchError(null);

        const reposUrl = `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&direction=desc&per_page=100`;
        const response = await fetch(reposUrl);

        if (!response.ok) {
          throw new Error('GitHub API yanıt vermedi.');
        }

        const reposData: GitHubRepo[] = await response.json();
        setRepos(reposData);
      } catch (error: unknown) {
        console.error('GitHub verileri yüklenemedi:', error);
        setFetchError('GitHub verileri şu anda yüklenemedi.');
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <nav className="nav" aria-label="Ana navigasyon">
          <a href="#hero" className="logo" aria-label={`${profile.name} ana sayfa`}>
            {profile.initials}
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hero" className="section hero" aria-labelledby="hero-heading">
          <div className="hero-card">
            <div className="hero-content">
              <div className="hero-text">
                <h1 id="hero-heading">{profile.name}</h1>
                <p className="hero-title">{profile.title}</p>
                <p className="hero-university">{profile.university}</p>
                <p className="hero-description">{profile.shortDescription}</p>

                <div className="hero-actions">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    aria-label="GitHub profilini aç"
                  >
                    GitHub
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    aria-label="LinkedIn profilini aç"
                  >
                    LinkedIn
                  </a>
                  <a href="#projeler" className="btn btn-ghost">
                    Projelere Git
                  </a>
                </div>
              </div>

              <figure className="hero-figure">
                <div className="profile-frame">
                  <img
                    src="/feyza.jpg"
                    alt={`${profile.name} profil fotoğrafı`}
                    className="profile-img"
                    width={340}
                    height={340}
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section id="hakkimda" className="section" aria-labelledby="about-heading">
          <div className="section-card">
            <h2 id="about-heading">Hakkımda</h2>
            <p className="section-text">{profile.about}</p>
            <div className="info-grid">
              <article className="info-card">
                <span className="info-card__label">Konum</span>
                <span className="info-card__value">{profile.location}</span>
              </article>
              <article className="info-card">
                <span className="info-card__label">Üniversite</span>
                <span className="info-card__value">{profile.university}</span>
              </article>
              {profile.focusAreas.map((area) => (
                <article key={area} className="info-card info-card--accent">
                  <span className="info-card__label">Odak Alanı</span>
                  <span className="info-card__value">{area}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="yetenekler" className="section" aria-labelledby="skills-heading">
          <div className="section-card">
            <h2 id="skills-heading">Yetenekler</h2>
            <p className="section-text">
              Teknik yeteneklerimi çalışma alanlarıma göre gruplandırdım.
            </p>

            <div className="featured-skills" aria-label="Öne çıkan alanlar">
              <h3 className="featured-skills__title">Öne Çıkan Alanlar</h3>
              <div className="featured-skills__list">
                {profile.featuredSkills.map((skill) => (
                  <span key={skill} className="featured-skill-card">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-grid">
              {profile.skillCategories.map((category) => (
                <article key={category.title} className="skill-category-card">
                  <div className="skill-category-header">
                    <h3>{category.title}</h3>
                  </div>
                  <p className="skill-category-description">{category.description}</p>
                  <ul className="skill-chip-list" aria-label={`${category.title} yetenekleri`}>
                    {category.skills.map((skill) => (
                      <li key={skill} className="skill-chip">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projeler" className="section" aria-labelledby="projects-heading">
          <div className="section-card">
            <h2 id="projects-heading">GitHub Projelerim</h2>
            <p className="section-text">
              GitHub hesabımdaki public projeler gerçek zamanlı olarak listelenir. İlk etapta 4
              proje gösterilir; tüm projeleri görmek için butonu kullanabilirsiniz.
            </p>

            {loading && (
              <div className="loading-state" role="status" aria-live="polite">
                <span className="loading-spinner" aria-hidden="true" />
                <p>GitHub projeleri yükleniyor...</p>
              </div>
            )}

            {!loading && fetchError && (
              <p className="status-message status-message--error" role="alert">
                {fetchError}
              </p>
            )}

            {!loading && !fetchError && repos.length === 0 && (
              <p className="status-message">Gösterilecek proje bulunamadı.</p>
            )}

            <div className="projects-grid">
              {!loading &&
                visibleRepos.map((repo) => (
                  <article key={repo.id} className="project-card">
                    <div className="project-card__accent" aria-hidden="true">
                      <span className="project-card__language">{repo.language ?? 'Diğer'}</span>
                    </div>
                    <div className="project-card__body">
                      <h3>{repo.name}</h3>
                      <p className="project-card__desc">
                        {repo.description ?? 'Açıklama eklenmemiş.'}
                      </p>
                      <div className="project-card__meta">
                        <span aria-label={`${repo.stargazers_count} yıldız`}>
                          ⭐ {repo.stargazers_count}
                        </span>
                        <span aria-label={`${repo.forks_count} fork`}>
                          🍴 {repo.forks_count}
                        </span>
                        <span>
                          {new Date(repo.updated_at).toLocaleDateString('tr-TR', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="card-actions">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          GitHub&apos;da Gör
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary btn-sm"
                          >
                            Canlı Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            {!loading && !fetchError && repos.length > 4 && (
              <div className="project-toggle-wrapper">
                <button
                  type="button"
                  className="project-toggle-btn"
                  onClick={() => setShowAllProjects((prev) => !prev)}
                  aria-expanded={showAllProjects}
                >
                  {showAllProjects ? 'Daha Az Göster' : 'Tüm Projeleri Göster'}
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="deneyimler" className="section" aria-labelledby="experience-heading">
          <div className="section-card">
            <h2 id="experience-heading">Deneyim ve Eğitim</h2>
            <p className="section-text section-note">
              Bu bölüm CV ve LinkedIn bilgilerime göre düzenlenmiştir.
            </p>

            <h3 className="subsection-title subsection-title--primary">Deneyimler</h3>
            <ol className="experience-timeline" aria-label="Deneyim listesi">
              {profile.experiences.map((experience) => (
                <li key={`${experience.company}-${experience.role}`} className="experience-item">
                  <article className="experience-card">
                    <h4 className="experience-role-title">{experience.role}</h4>
                    <p className="experience-company-line">
                      {experience.company} · {experience.type}
                    </p>
                    <p className="experience-meta-line">
                      {experience.period} · {experience.location}
                    </p>
                    <p className="experience-description">{experience.description}</p>

                    <div className="experience-block">
                      <h5>Yaptıklarım</h5>
                      <ul className="experience-list">
                        {experience.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="experience-block">
                      <h5>Kullandığım Teknolojiler</h5>
                      <ul className="tag-list tag-list--compact" aria-label="Kullanılan teknolojiler">
                        {experience.technologies.map((tech) => (
                          <li key={tech} className="tag tag--sm">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ol>

            <h3 className="subsection-title">Eğitim</h3>
            <div className="record-grid">
              {profile.education.map((item) => (
                <article key={item.school} className="record-card">
                  <span className="record-card__period">{item.period}</span>
                  <h4>{item.school}</h4>
                  <p className="record-card__subtitle">{item.department}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <h3 className="subsection-title">Sertifikalar</h3>
            <div className="record-grid">
              {profile.certifications.map((cert) => (
                <article key={cert.title} className="record-card record-card--cert">
                  <span className="record-card__period">{cert.year}</span>
                  <h4>{cert.title}</h4>
                  <p className="record-card__subtitle">{cert.issuer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="section" aria-labelledby="contact-heading">
          <div className="section-card contact-card">
            <h2 id="contact-heading">İletişim</h2>
            <p className="section-text">Benimle aşağıdaki kanallardan iletişime geçebilirsiniz.</p>
            <div className="contact-actions">
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-primary"
                aria-label={`${profile.email} adresine e-posta gönder`}
              >
                {profile.email}
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                aria-label="GitHub profilini aç"
              >
                GitHub
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                aria-label="LinkedIn profilini aç"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Feyza Sağman. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
