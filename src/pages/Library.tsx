import { useMemo, useState } from "react";
import { ExternalLink, LibraryBig, Search } from "lucide-react";
import { companionTexts, sourceVolumes } from "@/data/library";

export default function Library() {
  const [volumeId, setVolumeId] = useState("volume-1");
  const [query, setQuery] = useState("");
  const activeVolume = sourceVolumes.find((volume) => volume.id === volumeId) ?? sourceVolumes[0];
  const chapters = useMemo(() => activeVolume.chapters.filter((chapter) => chapter.title.toLowerCase().includes(query.trim().toLowerCase())), [activeVolume, query]);
  return (
    <div className="page-container library-page">
      <header className="page-intro split-intro"><div><p className="eyebrow">Primary source reading room</p><h1>All three volumes.<br /><em>Chapter by chapter.</em></h1></div><div className="intro-aside"><p>Open the complete English text of <i>Capital</i> through the Marx/Engels Internet Archive. Volume I appeared in Marx’s lifetime; Volumes II and III were edited by Engels from Marx’s manuscripts.</p><span className="library-total"><LibraryBig size={18} />106 chapters · 4 companion texts</span></div></header>
      <div className="volume-tabs" role="tablist" aria-label="Capital volumes">{sourceVolumes.map((volume) => <button type="button" role="tab" aria-selected={volume.id === volumeId} key={volume.id} className={`volume-tab focus-ring ${volume.id === volumeId ? "active" : ""}`} onClick={() => { setVolumeId(volume.id); setQuery(""); }}><span>Volume</span><strong>{volume.numeral}</strong><small>{volume.chapters.length} chapters</small></button>)}</div>
      <section className="volume-reading-room" role="tabpanel">
        <header className="volume-header"><div><p className="eyebrow">Capital · Volume {activeVolume.numeral}</p><h2>{activeVolume.title}</h2><p>{activeVolume.subtitle}</p></div><a href={activeVolume.contentsUrl} target="_blank" rel="noreferrer" className="secondary-button focus-ring">Full contents & downloads<ExternalLink size={17} /></a></header>
        <div className="edition-note"><span>Edition note</span><p>{activeVolume.editorialNote}</p><small>{activeVolume.publication}</small></div>
        <label className="search-field library-search"><Search size={18} /><span className="sr-only">Search chapters in this volume</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${activeVolume.chapters.length} chapters in Volume ${activeVolume.numeral}…`} /></label>
        <div className="chapter-list">{chapters.map((chapter) => <a key={chapter.number} href={chapter.url} target="_blank" rel="noreferrer" className="chapter-link focus-ring"><span>{String(chapter.number).padStart(2, "0")}</span><strong>{chapter.title}</strong><ExternalLink size={17} /></a>)}</div>
        {!chapters.length && <div className="empty-state"><h2>No chapters match.</h2><p>Try a broader phrase or clear your search.</p><button className="secondary-button" type="button" onClick={() => setQuery("")}>Clear search</button></div>}
      </section>
      <section className="companion-section"><div className="section-heading"><p className="eyebrow">Before, beside, and after Capital</p><h2>Companion texts.</h2></div><div className="companion-list">{companionTexts.map((text) => <a key={text.title} href={text.url} target="_blank" rel="noreferrer" className="companion-row focus-ring"><span>{text.year}</span><div><h3>{text.title}</h3><p>{text.description}</p></div><ExternalLink size={19} /></a>)}</div></section>
      <aside className="source-credit"><strong>Source & method</strong><p>Chapter titles and publication details follow the Marx/Engels Internet Archive’s online editions. Lesson explanations are original study aids; always check interpretive claims against the linked text and alternative scholarship.</p><a href="https://www.marxists.org/archive/marx/works/" target="_blank" rel="noreferrer" className="underlined-link">Visit the Marx/Engels Library<ExternalLink size={15} /></a></aside>
    </div>
  );
}
