const DOI_URL = "https://doi.org/10.59717/j.xinn-drugdisc.2026.100028";
const CODE_URL = "https://github.com/qianrong0709/PocketGPT";

const conditions = [
  {
    index: "01",
    title: "Pocket context",
    subtitle: "Structure",
    text: "A 128-dimensional geometric embedding carries the local shape and chemistry of the protein binding pocket into generation.",
  },
  {
    index: "02",
    title: "Property targets",
    subtitle: "Developability",
    text: "LogP, QED, TPSA and synthetic accessibility provide directional control over drug-like molecular properties.",
  },
  {
    index: "03",
    title: "Fragment priors",
    subtitle: "Medicinal chemistry",
    text: "Pharmacophoric fragments act as semantic anchors, preserving useful motifs while exploring compatible substitutions.",
  },
  {
    index: "04",
    title: "Interaction fingerprints",
    subtitle: "Function",
    text: "Sparse protein-ligand interaction cues guide hydrogen bonds, hydrophobic contacts and other binding-relevant patterns.",
  },
];

const campaign = [
  ["~2.0M", "generated"],
  ["920,795", "clean candidates"],
  ["46,034", "docking prioritized"],
  ["7,873", "multi-constraint hits"],
  ["5", "synthesized"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="PocketGPT home">
          <span className="brand-mark">P</span>
          <span>PocketGPT</span>
        </a>
        <div className="nav-links">
          <a href="#approach">Approach</a>
          <a href="#results">Results</a>
          <a href="#parp1">PARP1 study</a>
        </div>
        <a className="nav-cta" href={CODE_URL} target="_blank" rel="noreferrer">
          View code <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <header className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Structure-aware molecular generation</div>
          <h1>
            From pocket context to
            <em>experimentally actionable</em> molecules.
          </h1>
          <p className="hero-summary">
            PocketGPT jointly conditions protein pocket structure and medicinal-chemistry objectives during generation—without explicitly constructing 3D ligand coordinates.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={DOI_URL} target="_blank" rel="noreferrer">
              Read the paper <span aria-hidden="true">↗</span>
            </a>
            <a className="button secondary" href={CODE_URL} target="_blank" rel="noreferrer">
              Code &amp; data <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="publication">The Innovation Drug Discovery · 2026 · Open access</p>
        </div>

        <div className="hero-visual">
          <div className="visual-label">Design → Make → Test</div>
          <img src="paper/graphical-abstract.png" alt="PocketGPT graphical abstract showing conditioned generation and experimental validation" />
          <div className="result-badge">
            <strong>4.88 nM</strong>
            <span>PARP1 binding affinity</span>
          </div>
        </div>
      </header>

      <section className="author-strip section-shell" aria-label="Paper authors">
        <div>
          <span className="small-label">Authors</span>
          <p>Rong Qian<sup>1,2,4</sup>, Jilong Duan<sup>1,4</sup>, Xiaoping Liu<sup>1,4</sup>, Wenxuan Wang<sup>1</sup>, Tingfei Zhu<sup>1,2</sup>, Dejun Jiang<sup>1</sup>, Jin Liu<sup>2,3</sup>, Youchao Deng<sup>1,*</sup>, Aiping Lyu<sup>2,3,*</sup>, Dongsheng Cao<sup>1,*</sup></p>
        </div>
        <div className="affiliations">
          <span><b>1</b> Central South University</span>
          <span><b>2–3</b> Hong Kong Baptist University</span>
        </div>
      </section>

      <section className="impact section-shell" id="results">
        <div className="impact-intro">
          <span className="section-kicker">The result</span>
          <h2>Controllable generation that survives contact with the lab.</h2>
        </div>
        <div className="metrics">
          <article><strong>81%</strong><span>of held-out targets improved in mean docking score with pocket conditioning</span></article>
          <article><strong>−8.3</strong><span>average Top-10 docking score under full multi-constraint conditioning</span></article>
          <article><strong>4 / 5</strong><span>synthesized compounds showed sub-micromolar PARP1 inhibition</span></article>
          <article className="accent"><strong>&gt;1,000×</strong><span>observed PARP1-over-PARP2 selectivity for Compound 2</span></article>
        </div>
      </section>

      <section className="approach section-shell" id="approach">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">The idea</span>
            <h2>Put the constraints inside generation.</h2>
          </div>
          <p>Geometry-first workflows often generate first and filter later. PocketGPT fuses structural and functional priors into one semantic prefix, so every generated token is informed by the full design context.</p>
        </div>

        <figure className="paper-figure framework-figure">
          <img src="paper/framework.png" alt="PocketGPT framework and modality-aware conditioning architecture" />
          <figcaption><span>Figure 1</span> One Transformer backbone, composable conditioning settings.</figcaption>
        </figure>

        <div className="condition-grid">
          {conditions.map((condition) => (
            <article key={condition.index}>
              <div className="condition-top"><span>{condition.index}</span><b>{condition.subtitle}</b></div>
              <h3>{condition.title}</h3>
              <p>{condition.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="training-band">
        <div className="section-shell training-inner">
          <div>
            <span className="section-kicker light">Two-stage learning</span>
            <h2>A chemical language model, aligned to protein pockets.</h2>
          </div>
          <div className="training-steps">
            <article><span>01</span><strong>3.3M</strong><p>drug-like molecules establish a broad chemical prior</p></article>
            <div className="step-arrow" aria-hidden="true">→</div>
            <article><span>02</span><strong>25,914</strong><p>protein-ligand pairs align that prior with structural semantics</p></article>
            <div className="step-arrow" aria-hidden="true">→</div>
            <article><span>03</span><strong>1 model</strong><p>supports pocket-only, property, fragment, interaction and full conditioning</p></article>
          </div>
        </div>
      </section>

      <section className="parp-section section-shell" id="parp1">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker coral">Prospective validation</span>
            <h2>A complete PARP1 design–make–test campaign.</h2>
          </div>
          <p>Starting from the PARP1–Olaparib pocket (PDB 7KK4), PocketGPT combined pocket compatibility, property objectives and a phthalazinone scaffold prior to generate a focused candidate library.</p>
        </div>

        <div className="campaign-funnel" aria-label="Candidate prioritization funnel">
          {campaign.map(([number, label], index) => (
            <article key={number}>
              <span className="funnel-index">0{index + 1}</span>
              <strong>{number}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>

        <figure className="paper-figure">
          <img src="paper/parp1-campaign.png" alt="PARP1 design campaign, candidate funnel and biochemical assay results" />
          <figcaption><span>Figure 6</span> Semantic-prior-driven design and experimental validation of PARP1 inhibitors.</figcaption>
        </figure>
      </section>

      <section className="validation section-shell">
        <div className="validation-copy">
          <span className="section-kicker">Compound 2</span>
          <h2>Nanomolar target engagement with in vivo tolerability.</h2>
          <p>Isothermal titration calorimetry confirmed direct PARP1 binding. Cellular assays showed antiproliferative activity and dose-dependent pathway engagement, while a 15-day oral tolerability study found no overt toxicity or apparent treatment-related histopathology at up to 400 mg/kg.</p>
          <div className="validation-stats">
            <div><strong>4.88 nM</strong><span>K<sub>d</sub> for PARP1</span></div>
            <div><strong>15 days</strong><span>oral tolerability study</span></div>
            <div><strong>400 mg/kg</strong><span>highest tested dose</span></div>
          </div>
        </div>
        <figure className="paper-figure validation-figure">
          <img src="paper/compound2-validation.png" alt="Compound 2 biophysical, cellular and preliminary safety validation" />
          <figcaption><span>Figure 7</span> Target engagement and preliminary developability.</figcaption>
        </figure>
      </section>

      <section className="takeaway section-shell">
        <div className="takeaway-card">
          <span className="quote-mark">“</span>
          <blockquote>PocketGPT is screening-aware generation: it front-loads learnable, user-specifiable criteria while retaining independent quality-control steps.</blockquote>
          <p>Strong multi-constraint control narrows chemical-space exploration, making the framework especially suited to target-focused lead generation and optimization.</p>
        </div>
      </section>

      <section className="citation section-shell" id="citation">
        <div>
          <span className="section-kicker">Cite this work</span>
          <h2>Paper &amp; resources</h2>
        </div>
        <div className="citation-box">
          <code>Qian R, Duan J, Liu X, et al. Structure–function conditioned molecular generation with PocketGPT enables prospective discovery of PARP1 inhibitors. The Innovation Drug Discovery. 2026;1:100028.</code>
          <div>
            <a href={DOI_URL} target="_blank" rel="noreferrer">DOI ↗</a>
            <a href={CODE_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <a className="brand" href="#top"><span className="brand-mark">P</span><span>PocketGPT</span></a>
          <p>Structure–function conditioned molecular generation.</p>
          <p>© 2026 PocketGPT authors · CC BY 4.0</p>
        </div>
      </footer>
    </main>
  );
}
