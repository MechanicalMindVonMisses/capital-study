import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowRight, Bookmark, Check, Clock3, Search } from "lucide-react";
import { getModuleLessons, lessons, modules } from "@/data/course";
import { useLearning } from "@/providers/learning";

type Filter = "all" | "todo" | "completed";
export default function Curriculum() {
  const { progress, completedCount } = useLearning();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedModule = searchParams.get("module");
  const [openModules, setOpenModules] = useState<Set<string>>(() => new Set([selectedModule ?? modules[0].id]));
  useEffect(() => { if (selectedModule) setOpenModules(new Set([selectedModule])); }, [selectedModule]);
  const visibleLessons = useMemo(() => lessons.filter((lesson) => {
    const entry = progress[lesson.id];
    const matchesFilter = filter === "all" || (filter === "completed" ? entry?.completed : !entry?.completed);
    const text = `${lesson.title} ${lesson.description} ${lesson.eyebrow}`.toLowerCase();
    return matchesFilter && text.includes(query.trim().toLowerCase());
  }), [filter, progress, query]);
  const percentage = Math.round((completedCount / lessons.length) * 100);
  const shownModules = selectedModule ? modules.filter((module) => module.id === selectedModule) : modules;
  return (
    <div className="page-container curriculum-page">
      <header className="page-intro split-intro"><div><p className="eyebrow">The complete course</p><h1>Your reading<br /><em>curriculum.</em></h1></div><div className="intro-aside"><p>Six levels take you from method and class to value, accumulation, circulation, crisis, and current debates. Each lesson pairs a guided explanation with the original text and two knowledge checks.</p><div className="large-progress"><span style={{ width: `${percentage}%` }} /><strong>{percentage}%</strong></div><small>{completedCount} of {lessons.length} lessons completed</small></div></header>
      <div className="curriculum-tools"><label className="search-field"><Search size={18} aria-hidden="true" /><span className="sr-only">Search lessons</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lessons or concepts…" type="search" /></label><div className="filter-group" aria-label="Filter lessons">{(["all", "todo", "completed"] as Filter[]).map((item) => <button type="button" key={item} className={`filter-button focus-ring ${filter === item ? "active" : ""}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === "all" ? "All lessons" : item === "todo" ? "To do" : "Completed"}</button>)}</div></div>
      {selectedModule && <div className="selection-note"><span>Showing one level</span><button type="button" className="underlined-link" onClick={() => setSearchParams({})}>Show all six levels</button></div>}
      <div className="curriculum-modules">{shownModules.map((module) => {
        const moduleLessons = getModuleLessons(module.id);
        const visible = visibleLessons.filter((lesson) => lesson.moduleId === module.id);
        const moduleComplete = moduleLessons.filter((lesson) => progress[lesson.id]?.completed).length;
        if (!visible.length && (query || filter !== "all")) return null;
        return (
          <details className="curriculum-module" key={module.id} id={module.id} open={openModules.has(module.id)} onToggle={(event) => {
            const isOpen = event.currentTarget.open;
            setOpenModules((current) => { const next = new Set(current); if (isOpen) next.add(module.id); else next.delete(module.id); return next; });
          }}>
            <summary className="focus-ring"><span className="module-index">{module.index}</span><span className="module-summary-title"><small>{module.subtitle}</small><strong>{module.title}</strong></span><span className="module-summary-description">{module.description}</span><span className="module-completion">{moduleComplete}/{moduleLessons.length}<i aria-hidden="true">+</i></span></summary>
            <div className="lesson-list">{visible.map((lesson) => {
              const entry = progress[lesson.id];
              return <Link to={`/lesson/${lesson.id}`} className="lesson-row focus-ring" key={lesson.id}><span className={`lesson-status ${entry?.completed ? "complete" : ""}`}>{entry?.completed ? <Check size={18} /> : String(lesson.number).padStart(2, "0")}</span><span className="lesson-row-main"><small>{lesson.eyebrow}</small><strong>{lesson.title}</strong><p>{lesson.description}</p></span><span className="lesson-row-meta">{entry?.bookmarked && <Bookmark size={16} fill="currentColor" aria-label="Bookmarked" />}<span><Clock3 size={15} />{lesson.duration} min</span><ArrowRight size={19} /></span></Link>;
            })}</div>
          </details>
        );
      })}</div>
      {!visibleLessons.length && <div className="empty-state"><h2>No lessons match.</h2><p>Clear the search or choose another progress filter.</p><button type="button" className="secondary-button" onClick={() => { setQuery(""); setFilter("all"); setSearchParams({}); }}>Reset curriculum</button></div>}
    </div>
  );
}
