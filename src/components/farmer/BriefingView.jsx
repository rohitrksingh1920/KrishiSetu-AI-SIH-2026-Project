import React, { useState } from "react";
import { Sun, CloudRain, ChevronDown, CheckCircle2, WifiOff } from "lucide-react";
import { C } from "../../theme/tokens.js";
import { T } from "../../data/translations.js";
import { actions } from "../../data/mockData.js";
import SectionEyebrow from "../primitives/SectionEyebrow.jsx";
import ConfidenceDial from "../primitives/ConfidenceDial.jsx";
import SourceChip from "../primitives/SourceChip.jsx";

export default function BriefingView({ lang }) {
  const [done, setDone] = useState({});
  const [expanded, setExpanded] = useState(null);
  const t = T[lang];
  const hour = new Date().getHours();
  const greet = hour < 12 ? t.greetMorning : hour < 17 ? t.greetAfternoon : t.greetEvening;
  const dateStr = new Date().toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="ks-rise">
      <div className="flex items-center gap-2 text-[13px] mb-4" style={{ color: C.soil }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.ndvi }} />
        <span className="font-medium">{greet}, Ram Kumar</span>
        <span className="opacity-40">·</span>
        <span className="opacity-70">{dateStr}</span>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div>
          <SectionEyebrow>Week of 25–31 Aug 2026</SectionEyebrow>
          <h1 className="ks-display text-[26px] sm:text-[30px] font-semibold leading-tight">{t.briefing}</h1>
          <p className="text-[13.5px] opacity-70 mt-1">{t.briefingSub}</p>
        </div>
        <div className="flex items-center gap-2 ks-card rounded-md px-3 py-2">
          <Sun size={18} style={{ color: C.turmeric }} />
          <div className="ks-mono text-sm">34°C · Sohna, HR</div>
          <div className="w-px h-4" style={{ background: C.line }} />
          <CloudRain size={16} style={{ color: C.monsoon }} />
          <div className="ks-mono text-sm">68% rain Thu</div>
        </div>
      </div>

      <div className="grid gap-3">
        {actions.map((a, i) => {
          const Icon = a.icon;
          const isDone = done[i];
          return (
            <div key={i} className="ks-card ks-liftable rounded-lg p-4" style={{ borderLeft: `4px solid ${a.tone}` }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0" style={{ background: `${a.tone}1A` }}>
                  <Icon size={18} style={{ color: a.tone }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className={`font-semibold text-[15px] leading-snug ${isDone ? "line-through opacity-50" : ""}`}>
                      {a.title[lang]}
                    </h3>
                    <ConfidenceDial value={a.confidence} />
                  </div>
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="text-[12.5px] mt-1 flex items-center gap-1 font-medium"
                    style={{ color: C.soil }}
                  >
                    {t.why} <ChevronDown size={12} className={`transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === i && <p className="text-[13px] mt-1.5 opacity-80 leading-relaxed ks-rise">{a.why[lang]}</p>}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {a.sources.map((s) => (
                        <SourceChip key={s} label={s} />
                      ))}
                    </div>
                    <button
                      onClick={() => setDone({ ...done, [i]: !isDone })}
                      className="flex items-center gap-1.5 text-[12.5px] font-medium px-2.5 py-1.5 rounded-md transition-colors"
                      style={{
                        background: isDone ? `${C.ndvi}1A` : "transparent",
                        color: isDone ? C.ndvi : C.ink,
                        border: `1px solid ${isDone ? C.ndvi : C.line}`,
                      }}
                    >
                      <CheckCircle2 size={14} /> {t.markDone}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-2 text-[12px] px-3 py-2.5 rounded-md" style={{ background: `${C.monsoon}0D`, color: C.monsoonDeep }}>
        <WifiOff size={14} />
        Last synced 6h ago while offline. This briefing is cached and will refresh when connectivity returns.
      </div>
    </div>
  );
}
