import { profile } from '../data/profile.js'
import { GithubIcon, MailIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <header id="top" className="shell hero">
      <p className="hero__eyebrow">Hello, my name is</p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__role">{profile.role}</p>
      <p className="hero__tagline">{profile.tagline}</p>

      <div className="hero__actions">
        <a className="btn btn--primary" href="#projects">
          View projects
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
        <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
          <MailIcon />
          Email me
        </a>
      </div>
    </header>
  )
}
