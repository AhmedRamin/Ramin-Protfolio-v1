import Reveal from "./Reveal";
import { education, experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Experience &amp; education</span>
            <h2>
              Where I&apos;ve
              <br />
              <em>worked and studied.</em>
            </h2>
          </div>
          <p className="section-note">
            // industry practice, industrial discipline
            <br />
            // and a consistent academic record
          </p>
        </Reveal>

        <div className="exp-grid">
          <Reveal className="timeline" delay={60}>
            {experience.map((item) => (
              <article className={`tl-item ${item.active ? "active" : ""}`} key={item.title}>
                <span className="when">{item.when}</span>
                <h3>{item.title}</h3>
                <p className="org">{item.org}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </Reveal>

          <Reveal delay={140}>
            <div className="edu-table">
              {education.map((e) => (
                <div className="edu-row" key={e.school}>
                  <div>
                    <h4>{e.school}</h4>
                    <p>{e.detail}</p>
                  </div>
                  <span>{e.when}</span>
                </div>
              ))}
            </div>

            <div className="exp-note">
              <b>+ Training</b> — Full-Stack Software Development Program, Skill Jobs (HTML/CSS,
              JavaScript, Git &amp; GitHub, web fundamentals).
              <br />
              <b>+ Languages</b> — Bangla (native), English (professional), Hindi (conversational).
              <br />
              <b>+ Off screen</b> — two-time hall table-tennis champion.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
