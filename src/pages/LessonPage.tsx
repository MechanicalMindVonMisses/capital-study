import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Bookmark, BookOpen, Check, Clock3, ExternalLink, FlaskConical, Lightbulb, ListChecks } from "lucide-react";
import { getLesson, getModule, lessons } from "@/data/course";
import { glossaryTerms } from "@/data/glossary";
import { useLearning } from "@/providers/learning";
import KnowledgeCheck from "@/components/KnowledgeCheck";
import NoteEditor from "@/components/NoteEditor";

const labNames = { surplus: "Surplus value workshop", circuit: "Circuit of capital", reproduction: "Reproduction balances", profit: "Profit rate comparison" };

export default function LessonPage() {
  const { lessonId } = useParams();
  const lesson = getLesson(lessonId);
  const { progress, setCompleted, setBookmarked, isLoading } = useLearning();
  if (!lesson) return <Navigate to="/curriculum" replace />;
  const module = getModule(lesson.moduleId);
  const index = lessons.findIndex((item) => item.id === lesson.id);
  const previous = lessons[index - 1];
  const next = lessons[index + 1];
  const entry = progress[lesson.id];
  const relatedTerms = glossaryTerms.filter((term) => term.lessonId === lesson.id).slice(0, 4);
  return (
    <article className="lesson-page">
      <header className="lesson-hero">
        <div className="lesson-breadcrumb"><Link to="/curriculum">Curriculum</Link><span>/</span><Link to={`/curriculum?module=${module?.id}`}>Level {module?.index}</Link><span>/</span><span>Lesson {lesson.number}</span></div>
        <div className="lesson-title-grid"><div><p className="eyebrow">{lesson.eyebrow}</p><h1>{lesson.title}</h1><p className="lesson-description">{lesson.description}</p></div><div className="lesson-number" aria-hidden="true">{String(lesson.number).padStart(2, "0")}</div></div>
        <div className="lesson-meta"><span><Clock3 size={17} />{lesson.duration} min read</span><span><BookOpen size={17} />Primary source included</span><button type="button" className={`bookmark-button focus-ring ${entry?.bookmarked ? "active" : ""}`} aria-pressed={entry?.bookmarked ?? false} onClick={() => setBookmarked(lesson.id, !entry?.bookmarked)}><Bookmark size={17} fill={entry?.bookmarked ? "currentColor" : "none"} />{entry?.bookmarked ? "Bookmarked" : "Bookmark lesson"}</button>{entry?.completed && <span className="completed-label"><Check size={17} />Completed · best {entry.bestScore}/100</span>}</div>
      </header>
      <div className="lesson-layout">
        <aside className="lesson-aside"><div className="objective-block"><p className="eyebrow">By the end</p><ul>{lesson.objectives.map((objective) => <li key={objective}><ListChecks size={17} />{objective}</li>)}</ul></div><nav className="lesson-toc" aria-label="On this page"><p className="eyebrow">In this lesson</p>{lesson.sections.map((section, sectionIndex) => <a href={`#section-${sectionIndex + 1}`} key={section.heading}>{String(sectionIndex + 1).padStart(2, "0")} {section.heading}</a>)}<a href="#original-source">Original source</a><a href="#knowledge-check">Knowledge check</a><a href="#lesson-notes">Your notes</a></nav></aside>
        <div className="lesson-content">
          {lesson.sections.map((section, sectionIndex) => <section className="reading-section" id={`section-${sectionIndex + 1}`} key={section.heading}><div className="reading-section-number">{String(sectionIndex + 1).padStart(2, "0")}</div><div><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.callout && <aside>{section.callout}</aside>}</div></section>)}
          <section className="example-block"><Lightbulb size={25} strokeWidth={1.5} aria-hidden="true" /><div><p className="eyebrow">Work it through</p><h2>{lesson.example.title}</h2><p>{lesson.example.body}</p></div></section>
          <section className="distinction-block"><p className="eyebrow">Read carefully</p><p>{lesson.distinction}</p></section>
          <section className="original-source" id="original-source"><div><p className="eyebrow">Return to Marx</p><h2>Read the original argument.</h2><p>The lesson is a guide, not a substitute. Open the source and compare the explanation with Marx’s own sequence, evidence, and qualifications.</p></div><div className="source-links"><a href={lesson.source.url} target="_blank" rel="noreferrer" className="primary-button focus-ring">{lesson.source.label}<ExternalLink size={17} /></a>{lesson.furtherReading && <a href={lesson.furtherReading.url} target="_blank" rel="noreferrer" className="underlined-link">{lesson.furtherReading.label}<ExternalLink size={15} /></a>}</div></section>
          {lesson.lab && <Link to={`/labs?tab=${lesson.lab}`} className="lesson-lab-link focus-ring"><FlaskConical size={28} strokeWidth={1.4} /><span><small>Put the model in motion</small><strong>{labNames[lesson.lab]}</strong></span><ArrowRight size={22} /></Link>}
          {relatedTerms.length > 0 && <section className="related-terms"><p className="eyebrow">Terms to retain</p><div>{relatedTerms.map((item) => <Link key={item.term} to={`/glossary?term=${encodeURIComponent(item.term)}`}>{item.term}<ArrowRight size={15} /></Link>)}</div></section>}
          <KnowledgeCheck key={lesson.id} lesson={lesson} onFinish={(score) => setCompleted(lesson.id, true, score)} />
          <NoteEditor lessonId={lesson.id} />
          <nav className="lesson-pagination" aria-label="Adjacent lessons">{previous ? <Link to={`/lesson/${previous.id}`} className="focus-ring"><ArrowLeft size={20} /><span><small>Previous · {previous.number}</small><strong>{previous.title}</strong></span></Link> : <span />}{next ? <Link to={`/lesson/${next.id}`} className="next focus-ring"><span><small>Next · {next.number}</small><strong>{next.title}</strong></span><ArrowRight size={20} /></Link> : <Link to="/curriculum" className="next focus-ring"><span><small>Course complete</small><strong>Review your curriculum</strong></span><ArrowRight size={20} /></Link>}</nav>
          {isLoading && <span className="sr-only" role="status">Loading saved learning progress</span>}
        </div>
      </div>
    </article>
  );
}
