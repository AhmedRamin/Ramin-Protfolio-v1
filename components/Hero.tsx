import Scene from "./Scene";
import { Download, ArrowOut } from "./Icons";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="scene" aria-hidden="true">
        <Scene variant="hero" />
      </div>

      <div className="shell hero-inner">
        <div className="hero-status">
          <span className="dot" />
          Open to junior full-stack roles
        </div>

        <h1>
          <span className="line">I build for</span>
          <span className="line">
            the <span className="accent">web</span>, end
          </span>
          <span className="line">
            to <span className="outline">end.</span>
          </span>
        </h1>

        <p className="hero-sub">
          I&apos;m <strong>Ramin Ahmed</strong> — a full-stack developer and CSE undergraduate at
          Daffodil International University. I turn ideas into practical, scalable products with{" "}
          <strong>React, Next.js, Node.js</strong> and modern databases.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            View selected work <ArrowOut />
          </a>
          <a className="btn btn-ghost" href={site.cv} download>
            <Download /> Download CV
          </a>
        </div>

        <dl className="hero-meta">
          <div>
            <dt>Focus</dt>
            <dd>
              Full-Stack <small>web</small>
            </dd>
          </div>
          <div>
            <dt>Shipped</dt>
            <dd>
              4 <small>flagship projects</small>
            </dd>
          </div>
          <div>
            <dt>Currently</dt>
            <dd>
              BCIC <small>apprentice</small>
            </dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>
              Dhaka <small>Bangladesh</small>
            </dd>
          </div>
        </dl>
      </div>

      <div className="scroll-hint">scroll</div>
    </section>
  );
}
