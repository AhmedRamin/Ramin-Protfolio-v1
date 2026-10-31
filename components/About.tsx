import Reveal from "./Reveal";
import { site } from "@/lib/data";

const ticker = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Tailwind",
  "Three.js",
  "REST APIs",
  "Socket.IO",
  "Git",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...ticker, ...ticker].map((t, i) => (
          <span key={`${t}-${i}`}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">About</span>
            <h2>
              Curious by default,
              <br />
              <em>practical</em> by design.
            </h2>
          </div>
          <p className="section-note">
            // computer science student
            <br />
            // full-stack developer
            <br />
            // apprentice operator @ BCIC
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy" delay={80}>
            <p>
              I&apos;m a Computer Science &amp; Engineering undergraduate at{" "}
              <strong>Daffodil International University</strong> and a full-stack developer who
              enjoys building software that people actually use — clean interfaces on the front,
              solid APIs and data models behind them.
            </p>
            <p>
              My core stack is <span className="hl">React, Next.js, Node.js, Express</span> and
              modern databases like MongoDB, MySQL and Supabase. I&apos;m comfortable with the whole
              loop: designing a schema, writing REST endpoints and auth, then shipping a responsive
              UI — sometimes in 3D with Three.js.
            </p>
            <p>
              Alongside my studies I work as a <strong>Grade-2 Operator Apprentice at BCIC</strong>,
              where process discipline, safety and accurate documentation are part of every shift.
              My goal is simple: grow into a software engineer who ships reliable, well-reasoned
              products — strengthening <span className="hl">system design and Docker</span> next.
            </p>
          </Reveal>

          <Reveal className="about-side" delay={160}>
            <h3>Quick facts</h3>
            <div className="fact">
              <span>Location</span>
              <span>Narsingdi / Dhaka, BD</span>
            </div>
            <div className="fact">
              <span>Degree</span>
              <span>B.Sc. CSE, DIU — 2024</span>
            </div>
            <div className="fact">
              <span>Focus</span>
              <span>Full-stack web</span>
            </div>
            <div className="fact">
              <span>Learning</span>
              <span>Docker · System design</span>
            </div>
            <div className="fact">
              <span>Email</span>
              <span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </span>
            </div>
            <div className="fact">
              <span>GitHub</span>
              <span>
                <a href={site.github} target="_blank" rel="noreferrer">
                  @AhmedRamin
                </a>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
