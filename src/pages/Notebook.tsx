import { Link } from "react-router";
import { ArrowRight, Bookmark, Check, Cloud, HardDrive, NotebookPen } from "lucide-react";
import { getLesson, lessons } from "@/data/course";
import { useLearning } from "@/providers/learning";

export default function Notebook() {
  const { notes, progress, completedCount, isAuthenticated } = useLearning();
  const writtenNotes = Object.entries(notes).filter(([, content]) => content.trim()).sort(([a], [b]) => (getLesson(a)?.number ?? 0) - (getLesson(b)?.number ?? 0));
  const bookmarks = lessons.filter((lesson) => progress[lesson.id]?.bookmarked);
  const nextLesson = lessons.find((lesson) => !progress[lesson.id]?.completed) ?? lessons[0];
  const percentage = Math.round((completedCount / lessons.length) * 100);
  return (
    <div className="page-container notebook-page">
      <header className="page-intro split-intro"><div><p className="eyebrow">Your study record</p><h1>Notes for the<br /><em>next reading.</em></h1></div><div className="intro-aside"><p>A notebook is not a summary warehouse. Use it to preserve objections, changes in your understanding, and questions worth taking back to the text.</p><span className="storage-label">{isAuthenticated ? <><Cloud size={17} />Synced to your Kimi account</> : <><HardDrive size={17} />Stored in this browser</>}</span></div></header>
      {!isAuthenticated && <aside className="signin-banner"><div><strong>Keep your study across devices.</strong><p>You can use the whole course without an account. Sign in when you want progress, scores, bookmarks, and notes to sync through the cloud.</p></div><Link to="/login" className="secondary-button focus-ring">Sign in to sync<ArrowRight size={17} /></Link></aside>}
      <section className="notebook-stats"><div><span>Course complete</span><strong>{percentage}%</strong><small>{completedCount} / {lessons.length} lessons</small></div><div><span>Written notes</span><strong>{String(writtenNotes.length).padStart(2, "0")}</strong><small>Across {new Set(writtenNotes.map(([id]) => getLesson(id)?.moduleId)).size} levels</small></div><div><span>Saved readings</span><strong>{String(bookmarks.length).padStart(2, "0")}</strong><small>Bookmarked lessons</small></div><Link to={`/lesson/${nextLesson.id}`} className="next-study"><span>Up next · Lesson {nextLesson.number}</span><strong>{nextLesson.title}</strong><ArrowRight size={22} /></Link></section>
      <div className="notebook-columns">
        <section className="all-notes"><div className="section-line-heading"><h2>Lesson notes</h2><span>{writtenNotes.length}</span></div>{writtenNotes.length ? <div>{writtenNotes.map(([lessonId, content]) => { const lesson = getLesson(lessonId); if (!lesson) return null; return <Link to={`/lesson/${lessonId}#lesson-notes`} className="note-entry focus-ring" key={lessonId}><span>{String(lesson.number).padStart(2, "0")}</span><div><small>{lesson.eyebrow}</small><h3>{lesson.title}</h3><p>{content}</p></div><NotebookPen size={20} /></Link>; })}</div> : <div className="empty-state compact"><NotebookPen size={26} /><h3>Your margins are empty.</h3><p>Open a lesson and write the first question you want to carry forward.</p><Link to={`/lesson/${nextLesson.id}`} className="secondary-button">Open lesson {nextLesson.number}</Link></div>}</section>
        <aside className="bookmark-list"><div className="section-line-heading"><h2>Bookmarks</h2><span>{bookmarks.length}</span></div>{bookmarks.length ? bookmarks.map((lesson) => <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="bookmark-entry focus-ring"><Bookmark size={17} fill="currentColor" /><span><small>Lesson {lesson.number}</small><strong>{lesson.title}</strong></span>{progress[lesson.id]?.completed && <Check size={17} />}</Link>) : <div className="empty-bookmarks"><Bookmark size={24} /><p>Bookmark any lesson to keep it close.</p><Link to="/curriculum" className="underlined-link">Browse curriculum</Link></div>}</aside>
      </div>
    </div>
  );
}
