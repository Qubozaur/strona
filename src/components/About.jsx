import { profile } from '../data/profile.js'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" num="01" title="About me">
      <div className="about">
        <div className="about__text">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <ul className="about__facts">
          <li className="fact">
            <div className="fact__label">Based in</div>
            <div className="fact__value">{profile.location}</div>
          </li>
          <li className="fact">
            <div className="fact__label">Studying</div>
            <div className="fact__value">
              Computer Science, Bialystok University of Technology
            </div>
          </li>
          <li className="fact">
            <div className="fact__label">Email</div>
            <div className="fact__value">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </li>
          {profile.phone && (
            <li className="fact">
              <div className="fact__label">Phone</div>
              <div className="fact__value">
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  {profile.phone}
                </a>
              </div>
            </li>
          )}
          <li className="fact">
            <div className="fact__label">Open to</div>
            <div className="fact__value">Internships, junior roles</div>
          </li>
        </ul>
      </div>
    </Section>
  )
}
