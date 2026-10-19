import { Loader2 } from "lucide-react";

/**
 * Shown the instant a navigation starts (library → report, report → library),
 * before the next route's client bundle and data are ready. Without it, clicking
 * Open appeared to do nothing for as long as the report took to load.
 */
export default function Loading() {
  return (
    <div
      className="app-bg grid min-h-screen place-items-center"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3 text-ink-soft">
        <Loader2 className="animate-spin" size={22} />
        <span className="text-[13px] font-medium">Loading…</span>
      </div>
    </div>
  );
}
