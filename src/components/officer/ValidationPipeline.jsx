import React from "react";
import { ArrowRight, ArrowDown, CheckCircle2, AlertTriangle, RotateCcw } from "lucide-react";
import { C } from "../../theme/tokens.js";
import { validationPipeline as p } from "../../data/pitchData.js";

const toneMap = { ndvi: C.ndvi, alert: C.alert, monsoon: C.monsoon, turmeric: C.turmeric };

export default function ValidationPipeline() {
  return (
    <div className="ks-card rounded-lg p-4">
      <h3 className="font-semibold text-[14.5px] mb-1">Validation pipeline</h3>
      <p className="text-[12px] opacity-65 mb-4">How every automated answer earns the right to reach a farmer</p>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <div className="ks-mono text-[11.5px] px-3 py-2 rounded-md text-center" style={{ background: C.paperDeep }}>
            {p.trigger}
          </div>
          <ArrowRight size={15} className="opacity-50 shrink-0" />
          <div className="ks-mono text-[11.5px] px-3 py-2 rounded-md text-center" style={{ background: C.monsoon, color: C.paper }}>
            {p.engine}
          </div>
        </div>

        <ArrowDown size={15} className="opacity-50" />

        <div className="grid sm:grid-cols-2 gap-3 w-full max-w-xl">
          {p.branches.map((b) => {
            const Icon = b.id === "auto" ? CheckCircle2 : AlertTriangle;
            const tone = toneMap[b.tone];
            return (
              <div key={b.id} className="rounded-md p-3 text-center" style={{ background: `${tone}14`, border: `1px solid ${tone}44` }}>
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Icon size={14} style={{ color: tone }} />
                  <span className="ks-mono text-[11px] font-semibold" style={{ color: tone }}>
                    {b.label}
                  </span>
                </div>
                <div className="text-[12.5px]">{b.result}</div>
              </div>
            );
          })}
        </div>

        <ArrowDown size={15} className="opacity-50" />

        <div className="ks-mono text-[11.5px] px-3 py-2 rounded-md text-center font-semibold" style={{ background: `${C.ndvi}1A`, color: C.ndvi }}>
          {p.outcome}
        </div>
      </div>

      <div className="mt-4 pt-3 flex items-start gap-2 text-[12px] opacity-70" style={{ borderTop: `1px dashed ${C.line}` }}>
        <RotateCcw size={13} className="mt-0.5 shrink-0" />
        {p.feedback}
      </div>
    </div>
  );
}
