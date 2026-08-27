import React from "react";
import { Sprout, Wheat } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { C } from "../../theme/tokens.js";
import { T } from "../../data/translations.js";
import { ratoonCurve, stages } from "../../data/mockData.js";
import SectionEyebrow from "../primitives/SectionEyebrow.jsx";
import ValidatorFooter from "../primitives/ValidatorFooter.jsx";

export default function PlannerView({ lang }) {
  const t = T[lang];
  return (
    <div className="ks-rise">
      <SectionEyebrow>{t.plannerEyebrow}</SectionEyebrow>
      <h1 className="ks-display text-[26px] font-semibold mb-4">{t.plannerTitle}</h1>

      <div className="ks-card rounded-lg p-4 mb-4">
        <div className="text-[13px] font-medium mb-3">Stage — Day 96 of ratoon cycle</div>
        <div className="flex items-center">
          {stages.map((s, i) => {
            const active = s === "Tillering";
            const past = i < 2;
            return (
              <React.Fragment key={s}>
                <div className="flex flex-col items-center gap-1.5" style={{ width: 88 }}>
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{
                      background: active ? C.turmeric : past ? C.ndvi : C.paperDeep,
                      boxShadow: active ? `0 0 0 4px ${C.turmeric}26` : "none",
                    }}
                  />
                  <span
                    className="text-[11px] text-center leading-tight"
                    style={{ color: active ? C.ink : "inherit", fontWeight: active ? 600 : 400, opacity: active ? 1 : 0.55 }}
                  >
                    {s}
                  </span>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex-1 h-px" style={{ background: past || active ? C.ndvi : C.line }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="ks-card rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <Sprout size={16} style={{ color: C.ndvi }} />
            <h3 className="font-semibold text-[14.5px]">Ratoon regrowth trend</h3>
          </div>
          <p className="text-[12px] opacity-65 mb-2">Sentinel-2 NDVI signature, Row 4, last 96 days</p>
          <div className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ratoonCurve} margin={{ top: 6, right: 6, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="ndviFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.ndvi} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={C.ndvi} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fontSize: 10 }} stroke={C.line} />
                <YAxis tick={{ fontSize: 10 }} stroke={C.line} domain={[0, 0.8]} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 6 }} />
                <Area type="monotone" dataKey="ndvi" stroke={C.ndvi} fill="url(#ndviFill)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2 text-center">
            <div className="ks-mono">
              <div className="text-[16px] font-semibold" style={{ color: C.ndvi }}>
                74%
              </div>
              <div className="text-[10px] opacity-60 uppercase">Regrowth</div>
            </div>
            <div className="ks-mono">
              <div className="text-[16px] font-semibold" style={{ color: C.turmeric }}>
                12%
              </div>
              <div className="text-[10px] opacity-60 uppercase">Gap rows</div>
            </div>
            <div className="ks-mono">
              <div className="text-[16px] font-semibold" style={{ color: C.soil }}>
                1 cycle
              </div>
              <div className="text-[10px] opacity-60 uppercase">Viable left</div>
            </div>
          </div>
          <ValidatorFooter
            confidence={74}
            sources={["Sentinel-2 NDVI", "Ratoon Planner"]}
            escalation="Below 65% regrowth would trigger a replant recommendation."
          />
        </div>

        <div className="ks-card rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <Wheat size={16} style={{ color: C.soil }} />
            <h3 className="font-semibold text-[14.5px]">Next-season rotation</h3>
          </div>
          <p className="text-[12px] opacity-65 mb-3">Based on soil nitrogen depletion after cane harvest</p>
          <div className="space-y-2.5">
            {[
              { crop: "Wheat", fit: "Best fit", pct: 88 },
              { crop: "Mustard", fit: "Good fit", pct: 71 },
              { crop: "Fallow + green manure", fit: "If soil is tired", pct: 54 },
            ].map((r) => (
              <div key={r.crop} className="flex items-center gap-3">
                <div className="w-28 text-[13px] font-medium">{r.crop}</div>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: C.paperDeep }}>
                  <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: C.ndvi }} />
                </div>
                <div className="ks-mono text-[11px] w-16 text-right opacity-70">{r.fit}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 text-[12.5px] opacity-75" style={{ borderTop: `1px dashed ${C.line}` }}>
            Harvest window: <span className="font-medium">Feb 2027.</span> Recommendation source: ICAR Package of Practices,
            canonical layer.
          </div>
        </div>
      </div>
    </div>
  );
}
