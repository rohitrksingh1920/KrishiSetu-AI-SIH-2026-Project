import React from "react";
import { C } from "../../theme/tokens.js";

export default function SourceChip({ label }) {
  return (
    <span
      className="ks-mono text-[10.5px] uppercase tracking-wide px-2 py-1 rounded-sm border"
      style={{ borderColor: C.line, color: C.monsoon, background: "rgba(30,58,95,0.06)" }}
    >
      {label}
    </span>
  );
}
