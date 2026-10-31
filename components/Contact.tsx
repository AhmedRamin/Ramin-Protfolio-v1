import Reveal from "./Reveal";
import { GitHub, Mail, Phone, ArrowOut } from "./Icons";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <span className="eyebrow">Contact</span>
        <h2>
          Let&apos;s build
          <br />
          something
          <br />
          <a href={`mailto:${site.email}`}>useful →</a>
        </h2>

        <div className="contact-grid">
          <Reveal className="contact-col">
            <h4>Write to me</h4>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
          </Reveal>

          <Reveal className="contact-col" delay={80}>
            <h4>Around the web</h4>
            <a href={site.github} target="_blank" rel="noreferrer">
              github.com/AhmedRamin ↗
            </a>
            <a href={site.cv} download>
              Download CV (PDF)
            </a>
          </Reveal>

          <Reveal className="contact-col" delay={140}>
            <h4>Based in</h4>
            <p>{site.location}</p>
            <p style={{ color: "var(--dim)", fontSize: "13px" }}>
              Open to remote &amp; on-site opportunities.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell foot-inner">
        <span>© {new Date().getFullYear()} Ramin Ahmed. All rights reserved.</span>
        <span>Built with Next.js · Three.js · deployed on Vercel</span>
      </div>
    </footer>
  );
}
