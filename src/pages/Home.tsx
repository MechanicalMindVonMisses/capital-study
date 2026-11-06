import { useState } from "react";
import { Link } from "react-router";
import { ArrowDownRight, ArrowRight, BookOpen, Check, ExternalLink, LogIn, MoveRight } from "lucide-react";
import { Brand } from "@/components/AppLayout";
import { lessons, modules } from "@/data/course";
import { useLearning } from "@/providers/learning";
import { useAuth } from "@/hooks/useAuth";

const circuitSteps = [
  { formula: "M", title: "Money advanced", text: "Money enters as capital only when advanced to purchase the conditions of production with the aim of returning as more money." },
  { formula: "C", title: "Commodities purchased", text: "The capitalist buys means of production and labour-power. Their social combination makes production possible." },
  { formula: "P", title: "Production", text: "Living labour transfers existing value and adds new value. Surplus labour produces surplus value." },
  { formula: "C′", title: "Commodity capital", text: "The product contains transferred value and new value, but its value still has to be realized through sale." },
  { formula: "M′", title: "More money realized", text: "Sale converts commodities back into money. Part can be consumed; part can be accumulated, renewing the circuit at a larger scale." },
];

export default function Home() {
  const { progress, completedCount } = useLearning();
  const { isAuthenticated } = useAuth();
  const [step, setStep] = useState(0);
  const nextLesson = lessons.find((lesson) => !progress[lesson.id]?.completed) ?? lessons[0];
  const percent = Math.round((completedCount / lessons.length) * 100);
  return (
    <div className="home-page">
      <header className="public-header">
        <Brand />
        <nav aria-label="Main navigation" className="public-nav"><Link className="focus-ring" to="/curriculum">Curriculum</Link><Link className="focus-ring" to="/library">Library</Link><Link className="focus-ring" to="/labs">Labs</Link></nav>
        <Link className="header-cta focus-ring" to={isAuthenticated ? "/notebook" : "/login"}>{isAuthenticated ? "My notebook" : <><LogIn size={16} />Sign in</>}</Link>
      </header>
      <main id="main-content">
        <section className="home-hero">
          <div className="hero-copy">
            <p className="eyebrow">An open school of Marxist political economy</p>
            <h1>From the<br /><em>commodity</em><br />to the whole.</h1>
            <p className="hero-intro">A rigorous, interactive path through <i>Das Kapital</i>—built for absolute beginners and readers ready to test the deepest arguments.</p>
            <div className="hero-actions"><Link to={`/lesson/${nextLesson.id}`} className="primary-button focus-ring">{completedCount ? "Continue learning" : "Begin with lesson 01"}<ArrowRight size={19} /></Link><Link to="/curriculum" className="underlined-link">Explore all 24 lessons</Link></div>
            <div className="hero-proof"><span><Check size={16} />No prior economics needed</span><span><Check size={16} />Every volume linked</span></div>
          </div>
          <div className="hero-books" aria-label="Three volumes of Capital represented as a typographic book sculpture">
            <div className="book-scene" aria-hidden="true"><div className="book-volume book-three"><span>III</span><small>THE PROCESS AS A WHOLE</small></div><div className="book-volume book-two"><span>II</span><small>CIRCULATION</small></div><div className="book-volume book-one"><span>I</span><small>PRODUCTION</small><b>DAS<br />KAPITAL</b><i>KARL MARX</i></div><div className="book-formula">M—C … P … C′—M′</div></div>
            <p><span>1867—1894</span> Three volumes. One developing critique.</p>
          </div>
        </section>
        <section className="course-ledger" aria-label="Course contents"><div><strong>24</strong><span>guided lessons</span></div><div><strong>106</strong><span>source chapters</span></div><div><strong>48</strong><span>knowledge checks</span></div><div><strong>04</strong><span>interactive labs</span></div></section>
        {completedCount > 0 && <section className="continue-strip"><div><p className="eyebrow">Your study · {percent}% complete</p><h2>{nextLesson.number}. {nextLesson.title}</h2></div><Link to={`/lesson/${nextLesson.id}`} className="primary-button focus-ring">Continue<ArrowRight size={18} /></Link></section>}
        <section className="route-section">
          <div className="section-heading"><p className="eyebrow">Your route through the critique</p><h2>Six levels.<br />No shortcuts.</h2></div>
          <div className="module-ledger">{modules.map((module) => <Link to={`/curriculum?module=${module.id}`} className="module-row focus-ring" key={module.id}><span className="module-index">{module.index}</span><span className="module-title"><strong>{module.title}</strong><small>{module.subtitle}</small></span><span className="module-description">{module.description}</span><ArrowDownRight size={24} strokeWidth={1.4} aria-hidden="true" /></Link>)}</div>
        </section>
        <section className="circuit-section">
          <div className="circuit-intro"><p className="eyebrow">A concept you can touch</p><h2>Capital is not a thing.<br /><em>It is a movement.</em></h2><p>Trace the circuit. At each stage, ask what form value takes, what must happen next, and where the movement can break.</p><Link to="/labs?tab=circuit" className="underlined-link">Open the full circuit lab <MoveRight size={17} /></Link></div>
          <div className="circuit-player">
            <div className="circuit-steps" role="tablist" aria-label="Stages in the circuit of capital">{circuitSteps.map((item, index) => <button key={item.formula} type="button" role="tab" aria-selected={step === index} onClick={() => setStep(index)} className={`circuit-step focus-ring ${step === index ? "active" : ""}`}><span>{item.formula}</span>{index < circuitSteps.length - 1 && <i aria-hidden="true">→</i>}</button>)}</div>
            <div className="circuit-detail" role="tabpanel"><span className="circuit-big">{circuitSteps[step].formula}</span><div><p className="eyebrow">Stage {step + 1} of 5</p><h3>{circuitSteps[step].title}</h3><p>{circuitSteps[step].text}</p></div></div>
            <button type="button" className="secondary-button focus-ring" onClick={() => setStep((step + 1) % circuitSteps.length)}>Next transformation<ArrowRight size={17} /></button>
          </div>
        </section>
        <section className="critical-section"><p className="eyebrow">Not a certainty machine</p><blockquote>“Read the argument.<br />Check the evidence.<br /><em>Keep the questions open.</em>”</blockquote><div className="critical-copy"><p>This course distinguishes Marx’s text, later Marxist traditions, and contested interpretations. You will encounter the transformation problem, crisis debates, social reproduction, ecology, and major criticisms—not just settled slogans.</p><Link to="/lesson/debates-futures" className="underlined-link">See the capstone approach</Link></div></section>
        <section className="source-banner"><BookOpen size={34} strokeWidth={1.3} aria-hidden="true" /><div><p className="eyebrow">Always return to the text</p><h2>The complete three-volume reading room.</h2><p>Original English chapters, publication context, companion works, and no paywall.</p></div><Link to="/library" className="secondary-button focus-ring">Enter the library<ExternalLink size={17} /></Link></section>
      </main>
      <footer className="home-footer"><Brand /><p>A structured introduction to a living field of inquiry.<br />Built for careful readers, not converts.</p><div><Link to="/curriculum">Start studying</Link><Link to="/glossary">Review concepts</Link><a href="https://www.marxists.org/archive/marx/works/" target="_blank" rel="noreferrer">Marx/Engels Archive ↗</a></div></footer>
    </div>
  );
}
