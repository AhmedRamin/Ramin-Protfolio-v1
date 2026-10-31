import Reveal from "./Reveal";
import { ArrowOut, GitHub } from "./Icons";
import { projects, site } from "@/lib/data";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>
              Things I&apos;ve
              <br />
              <em>shipped.</em>
            </h2>
          </div>
          <p className="section-note">
            // four projects, four different problems
            <br />// all live and open source
          </p>
        </Reveal>

        <div className="projects">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              className={`project ${p.featured ? "featured" : ""}`}
              delay={i * 70}
            >
              <div className="project-top">
                <span className="project-index">{p.index}</span>
                <div className="project-links">
                  <a
                    className="icon-link"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} source on GitHub`}
                  >
                    <GitHub />
                  </a>
                  <a
                    className="icon-link"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live site`}
                  >
                    <ArrowOut />
                  </a>
                </div>
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="kind">{p.kind}</p>
                <p>{p.description}</p>
                <div className="tags">
                  {p.stack.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {p.featured ? (
                <div className="scene-badge" aria-hidden="true">
                  <div className="orbit">
                    <i />
                  </div>
                  <div className="orbit">
                    <i />
                  </div>
                  <div className="core" />
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: "30px" }} delay={80}>
          <a
            className="btn btn-ghost"
            href={site.github}
            target="_blank"
            rel="noreferrer"
            style={{ height: 44 }}
          >
            All repositories on GitHub <ArrowOut />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
