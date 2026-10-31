import Reveal from "./Reveal";
import Scene from "./Scene";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Toolkit</span>
            <h2>
              The stack I
              <br />
              <em>reach for.</em>
            </h2>
          </div>
          <p className="section-note">
            // no buzzwords — just what I use
            <br />
            // day-to-day to ship products
          </p>
        </Reveal>

        <Reveal className="skills-grid" delay={60}>
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <header>
                <h3>{group.title}</h3>
                <em>{group.note}</em>
              </header>
              <div className="tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </Reveal>

        <div className="about-grid" style={{ marginTop: "20px", alignItems: "stretch" }}>
          <Reveal className="panel-3d" delay={80}>
            <Scene variant="panel" />
            <span className="panel-label">
              webgl · react three fiber — <b>live</b>
            </span>
          </Reveal>

          <Reveal style={{ display: "grid", alignContent: "center" }} delay={140}>
            <p className="section-note" style={{ maxWidth: "42ch", fontSize: "13px" }}>
              <b style={{ color: "var(--acid)" }}>Currently levelling up:</b> Docker and system
              design fundamentals — deployment, containers and how services talk to each other.
              Next on the list: AI, networking and security, in that order.
            </p>
            <div className="skill-foot">
              <b>Daily drivers:</b> VS Code · Git · Postman · Vercel
              <br />
              <b>Also comfortable with:</b> C/C++ · Python · Linux · Cisco Packet Tracer
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
