type Level = "info" | "warn" | "error";
type Entry = { level: Level; msg: string; ctx?: Record<string, unknown> };

const queue: Entry[] = [];
let scheduled = false;

function flush() {
  scheduled = false;
  const batch = queue.splice(0, 50);
  if (!batch.length) return;
  void fetch("/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(batch),
    keepalive: true,
  }).catch(() => {});
}

function emit(level: Level, msg: string, ctx?: Record<string, unknown>) {
  console[level](msg, ctx ?? "");
  if (queue.length < 500) queue.push({ level, msg, ctx });
  if (!scheduled) {
    scheduled = true;
    queueMicrotask(flush);
  }
}

export const log = {
  info: (msg: string, ctx?: Record<string, unknown>) => emit("info", msg, ctx),
  warn: (msg: string, ctx?: Record<string, unknown>) => emit("warn", msg, ctx),
  error: (msg: string, ctx?: Record<string, unknown>) => emit("error", msg, ctx),
};

if (typeof window !== "undefined") {
  window.addEventListener("error", event => {
    emit("error", event.message || "window.onerror", { stack: event.error?.stack });
  });
  window.addEventListener("unhandledrejection", event => {
    const reason = event.reason;
    emit("error", "unhandledrejection", {
      reason: reason instanceof Error ? reason.message : String(reason),
      stack: reason instanceof Error ? reason.stack : undefined,
    });
  });
}

export default log;
