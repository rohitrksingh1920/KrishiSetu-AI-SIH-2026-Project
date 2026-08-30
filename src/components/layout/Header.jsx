import React from "react";
import { Leaf, Languages, Building2, Info } from "lucide-react";
import { C } from "../../theme/tokens.js";

export default function Header({ role, setRole, lang, setLang, onInfoClick }) {
  return (
    <header
      className="relative flex items-center justify-between px-4 sm:px-6 py-3 shrink-0 overflow-hidden"
      style={{ background: C.monsoonDeep, color: C.paper }}
    >
      <div className="flex items-center gap-2 relative z-10 min-w-0">
        <Leaf size={20} style={{ color: C.turmeric }} className="shrink-0" />
        <span className="ks-display text-[18px] font-semibold tracking-tight shrink-0">
          KrishiSetu
        </span>
        <span className="ks-mono text-[10px] opacity-50 hidden lg:inline shrink-0">
          कृषि सेतु
        </span>
        <span
          className="w-px h-3.5 opacity-30 hidden sm:inline shrink-0"
          style={{ background: C.paper }}
        />
        <span className="ks-mono text-[10px] opacity-60 hidden sm:inline truncate">
          GentEch · PS 197 · SIH 2026
        </span>
      </div>
      <div className="flex items-center gap-2 relative z-10 shrink-0">
        <button
          onClick={onInfoClick}
          className="flex items-center gap-1.5 text-[12px] px-2.5 py-1.5 rounded-md transition-colors hover:bg-white/10"
          style={{ background: "rgba(241,236,218,0.1)" }}
          aria-label="About this prototype"
        >
          <Info size={13} /> <span className="hidden sm:inline">About</span>
        </button>
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
          <span className="hidden sm:inline">
            {role === "farmer" ? "Switch to officer view" : "Officer view"}
          </span>
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
