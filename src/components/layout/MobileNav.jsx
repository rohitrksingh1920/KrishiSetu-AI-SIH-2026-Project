import React from "react";
import { C } from "../../theme/tokens.js";
import { farmerNav } from "../../data/nav.js";

export default function MobileNav({ tab, setTab }) {
  return (
    <nav
      className="md:hidden flex justify-around py-1.5 shrink-0"
      style={{ background: C.paperDeep, borderTop: `1px solid ${C.line}` }}
    >
      {farmerNav.slice(0, 5).map((n) => {
        const Icon = n.icon;
        const active = tab === n.id;
        return (
          <button
            key={n.id}
            onClick={() => setTab(n.id)}
            aria-label={n.label}
            aria-current={active}
            className="flex flex-col items-center gap-0.5 px-2 py-1.5 min-w-[52px]"
          >
            <Icon
              size={18}
              style={{
                color: active ? C.ndvi : C.ink,
                opacity: active ? 1 : 0.5,
              }}
            />
            <span
              className="text-[9.5px] leading-none"
              style={{
                color: active ? C.ndvi : C.ink,
                opacity: active ? 1 : 0,
                fontWeight: 600,
                maxWidth: 60,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {active ? n.label.split(" ")[0] : ""}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
