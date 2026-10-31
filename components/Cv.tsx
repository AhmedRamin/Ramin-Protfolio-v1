import Reveal from "./Reveal";
import { Download, ArrowOut } from "./Icons";
import { site } from "@/lib/data";

export default function Cv() {
  return (
    <section className="section" id="cv">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Curriculum vitae</span>
            <h2>
              One page.
              <br />
              <em>No filler.</em>
            </h2>
          </div>
          <p className="section-note">
            // software-focused summary
            <br />
            // A4 · single page · PDF
          </p>
        </Reveal>

        <div className="cv-wrap">
          <Reveal delay={60}>
            <div className="cv-doc" aria-hidden="true">
              <div className="cv-name">RAMIN AHMED</div>
              <div className="cv-role">Full-Stack Developer · CSE Undergraduate</div>
              <div className="cv-contact">
                Palash, Narsingdi, Dhaka · 01878493067 · iamraminahmed@gmail.com
              </div>

              <div className="cv-h">PROFILE</div>
              <div className="cv-block">
                <div className="cv-line dark w90" />
                <div className="cv-line w90" />
                <div className="cv-line w75" />
              </div>

              <div className="cv-h">TECHNICAL SKILLS</div>
              <div className="cv-block">
                <div className="cv-line w90" />
                <div className="cv-line w75" />
                <div className="cv-line w60" />
              </div>

              <div className="cv-h">EXPERIENCE</div>
              <div className="cv-block">
                <div className="cv-line dark w60" />
                <div className="cv-line w90" />
                <div className="cv-line w75" />
                <div className="cv-line dark w60" />
                <div className="cv-line w90" />
              </div>

              <div className="cv-h">SELECTED PROJECTS</div>
              <div className="cv-block">
                <div className="cv-line dark w75" />
                <div className="cv-line w90" />
                <div className="cv-line dark w75" />
                <div className="cv-line w90" />
                <div className="cv-line w60" />
              </div>

              <div className="cv-h">EDUCATION</div>
              <div className="cv-block">
                <div className="cv-line w90" />
                <div className="cv-line w75" />
              </div>

              <span className="cv-stamp">ramin.dev</span>
            </div>
          </Reveal>

          <Reveal className="cv-body" delay={140}>
            <p className="section-note" style={{ maxWidth: "48ch", fontSize: "13px", color: "var(--muted)" }}>
              The downloadable CV is trimmed to what matters for a software role — profile, stack,
              experience, four projects, education. No roadmap padding, no inflated titles.
            </p>

            <ul className="cv-list">
              <li>Full-stack focus — React, Next.js, TypeScript, Node.js, Express and SQL/NoSQL.</li>
              <li>Internship at Goinnovior plus BCIC apprentice experience, condensed to outcomes.</li>
              <li>Space Relics 3D, TICI Course Planner, Real-Time Map Tracking and Expenza.</li>
              <li>B.Sc. CSE at DIU, HSC &amp; SSC with GPA 5.00 — one line each.</li>
              <li>Text-based PDF, ATS-friendly, prints cleanly on a single A4 page.</li>
            </ul>

            <div className="cv-actions">
              <a className="btn btn-primary" href={site.cv} download="Ramin-Ahmed-CV.pdf">
                <Download /> Download PDF
              </a>
              <a className="btn btn-ghost" href={site.cv} target="_blank" rel="noreferrer">
                Preview <ArrowOut />
              </a>
              <span className="cv-meta">PDF · 1 page · updated 2026</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
