import React from "react";
import { C } from "../../theme/tokens.js";
import { farmerNav } from "../../data/nav.js";

export default function Sidebar({ tab, setTab }) {
  return (
    <aside
      className="hidden md:flex flex-col w-56 shrink-0 py-4 px-3 gap-1 ks-texture"
      style={{ background: C.paperDeep, borderRight: `1px solid ${C.line}` }}
    >
      {farmerNav.map((n) => {
        const Icon = n.icon;
        const active = tab === n.id;
        return (
          <button
            key={n.id}
            onClick={() => setTab(n.id)}
            className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] text-left transition-colors"
            style={{
              background: active ? C.card : "transparent",
              color: active ? C.ndvi : C.ink,
              fontWeight: active ? 600 : 400,
              border: active ? `1px solid ${C.line}` : "1px solid transparent",
            }}
          >
            <Icon size={15} /> {n.label}
          </button>
        );
      })}
      <div className="mt-auto pt-3 text-[11px] opacity-55 ks-mono">
        Demo Farmer: Ram Kumar
      </div>
    </aside>
  );
}
