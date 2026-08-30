import React from "react";
import { Stamp, ArrowLeftRight } from "lucide-react";
import { C } from "../../theme/tokens.js";
import { T } from "../../data/translations.js";
import SectionEyebrow from "../primitives/SectionEyebrow.jsx";

export default function PlotView({ lang }) {
  const t = T[lang];
  return (
    <div className="ks-rise">
      <SectionEyebrow>{t.plotEyebrow}</SectionEyebrow>
      <h1 className="ks-display text-[26px] font-semibold mb-4">
        {t.plotTitle}
      </h1>

      <div
        className="relative rounded-xl p-5 max-w-md"
        style={{
          background: C.monsoon,
          color: C.paper,
          border: `1px dashed ${C.turmeric}`,
        }}
      >
        <div
          className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2"
          style={{ borderColor: C.turmeric }}
        />
        <div
          className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2"
          style={{ borderColor: C.turmeric }}
        />
        <div
          className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2"
          style={{ borderColor: C.turmeric }}
        />
        <div
          className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2"
          style={{ borderColor: C.turmeric }}
        />

        <div className="flex justify-between items-start">
          <div>
            <div className="ks-mono text-[10px] tracking-widest uppercase opacity-70">
              KrishiSetu Plot Card
            </div>
            <div className="ks-display text-xl font-semibold mt-0.5">
              Ram Kumar
            </div>
            <div className="text-[12.5px] opacity-75">
              Sohna, Gurugram, Haryana
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 rotate-6">
            <Stamp size={26} style={{ color: C.turmeric }} />
            <span
              className="ks-mono text-[9px] tracking-wide"
              style={{ color: C.turmeric }}
            >
              VERIFIED
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4 text-[13px]">
          {[
            ["Plot ID", "GGN-114"],
            ["Crop", "Sugarcane (Ratoon Yr 2)"],
            ["Sowing date", "12 Feb 2025"],
            ["Soil type", "Loamy sandy"],
            ["Irrigation", "Canal + tubewell"],
            ["Previous crop", "Wheat"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="ks-mono text-[10px] uppercase tracking-wide opacity-55">
                {k}
              </div>
              <div className="font-medium">{v}</div>
            </div>
          ))}
        </div>
        <div
          className="mt-4 pt-3 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(241,236,218,0.2)" }}
        >
          <span className="ks-mono text-[10.5px] opacity-70">
            Demo Farmer ID · consented profile
          </span>
          <ArrowLeftRight size={13} className="opacity-70" />
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-3 gap-3 max-w-2xl">
        {[
          { label: "Nitrogen", val: "Medium", tone: C.ndvi },
          { label: "Phosphorus", val: "Adequate", tone: C.ndvi },
          { label: "Zinc", val: "0.4 ppm — Low", tone: C.alert },
        ].map((r) => (
          <div key={r.label} className="ks-card rounded-md p-3">
            <div className="ks-mono text-[10px] uppercase tracking-wide opacity-55">
              {r.label}
            </div>
            <div
              className="font-semibold text-[14px] mt-0.5"
              style={{ color: r.tone }}
            >
              {r.val}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[12px] opacity-60 mt-3 max-w-md">
        Soil values from uploaded Soil Health Card photo. Production integration
        path documented for AgriStack/UFSI Farmer ID.
      </p>
    </div>
  );
}
