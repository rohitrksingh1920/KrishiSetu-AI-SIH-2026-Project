import React, { useState } from "react";
import { ShieldCheck, ChevronDown } from "lucide-react";
import { C } from "../../theme/tokens.js";
import ConfidenceDial from "./ConfidenceDial.jsx";
import SourceChip from "./SourceChip.jsx";

export default function ValidatorFooter({
  confidence,
  sources,
  assumptions,
  escalation,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3 pt-3" style={{ borderTop: `1px dashed ${C.line}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-[12.5px] font-medium"
        style={{ color: C.monsoon }}
      >
        <ShieldCheck size={14} /> Safety-validated response
        <ChevronDown
          size={13}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-2 grid sm:grid-cols-4 gap-3 text-[12.5px] ks-rise">
          <div>
            <div className="ks-mono text-[10px] uppercase tracking-wide opacity-60 mb-1">
              Confidence
            </div>
            <div className="flex items-center gap-2">
              <ConfidenceDial value={confidence} size={32} />{" "}
              <span>{confidence}% match</span>
            </div>
          </div>
          <div>
            <div className="ks-mono text-[10px] uppercase tracking-wide opacity-60 mb-1">
              Sources
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sources.map((s) => (
                <SourceChip key={s} label={s} />
              ))}
            </div>
          </div>
          <div>
            <div className="ks-mono text-[10px] uppercase tracking-wide opacity-60 mb-1">
              Assumptions
            </div>
            <div className="opacity-80">{assumptions}</div>
          </div>
          <div>
            <div className="ks-mono text-[10px] uppercase tracking-wide opacity-60 mb-1">
              Escalation
            </div>
            <div className="opacity-80">{escalation}</div>
          </div>
        </div>
      )}
    </div>
  );
}
