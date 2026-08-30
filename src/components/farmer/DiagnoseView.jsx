import React, { useState } from "react";
import { Camera, Upload, Satellite, PhoneCall } from "lucide-react";
import { C } from "../../theme/tokens.js";
import { T } from "../../data/translations.js";
import SectionEyebrow from "../primitives/SectionEyebrow.jsx";
import ValidatorFooter from "../primitives/ValidatorFooter.jsx";

export default function DiagnoseView({ lang }) {
  const t = T[lang];
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);

  const run = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1100);
  };

  return (
    <div className="ks-rise">
      <SectionEyebrow>{t.diagnoseEyebrow}</SectionEyebrow>
      <h1 className="ks-display text-[26px] font-semibold mb-1">
        {t.diagnoseTitle}
      </h1>
      <p className="text-[13px] opacity-70 mb-4 max-w-xl">
        Upload a leaf or field photo. The vision model gives a preliminary read
        — never a final diagnosis — cross-checked against weather, crop stage
        and soil context.
      </p>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="ks-card rounded-lg p-4">
          <div
            className="rounded-md flex flex-col items-center justify-center gap-2 py-10"
            style={{ border: `2px dashed ${C.line}`, background: C.paper }}
          >
            <Camera size={26} style={{ color: C.soil }} />
            <div className="text-[13px] font-medium">leaf_sample_row4.jpg</div>
            <div className="text-[11px] opacity-55">
              Captured 26 Aug, 9:14 AM · GPS tagged
            </div>
          </div>
          <button
            onClick={run}
            disabled={loading || analyzed}
            className="w-full mt-3 py-2.5 rounded-md font-medium text-[13.5px] flex items-center justify-center gap-2 transition-opacity"
            style={{
              background: C.ndvi,
              color: C.paper,
              opacity: loading || analyzed ? 0.6 : 1,
            }}
          >
            {loading ? (
              "Analyzing…"
            ) : analyzed ? (
              "Analyzed"
            ) : (
              <>
                <Upload size={15} /> Analyze photo
              </>
            )}
          </button>
        </div>

        <div className="ks-card rounded-lg p-4 min-h-[240px]">
          {!analyzed && !loading && (
            <div className="h-full flex items-center justify-center text-[13px] opacity-50">
              Result will appear here
            </div>
          )}
          {loading && (
            <div className="h-full flex flex-col items-center justify-center gap-2 ks-pulse">
              <Satellite size={22} style={{ color: C.monsoon }} />
              <div className="text-[12.5px] opacity-70">
                Cross-checking with weather, soil & crop stage…
              </div>
            </div>
          )}
          {analyzed && (
            <div className="ks-rise">
              <div
                className="text-[11px] uppercase ks-mono tracking-wide px-2 py-1 rounded inline-block mb-2"
                style={{ background: `${C.turmeric}22`, color: C.soil }}
              >
                Preliminary observation — not a final diagnosis
              </div>
              <div className="space-y-2">
                {[
                  { label: "Zinc-deficiency leaf pattern", pct: 68 },
                  { label: "Early red rot stress signature", pct: 21 },
                  { label: "Normal seasonal variation", pct: 11 },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <div className="flex-1 text-[13px]">{r.label}</div>
                    <div
                      className="w-24 h-1.5 rounded-full overflow-hidden"
                      style={{ background: C.paperDeep }}
                    >
                      <div
                        className="h-full"
                        style={{
                          width: `${r.pct}%`,
                          background: r.pct === 68 ? C.ndvi : C.line,
                        }}
                      />
                    </div>
                    <div className="ks-mono text-[11px] w-8 text-right">
                      {r.pct}%
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[12.5px] mt-3 opacity-80">
                Matches this week's soil card zinc reading (0.4 ppm). Recommend
                confirming in person.
              </p>
              <button
                className="mt-3 flex items-center gap-1.5 text-[12.5px] font-medium px-3 py-1.5 rounded-md"
                style={{
                  background: `${C.alert}14`,
                  color: C.alert,
                  border: `1px solid ${C.alert}44`,
                }}
              >
                <PhoneCall size={13} /> Request KVK Sohna callback
              </button>
              <ValidatorFooter
                confidence={68}
                sources={[
                  "Vision model v1.2",
                  "Soil Health Card",
                  "IMD weather",
                ]}
                assumptions="Trained on PlantDoc + field-collected images; lighting and leaf angle assumed comparable to training set."
                escalation="Confidence below 70% — KVK visit recommended within 5 days."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
