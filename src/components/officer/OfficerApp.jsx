import React, { useState } from "react";
import { AlertTriangle, Satellite, Building2, Wifi } from "lucide-react";
import { C } from "../../theme/tokens.js";
import { officerNav } from "../../data/nav.js";
import { farmers, escalations, claims } from "../../data/mockData.js";
import SectionEyebrow from "../primitives/SectionEyebrow.jsx";
import SourceChip from "../primitives/SourceChip.jsx";

export default function OfficerApp() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="flex-1 flex min-h-0">
      <aside className="hidden md:flex flex-col w-56 shrink-0 py-4 px-3 gap-1" style={{ background: C.monsoonDeep, color: C.paper }}>
        {officerNav.map((n) => {
          const Icon = n.icon;
          const active = tab === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setTab(n.id)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] text-left transition-colors"
              style={{ background: active ? "rgba(217,164,4,0.18)" : "transparent", color: active ? C.turmeric : C.paper }}
            >
              <Icon size={15} /> {n.label}
            </button>
          );
        })}
      </aside>

      <main className="flex-1 min-w-0 overflow-y-auto ks-scroll p-5 sm:p-8">
        {tab === "overview" && (
          <div className="ks-rise">
            <SectionEyebrow>District: Gurugram · Block: Sohna</SectionEyebrow>
            <h1 className="ks-display text-[26px] font-semibold mb-4">Officer Overview</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                ["1,204", "Registered farmers"],
                ["1,180", "Active plots"],
                ["7", "Open escalations"],
                ["12", "Claim reports this month"],
                ["3,420", "Alerts sent this week"],
              ].map(([n, l]) => (
                <div key={l} className="ks-card rounded-lg p-4">
                  <div className="ks-display text-[26px] font-semibold" style={{ color: C.monsoon }}>
                    {n}
                  </div>
                  <div className="text-[12px] opacity-65 mt-1">{l}</div>
                </div>
              ))}
            </div>
            <p className="text-[12px] opacity-55 mt-4 max-w-md">
              All figures aggregated and anonymized — no individual farmer records shown outside authenticated officer
              sessions.
            </p>
          </div>
        )}

        {tab === "farmers" && (
          <div className="ks-rise">
            <h1 className="ks-display text-[24px] font-semibold mb-4">Farmers &amp; plots</h1>
            <div className="ks-card rounded-lg overflow-hidden">
              <table className="w-full text-[13px]">
                <thead>
                  <tr style={{ background: C.paperDeep }}>
                    {["Plot ID", "Farmer", "Village", "Crop", "Last briefing", "Status"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 ks-mono text-[10.5px] uppercase tracking-wide opacity-70">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {farmers.map((f) => (
                    <tr key={f.id} style={{ borderTop: `1px solid ${C.line}` }}>
                      <td className="px-3 py-2 ks-mono">{f.id}</td>
                      <td className="px-3 py-2 font-medium">{f.name}</td>
                      <td className="px-3 py-2 opacity-75">{f.village}</td>
                      <td className="px-3 py-2 opacity-75">{f.crop}</td>
                      <td className="px-3 py-2 opacity-75">{f.last}</td>
                      <td className="px-3 py-2">
                        <span
                          className="text-[11px] px-2 py-0.5 rounded-full"
                          style={{
                            background: f.status === "Escalated" ? `${C.alert}1A` : f.status === "Offline cache" ? `${C.soil}1A` : `${C.ndvi}1A`,
                            color: f.status === "Escalated" ? C.alert : f.status === "Offline cache" ? C.soil : C.ndvi,
                          }}
                        >
                          {f.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "escalations" && (
          <div className="ks-rise">
            <h1 className="ks-display text-[24px] font-semibold mb-4">Escalations</h1>
            <div className="grid gap-2.5">
              {escalations.map((e) => (
                <div key={e.id} className="ks-card rounded-lg p-3.5 flex items-center gap-3">
                  <AlertTriangle size={16} style={{ color: e.sla === "Closed" ? C.ndvi : C.alert }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium">
                      {e.farmer} <span className="opacity-50 ks-mono text-[11px]">· {e.id}</span>
                    </div>
                    <div className="text-[12.5px] opacity-70">{e.issue}</div>
                  </div>
                  <SourceChip label={e.channel} />
                  <div className="ks-mono text-[11.5px] w-16 text-right" style={{ color: e.sla === "Closed" ? C.ndvi : C.alert }}>
                    {e.sla}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "claims" && (
          <div className="ks-rise">
            <h1 className="ks-display text-[24px] font-semibold mb-4">Claim reports</h1>
            <div className="grid sm:grid-cols-3 gap-3">
              {claims.map((c) => (
                <div key={c.id} className="ks-card rounded-lg p-4">
                  <div className="ks-mono text-[11px] opacity-55">{c.id}</div>
                  <div className="font-semibold text-[14px] mt-0.5">{c.farmer}</div>
                  <div className="text-[12.5px] opacity-70 mt-0.5">{c.cause}</div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: `${C.monsoon}14`, color: C.monsoon }}>
                      {c.status}
                    </span>
                    <span className="ks-mono text-[11px]" style={{ color: C.alert }}>
                      NDVI {c.ndviDrop}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "system" && (
          <div className="ks-rise">
            <h1 className="ks-display text-[24px] font-semibold mb-4">System status</h1>
            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
              {[
                ["IMD weather API", "Live", C.ndvi, Wifi],
                ["Bhashini STT/TTS", "Live", C.ndvi, Wifi],
                ["Sentinel-2 NDVI", "Cached · 6h old", C.turmeric, Satellite],
                ["AgriStack / UFSI", "Demo mode", C.soil, Building2],
              ].map(([name, status, tone, Icon]) => (
                <div key={name} className="ks-card rounded-lg p-3.5 flex items-center gap-3">
                  <Icon size={16} style={{ color: tone }} />
                  <div className="flex-1">
                    <div className="text-[13px] font-medium">{name}</div>
                  </div>
                  <span className="ks-mono text-[11.5px]" style={{ color: tone }}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
