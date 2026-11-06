import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { trpc } from "@/providers/trpc";
import { useAuth } from "@/hooks/useAuth";

export type ProgressEntry = { completed: boolean; bestScore: number; bookmarked: boolean };
export type ProgressMap = Record<string, ProgressEntry>;
export type NoteMap = Record<string, string>;

type LearningContextValue = {
  progress: ProgressMap;
  notes: NoteMap;
  isAuthenticated: boolean;
  isLoading: boolean;
  syncError: string | null;
  completedCount: number;
  setCompleted: (lessonId: string, completed: boolean, score?: number) => void;
  setBookmarked: (lessonId: string, bookmarked: boolean) => void;
  saveNote: (lessonId: string, content: string) => void;
};

const LearningContext = createContext<LearningContextValue | null>(null);
const emptyEntry: ProgressEntry = { completed: false, bestScore: 0, bookmarked: false };

function readLocal<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function LearningProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [guestProgress, setGuestProgress] = useState<ProgressMap>(() => readLocal("capital-study-progress-v1", {}));
  const [guestNotes, setGuestNotes] = useState<NoteMap>(() => readLocal("capital-study-notes-v1", {}));
  const [cloudProgress, setCloudProgress] = useState<ProgressMap>({});
  const [cloudNotes, setCloudNotes] = useState<NoteMap>({});
  const [syncError, setSyncError] = useState<string | null>(null);
  const utils = trpc.useUtils();
  const overview = trpc.learning.overview.useQuery(undefined, { enabled: isAuthenticated, retry: false });

  useEffect(() => { localStorage.setItem("capital-study-progress-v1", JSON.stringify(guestProgress)); }, [guestProgress]);
  useEffect(() => { localStorage.setItem("capital-study-notes-v1", JSON.stringify(guestNotes)); }, [guestNotes]);
  useEffect(() => {
    if (!overview.data) return;
    setCloudProgress(Object.fromEntries(overview.data.progress.map((item) => [item.lessonId, {
      completed: item.completed,
      bestScore: item.bestScore,
      bookmarked: item.bookmarked,
    }])));
    setCloudNotes(Object.fromEntries(overview.data.notes.map((item) => [item.lessonId, item.content])));
  }, [overview.data]);

  const progressMutation = trpc.learning.setProgress.useMutation({
    onError: () => setSyncError("Cloud sync failed. Your last change may not be saved; please try again."),
    onSuccess: () => { setSyncError(null); void utils.learning.overview.invalidate(); },
  });
  const noteMutation = trpc.learning.saveNote.useMutation({
    onError: () => setSyncError("Note sync failed. Please save again when your connection is available."),
    onSuccess: () => { setSyncError(null); void utils.learning.overview.invalidate(); },
  });

  const updateEntry = useCallback((lessonId: string, patch: Partial<ProgressEntry>) => {
    const setter = isAuthenticated ? setCloudProgress : setGuestProgress;
    setter((current) => ({ ...current, [lessonId]: { ...(current[lessonId] ?? emptyEntry), ...patch } }));
  }, [isAuthenticated]);
  const setCompleted = useCallback((lessonId: string, completed: boolean, score = 0) => {
    const current = (isAuthenticated ? cloudProgress : guestProgress)[lessonId] ?? emptyEntry;
    updateEntry(lessonId, { completed, bestScore: Math.max(current.bestScore, score) });
    if (isAuthenticated) progressMutation.mutate({ lessonId, completed, score });
  }, [cloudProgress, guestProgress, isAuthenticated, progressMutation, updateEntry]);
  const setBookmarked = useCallback((lessonId: string, bookmarked: boolean) => {
    updateEntry(lessonId, { bookmarked });
    if (isAuthenticated) progressMutation.mutate({ lessonId, bookmarked });
  }, [isAuthenticated, progressMutation, updateEntry]);
  const saveNote = useCallback((lessonId: string, content: string) => {
    const setter = isAuthenticated ? setCloudNotes : setGuestNotes;
    setter((current) => ({ ...current, [lessonId]: content }));
    if (isAuthenticated) noteMutation.mutate({ lessonId, content });
  }, [isAuthenticated, noteMutation]);

  const progress = isAuthenticated ? cloudProgress : guestProgress;
  const notes = isAuthenticated ? cloudNotes : guestNotes;
  const completedCount = Object.values(progress).filter((entry) => entry.completed).length;
  const value = useMemo<LearningContextValue>(() => ({
    progress, notes, isAuthenticated,
    isLoading: authLoading || (isAuthenticated && overview.isLoading),
    syncError, completedCount, setCompleted, setBookmarked, saveNote,
  }), [progress, notes, isAuthenticated, authLoading, overview.isLoading, syncError, completedCount, setCompleted, setBookmarked, saveNote]);
  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}

export function useLearning() {
  const value = useContext(LearningContext);
  if (!value) throw new Error("useLearning must be used inside LearningProvider");
  return value;
}
