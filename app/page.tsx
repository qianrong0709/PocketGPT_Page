const DOI_URL = "https://doi.org/10.59717/j.xinn-drugdisc.2026.100028";
const CODE_URL = "https://github.com/qianrong0709/PocketGPT";

const methodConditions = [
  ["Pocket context", "A 128-dimensional geometric embedding derived from the voxelized protein pocket."],
  ["Property targets", "Numerical objectives for LogP, QED, TPSA, and synthetic accessibility."],
  ["Fragment priors", "Pharmacophoric motifs used as semantic anchors during molecular generation."],
  ["Interaction fingerprints", "Sparse cues describing binding-relevant protein–ligand interaction patterns."],
];

export default function Home() {
  return (
    <main>
      <header className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Structure-aware molecular generation</div>
          <h1>
            Structure–function conditioned molecular generation with <em>PocketGPT</em> enables prospective discovery of PARP1 inhibitors.
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
          <span><b>1</b> Xiangya School of Pharmaceutical Sciences, Central South University, Changsha 410013, Hunan, China</span>
          <span><b>2</b> School of Chinese Medicine, Hong Kong Baptist University, Hong Kong SAR 999077, China</span>
          <span><b>3</b> Institute of Systems Medicine and Health Sciences, Hong Kong Baptist University, Hong Kong SAR 999077, China</span>
          <span><b>4</b> These authors contributed equally to this work</span>
        </div>
      </section>

      <section className="content-section section-shell" id="abstract">
        <div className="section-heading simple-heading">
          <span className="section-number">01</span>
          <div>
            <span className="section-kicker">Abstract</span>
            <h2>Structure and function, conditioned together.</h2>
          </div>
        </div>
        <div className="abstract-body">
          <p>
            Structure-based molecular generation has become increasingly important in drug discovery, yet molecules designed only for geometric compatibility may still fail to satisfy the physicochemical and functional constraints required for pharmacological development. PocketGPT formulates molecular design as conditional chemical-language generation. Protein pocket information is combined with property targets, fragment priors, and protein–ligand interaction fingerprints so that structural compatibility and medicinal-chemistry requirements influence the molecule throughout autoregressive generation. In a prospective PARP1 campaign, the framework produced a novel inhibitor with a measured binding affinity of 4.88 nM and favorable preliminary tolerability in mice.
          </p>
        </div>
      </section>

      <section className="content-section method-section" id="method">
        <div className="section-shell">
          <div className="section-heading simple-heading">
            <span className="section-number">02</span>
            <div>
              <span className="section-kicker">Method</span>
              <h2>A unified conditional molecular language model.</h2>
            </div>
          </div>

          <p className="section-lead">
            Each conditioning source is encoded by a dedicated projector, aligned in a shared latent space, and combined through adaptive semantic fusion. The resulting semantic prefix conditions a Transformer decoder that generates molecular SMILES token by token.
          </p>

          <figure className="paper-figure">
            <img src="paper/framework.png" alt="PocketGPT framework and modality-aware conditioning architecture" />
            <figcaption><span>Figure 1</span> PocketGPT framework and modality-aware conditioning architecture.</figcaption>
          </figure>

          <div className="method-grid">
            {methodConditions.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="training-summary">
            <div><strong>3.3 million</strong><span>drug-like molecules for chemical-prior pretraining</span></div>
            <div className="summary-arrow" aria-hidden="true">→</div>
            <div><strong>25,914</strong><span>protein–ligand pairs for structure-conditioned fine-tuning</span></div>
            <div className="summary-arrow" aria-hidden="true">→</div>
            <div><strong>One model</strong><span>with composable structural and functional conditions</span></div>
          </div>
        </div>
      </section>

      <section className="content-section section-shell experiments-section" id="experiments">
        <div className="section-heading simple-heading">
          <span className="section-number">03</span>
          <div>
            <span className="section-kicker">Experiments</span>
            <h2>From held-out targets to prospective discovery.</h2>
          </div>
        </div>

        <div className="experiment-block">
          <div className="experiment-copy">
            <span className="experiment-label">Benchmark evaluation</span>
            <h3>Conditioning shifts generation toward binding-compatible chemical space.</h3>
            <p>
              PocketGPT was evaluated on 100 protein–ligand crystal structures excluded from structure-conditioned training. Pocket conditioning improved mean docking scores for 81% of targets, with 87 targets showing statistically significant improvements. Property, fragment, and interaction conditions also produced directional responses aligned with their requested objectives.
            </p>
          </div>
          <div className="experiment-metrics">
            <article><strong>−6.24 → −8.33</strong><span>mean docking score after pocket conditioning</span></article>
            <article><strong>81%</strong><span>of held-out targets improved</span></article>
            <article><strong>−8.3</strong><span>average Top-10 docking score under full conditioning</span></article>
          </div>
        </div>

        <div className="experiment-divider" />

        <div className="experiment-block prospective-block">
          <div className="experiment-copy">
            <span className="experiment-label coral-text">Prospective PARP1 study</span>
            <h3>Approximately two million generated molecules were narrowed to five synthesized candidates.</h3>
            <p>
              Generation was anchored on the PARP1–Olaparib pocket (PDB 7KK4), physicochemical and synthetic-feasibility objectives, and a phthalazinone fragment prior. After deduplication, structural-alert filtering, docking, and multi-constraint prioritization, five representative candidates were selected for synthesis.
            </p>
          </div>
          <figure className="paper-figure experiment-figure">
            <img src="paper/parp1-campaign.png" alt="PARP1 design campaign, candidate funnel and biochemical assay results" />
            <figcaption><span>Figure 6</span> Prospective design and experimental evaluation of PARP1 inhibitors.</figcaption>
          </figure>
        </div>

        <div className="result-summary">
          <article><strong>4 of 5</strong><span>synthesized compounds inhibited PARP1 with sub-micromolar potency</span></article>
          <article><strong>3.7 nM</strong><span>PARP1 biochemical IC<sub>50</sub> of Compound 2</span></article>
          <article><strong>&gt;1,000-fold</strong><span>observed PARP1-over-PARP2 selectivity</span></article>
          <article><strong>4.88 nM</strong><span>binding affinity measured by isothermal titration calorimetry</span></article>
        </div>

        <figure className="paper-figure validation-figure-simple">
          <img src="paper/compound2-validation.png" alt="Compound 2 biophysical, cellular and preliminary safety validation" />
          <figcaption><span>Figure 7</span> Biophysical, cellular, pathway, and preliminary in vivo safety validation of Compound 2.</figcaption>
        </figure>
      </section>

      <section className="content-section conclusion-section" id="conclusion">
        <div className="section-shell">
          <div className="section-heading simple-heading conclusion-heading">
            <span className="section-number">04</span>
            <div>
              <span className="section-kicker light">Conclusion</span>
              <h2>Screening-aware generation for experimentally actionable chemical matter.</h2>
            </div>
          </div>
          <div className="conclusion-body">
            <p>
              PocketGPT demonstrates that binding-relevant structural and functional semantics can be incorporated directly into molecular generation without explicit 3D ligand construction. The prospective PARP1 campaign connects sequence-level generation to biochemical, cellular, and in vivo evaluation. Strong multi-constraint control can reduce novelty and chemical-space exploration, so PocketGPT should be viewed as screening-aware rather than screening-free generation. Its value lies in enriching candidates that already reflect user-specified structural and medicinal-chemistry priorities before downstream screening.
            </p>
          </div>
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
          <p>© 2026 PocketGPT Authors. Licensed under CC BY 4.0.</p>
          <p>Published in <em>The Innovation Drug Discovery</em>, 2026.</p>
        </div>
      </footer>
    </main>
  );
}
