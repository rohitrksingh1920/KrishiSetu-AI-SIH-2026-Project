import React from "react";
import { X, Check, Minus, CircleDot } from "lucide-react";
import { C } from "../../theme/tokens.js";
import {
  psInfo,
  comparisonRows,
  competitors,
  feasibilityStats,
} from "../../data/pitchData.js";

function Cell({ value }) {
  if (value === true)
    return <Check size={15} style={{ color: C.ndvi }} className="mx-auto" />;
  if (value === false)
    return <Minus size={14} className="mx-auto opacity-30" />;
  return (
    <span
      className="ks-mono text-[10px] px-1.5 py-0.5 rounded"
      style={{ background: C.paperDeep }}
    >
      {value}
    </span>
  );
}

export default function AboutModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto ks-scroll"
      style={{ background: "rgba(19,42,69,0.55)" }}
      onClick={onClose}
    >
      <div
        className="ks-card rounded-xl w-full max-w-3xl my-6 ks-rise"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-start justify-between px-5 py-4"
          style={{ borderBottom: `1px solid ${C.line}` }}
        >
          <div>
            <div className="ks-mono text-[10.5px] uppercase tracking-wide opacity-55">
              {psInfo.hackathon}
            </div>
            <h2 className="ks-display text-[22px] font-semibold mt-0.5">
              KrishiSetu AI
            </h2>
            <div className="text-[12.5px] opacity-70 mt-1">
              PS {psInfo.psId} · {psInfo.psTitle} · {psInfo.theme} ·{" "}
              {psInfo.category} · Team {psInfo.teamName} ({psInfo.teamId})
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md shrink-0"
            style={{ background: C.paperDeep }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-5 space-y-6">
          <div>
            <h3 className="font-semibold text-[14.5px] mb-2">
              Why KrishiSetu, not another advisory app
            </h3>
            <div className="overflow-x-auto ks-scroll">
              <table
                className="w-full text-[12.5px] border-separate"
                style={{ borderSpacing: 0 }}
              >
                <thead>
                  <tr>
                    <th className="text-left px-2 py-1.5"></th>
                    {competitors.map((c) => (
                      <th
                        key={c.id}
                        className="px-2 py-1.5 text-center ks-mono text-[10.5px] uppercase tracking-wide"
                        style={{
                          color: c.highlight ? C.ndvi : "inherit",
                          opacity: c.highlight ? 1 : 0.6,
                        }}
                      >
                        {c.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r, i) => (
                    <tr
                      key={r.feature}
                      style={{
                        background: i % 2 ? "transparent" : `${C.paperDeep}55`,
                      }}
                    >
                      <td className="px-2 py-2 font-medium">{r.feature}</td>
                      <td
                        className="px-2 py-2 text-center"
                        style={{ background: `${C.ndvi}0F` }}
                      >
                        <Cell value={r.ks} />
                      </td>
                      <td className="px-2 py-2 text-center">
                        <Cell value={r.meghdoot} />
                      </td>
                      <td className="px-2 py-2 text-center">
                        <Cell value={r.kisan} />
                      </td>
                      <td className="px-2 py-2 text-center">
                        <Cell value={r.plantix} />
                      </td>
                      <td className="px-2 py-2 text-center">
                        <Cell value={r.npss} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[14.5px] mb-2">
              Feasibility, backed by PIB releases
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {feasibilityStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-md p-3 flex items-start gap-2.5"
                  style={{ background: C.paper, border: `1px solid ${C.line}` }}
                >
                  <CircleDot
                    size={13}
                    className="mt-0.5 shrink-0"
                    style={{ color: C.soil }}
                  />
                  <div>
                    <div
                      className="ks-display font-semibold text-[16px]"
                      style={{ color: C.monsoon }}
                    >
                      {s.stat}
                    </div>
                    <div className="text-[12px] opacity-70 leading-snug">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
