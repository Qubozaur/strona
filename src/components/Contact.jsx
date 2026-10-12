import { profile } from '../data/profile.js'
import { AwardIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell contact">
        <p className="section__num">05</p>
        <h2 className="contact__title">Let us talk</h2>
        <p className="contact__text">
          I am looking for an internship or a first developer role where I can
          keep building with Python, data and the cloud. If that sounds like
          your team, my inbox is open.
        </p>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <MailIcon />
            {profile.email}
          </a>
          <a
            className="btn btn--ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            className="btn btn--ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            className="btn btn--ghost"
            href={profile.microsoftLearn}
            target="_blank"
            rel="noreferrer"
          >
            <AwardIcon />
            Microsoft Learn
          </a>
        </div>
      </div>
    </section>
  )
}
