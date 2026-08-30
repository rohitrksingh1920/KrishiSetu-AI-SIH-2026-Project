import React from "react";
import { C } from "../../theme/tokens.js";

export default function ConfidenceDial({ value, size = 46 }) {
  return (
    <div
      className="relative rounded-full flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${C.turmeric} ${value}%, ${C.paperDeep} 0)`,
      }}
    >
      <div
        className="rounded-full flex items-center justify-center ks-mono font-semibold"
        style={{
          width: size - 10,
          height: size - 10,
          background: C.card,
          fontSize: size * 0.26,
          color: C.ink,
        }}
      >
        {value}
      </div>
    </div>
  );
}
