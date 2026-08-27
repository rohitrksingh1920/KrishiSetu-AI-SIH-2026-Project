import React from "react";
import { C } from "../../theme/tokens.js";

export default function SectionEyebrow({ children }) {
  return (
    <div className="ks-mono text-[11px] tracking-[0.18em] uppercase mb-1" style={{ color: C.soil }}>
      {children}
    </div>
  );
}
