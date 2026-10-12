import { certifications, education, languages } from '../data/profile.js'
import Section from './Section.jsx'
import { ExternalIcon } from './Icons.jsx'

export default function Education() {
  return (
    <Section id="education" num="04" title="Education and certificates">
      <div className="edu">
        <ol className="timeline">
          {education.map((entry) => (
            <li key={entry.title} className="timeline__item">
              <span className="timeline__period">{entry.period}</span>
              <h3 className="timeline__title">{entry.title}</h3>
              <p className="timeline__org">{entry.org}</p>
              {entry.notes.length > 0 && (
                <ul className="card__highlights">
                  {entry.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        <div className="edu__side">
          <div className="skill-card">
            <h3 className="skill-card__group">Certificates</h3>
            <ul className="certs">
              {certifications.map((cert) => (
                <li key={cert.code} className="cert">
                  <div>
                    <span className="cert__name">{cert.name}</span>
                    <span className="cert__meta">
                      {cert.issuer} - {cert.code}
                    </span>
                  </div>
                  {cert.url && (
                    <a
                      className="icon-link"
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Verify ${cert.name}`}
                    >
                      <ExternalIcon width={15} height={15} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-card">
            <h3 className="skill-card__group">Languages</h3>
            <ul className="langs">
              {languages.map((lang) => (
                <li key={lang.name} className="lang">
                  <div className="lang__row">
                    <span>{lang.name}</span>
                    <span className="lang__level">{lang.level}</span>
                  </div>
                  <div
                    className="meter"
                    role="img"
                    aria-label={`${lang.name}: ${lang.level}`}
                  >
                    <span style={{ width: `${lang.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
