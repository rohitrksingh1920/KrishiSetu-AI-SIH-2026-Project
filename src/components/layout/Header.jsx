import React from "react";
import { Leaf, Languages, Building2 } from "lucide-react";
import { C } from "../../theme/tokens.js";

export default function Header({ role, setRole, lang, setLang }) {
  return (
    <header
      className="relative flex items-center justify-between px-4 sm:px-6 py-3 shrink-0 overflow-hidden"
      style={{ background: C.monsoonDeep, color: C.paper }}
    >
      <div className="flex items-center gap-2 relative z-10">
        <Leaf size={20} style={{ color: C.turmeric }} />
        <span className="ks-display text-[18px] font-semibold tracking-tight">
          KrishiSetu
        </span>
        <span className="ks-mono text-[10px] opacity-50 hidden sm:inline">
          कृषि सेतु · SIH 2026
        </span>
      </div>
      <div className="flex items-center gap-2 relative z-10">
        <button
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
          className="flex items-center gap-1.5 text-[12px] px-2.5 py-1.5 rounded-md transition-colors hover:bg-white/10"
          style={{ background: "rgba(241,236,218,0.1)" }}
        >
          <Languages size={13} /> {lang === "en" ? "EN" : "हिं"}
        </button>
        <button
          onClick={() => setRole(role === "farmer" ? "officer" : "farmer")}
          className="flex items-center gap-1.5 text-[12px] px-2.5 py-1.5 rounded-md font-medium transition-colors"
          style={{
            background:
              role === "officer" ? C.turmeric : "rgba(241,236,218,0.1)",
            color: role === "officer" ? C.monsoonDeep : C.paper,
          }}
        >
          <Building2 size={13} />{" "}
          {role === "farmer" ? "Switch to officer view" : "Officer view"}
        </button>
      </div>
      {/* signature touch: a faint radar sweep, like a monsoon nowcast readout ticking behind the brand bar */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] opacity-70">
        <div
          className="h-full w-1/3 ks-sweep"
          style={{
            background: `linear-gradient(90deg, transparent, ${role === "officer" ? C.turmeric : C.ndviLight}, transparent)`,
          }}
        />
      </div>
    </header>
  );
}
