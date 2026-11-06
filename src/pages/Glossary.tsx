import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowRight, Eye, EyeOff, RotateCcw, Search, X } from "lucide-react";
import { glossaryCategories, glossaryTerms } from "@/data/glossary";

export default function Glossary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof glossaryCategories)[number]>("All");
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const selectedTerm = searchParams.get("term");
  const filtered = useMemo(() => glossaryTerms.filter((item) => {
    const text = `${item.term} ${item.definition} ${item.watchFor}`.toLowerCase();
    return (category === "All" || item.category === category) && text.includes(query.toLowerCase().trim());
  }).sort((a, b) => a.term.localeCompare(b.term)), [category, query]);
  useEffect(() => { setReviewIndex(0); setRevealed(false); }, [category, query, reviewMode]);
  useEffect(() => {
    if (!selectedTerm) return;
    document.getElementById(`term-${selectedTerm.replaceAll(" ", "-")}`)?.scrollIntoView({ block: "center" });
  }, [selectedTerm]);
  const reviewTerm = filtered[reviewIndex] ?? filtered[0];
  return (
    <div className="page-container glossary-page">
      <header className="page-intro split-intro"><div><p className="eyebrow">Glossary & active recall</p><h1>Keep the concepts<br /><em>precise.</em></h1></div><div className="intro-aside"><p>Definitions tell you what a category means; “watch for” records the confusion that most often weakens it. Use review mode to reconstruct a definition before revealing it.</p><button type="button" className="primary-button focus-ring" onClick={() => { setReviewMode((value) => !value); setSearchParams({}); }}>{reviewMode ? <><X size={17} />Exit review</> : <><Eye size={17} />Review flashcards</>}</button></div></header>
      <div className="glossary-tools"><label className="search-field"><Search size={18} /><span className="sr-only">Search glossary</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${glossaryTerms.length} definitions…`} /></label><div className="category-filters" aria-label="Glossary categories">{glossaryCategories.map((item) => <button type="button" key={item} className={`filter-button focus-ring ${category === item ? "active" : ""}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
      {reviewMode && reviewTerm ? (
        <section className="flashcard-review" aria-live="polite"><div className="review-meta"><span>{reviewTerm.category}</span><span>{reviewIndex + 1} / {filtered.length}</span></div><p className="eyebrow">Define before you reveal</p><h2>{reviewTerm.term}</h2>{revealed ? <div className="flashcard-answer"><p>{reviewTerm.definition}</p><aside><strong>Watch for</strong>{reviewTerm.watchFor}</aside><Link to={`/lesson/${reviewTerm.lessonId}`} className="underlined-link">Review the related lesson<ArrowRight size={16} /></Link></div> : <p className="reveal-prompt">Say the definition aloud, then check its scope and limits.</p>}<div className="flashcard-actions"><button type="button" className="secondary-button focus-ring" onClick={() => setRevealed((value) => !value)}>{revealed ? <><EyeOff size={17} />Hide definition</> : <><Eye size={17} />Reveal definition</>}</button><button type="button" className="primary-button focus-ring" onClick={() => { setReviewIndex((reviewIndex + 1) % filtered.length); setRevealed(false); }}>Next concept<ArrowRight size={17} /></button></div></section>
      ) : (
        <div className="glossary-list">{filtered.map((item, index) => <article key={item.term} id={`term-${item.term.replaceAll(" ", "-")}`} className={`glossary-entry ${selectedTerm === item.term ? "highlighted" : ""}`}><div className="glossary-index">{String(index + 1).padStart(2, "0")}</div><div className="glossary-term"><span>{item.category}</span><h2>{item.term}</h2></div><div className="glossary-definition"><p>{item.definition}</p><aside><strong>Watch for</strong><p>{item.watchFor}</p></aside><Link to={`/lesson/${item.lessonId}`} className="underlined-link">Open related lesson<ArrowRight size={15} /></Link></div></article>)}</div>
      )}
      {!filtered.length && <div className="empty-state"><RotateCcw size={28} /><h2>No concepts match.</h2><p>Try another word or reset the category.</p><button type="button" className="secondary-button" onClick={() => { setQuery(""); setCategory("All"); }}>Reset glossary</button></div>}
    </div>
  );
}
