import { skills } from '../data/profile.js'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section id="skills" num="02" title="Tools I work with">
      <div className="skills">
        {skills.map((card) => (
          <div key={card.group} className="skill-card">
            <h3 className="skill-card__group">{card.group}</h3>
            <ul className="chips">
              {card.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
