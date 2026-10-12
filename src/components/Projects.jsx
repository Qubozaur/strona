import { projects } from '../data/profile.js'
import Section from './Section.jsx'
import { ExternalIcon, GithubIcon } from './Icons.jsx'

function ProjectCard({ project }) {
  return (
    <article className={`card${project.featured ? ' card--featured' : ''}`}>
      <div className="card__top">
        <div>
          <h3 className="card__title">{project.title}</h3>
          <p className="card__subtitle">{project.subtitle}</p>
        </div>

        {/* Link icons appear only once the URL is filled in in profile.js */}
        <div className="card__links">
          {project.repo && (
            <a
              className="icon-link"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code`}
            >
              <GithubIcon width={16} height={16} />
            </a>
          )}
          {project.demo && (
            <a
              className="icon-link"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
            >
              <ExternalIcon width={16} height={16} />
            </a>
          )}
        </div>
      </div>

      <p className="card__desc">{project.description}</p>

      <ul className="card__highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className="chips card__tags">
        {project.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" num="03" title="Things I have built">
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
