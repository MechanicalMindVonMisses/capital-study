import { useEffect, useState } from "react";
import { Check, Cloud, HardDrive, Save } from "lucide-react";
import { useLearning } from "@/providers/learning";

export default function NoteEditor({ lessonId }: { lessonId: string }) {
  const { notes, saveNote, isAuthenticated } = useLearning();
  const saved = notes[lessonId] ?? "";
  const [draft, setDraft] = useState(saved);
  const [justSaved, setJustSaved] = useState(false);
  useEffect(() => { setDraft(notes[lessonId] ?? ""); setJustSaved(false); }, [lessonId]);
  useEffect(() => { setDraft(saved); }, [saved]);
  const submit = () => {
    saveNote(lessonId, draft);
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 1800);
  };
  return (
    <section className="notes-section" id="lesson-notes">
      <div className="notes-head"><div><p className="eyebrow">Your margin</p><h2>Lesson notes</h2></div><span>{isAuthenticated ? <><Cloud size={15} />Cloud synced</> : <><HardDrive size={15} />This device only</>}</span></div>
      <label htmlFor={`note-${lessonId}`} className="sr-only">Notes for this lesson</label>
      <textarea id={`note-${lessonId}`} value={draft} maxLength={12000} onChange={(event) => { setDraft(event.target.value); setJustSaved(false); }} placeholder="Write a question, reconstruct an argument, or record a passage to revisit…" />
      <div className="notes-actions"><span>{draft.length.toLocaleString()} / 12,000</span><button type="button" className="secondary-button focus-ring" onClick={submit} disabled={draft === saved}>{justSaved ? <><Check size={17} />Saved</> : <><Save size={17} />Save note</>}</button></div>
    </section>
  );
}
