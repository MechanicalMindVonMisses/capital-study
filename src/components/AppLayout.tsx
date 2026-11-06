import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { BookA, BookOpen, Cloud, FlaskConical, Home, Library, LogIn, LogOut, Map, Menu, NotebookText, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useLearning } from "@/providers/learning";
import { lessons } from "@/data/course";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="brand focus-ring" aria-label="Capital Study home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span><strong>CAPITAL</strong>{!compact && <small>STUDY EDITION</small>}</span>
    </Link>
  );
}

const navigation = [
  { to: "/curriculum", label: "Curriculum", icon: Map },
  { to: "/library", label: "Source library", icon: Library },
  { to: "/labs", label: "Economic labs", icon: FlaskConical },
  { to: "/glossary", label: "Glossary & review", icon: BookA },
  { to: "/notebook", label: "My notebook", icon: NotebookText },
];

function Navigation({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="course-nav" aria-label="Study navigation">
      <p className="nav-label">Reading rooms</p>
      {navigation.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} onClick={onNavigate} className={({ isActive }) => `nav-link focus-ring ${isActive ? "active" : ""}`}>
          <Icon size={18} strokeWidth={1.7} aria-hidden="true" /><span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function AccountControls({ onNavigate }: { onNavigate?: () => void }) {
  const { user, isAuthenticated, logout } = useAuth();
  return isAuthenticated ? (
    <div className="account-block">
      <div className="account-name"><Cloud size={16} aria-hidden="true" /><span>{user?.name || "Signed in"}</span></div>
      <button className="text-button focus-ring" type="button" onClick={() => { logout(); onNavigate?.(); }}><LogOut size={16} />Sign out</button>
    </div>
  ) : (
    <Link to="/login" onClick={onNavigate} className="nav-link focus-ring"><LogIn size={18} /><span>Sign in to sync</span></Link>
  );
}

function StudyProgress() {
  const { completedCount, isAuthenticated } = useLearning();
  const percentage = Math.round((completedCount / lessons.length) * 100);
  return (
    <div className="study-progress">
      <div className="progress-meta"><span>Your course</span><strong>{completedCount}/{lessons.length}</strong></div>
      <div className="progress-track" role="progressbar" aria-label="Lessons completed" aria-valuemin={0} aria-valuemax={lessons.length} aria-valuenow={completedCount}><span style={{ width: `${percentage}%` }} /></div>
      <p>{isAuthenticated ? "Cloud sync on" : "Saved on this device"}</p>
    </div>
  );
}

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { syncError } = useLearning();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);
  return (
    <div className="app-shell">
      <aside className="desktop-sidebar">
        <Brand /><StudyProgress /><Navigation />
        <div className="sidebar-bottom"><AccountControls /><span>Primary texts · clear commentary</span></div>
      </aside>
      <header className="mobile-header">
        <Brand compact />
        <button type="button" className="icon-button focus-ring" onClick={() => setMenuOpen(true)} aria-label="Open course menu" aria-expanded={menuOpen}><Menu size={23} /></button>
      </header>
      {menuOpen && (
        <div className="mobile-menu-layer" role="dialog" aria-modal="true" aria-label="Course menu">
          <button className="menu-backdrop" aria-label="Close course menu" onClick={() => setMenuOpen(false)} />
          <div className="mobile-menu-panel">
            <div className="mobile-menu-head"><Brand /><button type="button" className="icon-button focus-ring" onClick={() => setMenuOpen(false)} aria-label="Close course menu"><X size={23} /></button></div>
            <StudyProgress /><Navigation onNavigate={() => setMenuOpen(false)} /><AccountControls onNavigate={() => setMenuOpen(false)} />
            <Link className="nav-link focus-ring" to="/" onClick={() => setMenuOpen(false)}><Home size={18} />Course introduction</Link>
          </div>
        </div>
      )}
      <main className="app-main" id="main-content">
        {syncError && <div className="sync-error" role="alert">{syncError}</div>}
        <div key={location.pathname} className="page-transition"><Outlet /></div>
        <footer className="app-footer"><BookOpen size={17} aria-hidden="true" /><p>Read the argument. Check the evidence. Keep the questions open.</p><Link to="/library" className="underlined-link">Sources & editions</Link></footer>
      </main>
    </div>
  );
}
