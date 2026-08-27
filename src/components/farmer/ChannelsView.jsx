import React, { useState } from "react";
import { MessageCircle, Phone, PlayCircle } from "lucide-react";
import { C } from "../../theme/tokens.js";
import { T } from "../../data/translations.js";
import { ivrScript } from "../../data/mockData.js";
import SectionEyebrow from "../primitives/SectionEyebrow.jsx";

export default function ChannelsView({ lang }) {
  const t = T[lang];
  const [step, setStep] = useState(-1);

  const play = () => {
    setStep(0);
    ivrScript.forEach((_, i) => setTimeout(() => setStep(i), i * 900));
  };

  return (
    <div className="ks-rise">
      <SectionEyebrow>{t.channelsEyebrow}</SectionEyebrow>
      <h1 className="ks-display text-[26px] font-semibold mb-4">
        {t.channelsTitle}
      </h1>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="ks-card rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle size={16} style={{ color: C.ndvi }} />
            <h3 className="font-semibold text-[14.5px]">WhatsApp alerts</h3>
          </div>
          <div
            className="rounded-lg p-3 space-y-2"
            style={{ background: "#E9E3CC" }}
          >
            <div
              className="rounded-lg rounded-tl-none px-3 py-2 text-[13px] max-w-[85%]"
              style={{ background: C.card }}
            >
              KrishiSetu weekly briefing: Zinc dosage due before Thu · Rain 68%
              Thu · Drainage check advised.
              <div className="ks-mono text-[10px] opacity-50 mt-1 text-right">
                9:02 AM ✓✓
              </div>
            </div>
            <div
              className="rounded-lg rounded-tl-none px-3 py-2 text-[13px] max-w-[85%]"
              style={{ background: C.card }}
            >
              ⚠️ Rain in 24h: do not spray, check drainage, delay irrigation on
              Row 4.
              <div className="ks-mono text-[10px] opacity-50 mt-1 text-right">
                Wed 6:40 PM ✓✓
              </div>
            </div>
          </div>
          <p className="text-[11.5px] opacity-55 mt-2">
            Text-only in this build. Image diagnosis stays in the web app.
          </p>
        </div>

        <div className="ks-card rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Phone size={16} style={{ color: C.monsoon }} />
              <h3 className="font-semibold text-[14.5px]">
                IVR hotline · 1800-XXX-XXXX
              </h3>
            </div>
            <button
              onClick={play}
              className="flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1.5 rounded-md"
              style={{ background: `${C.monsoon}14`, color: C.monsoon }}
            >
              <PlayCircle size={14} /> Simulate call
            </button>
          </div>
          <div
            className="rounded-md p-3 space-y-2 h-56 overflow-y-auto ks-scroll"
            style={{ background: C.paper }}
          >
            {ivrScript.map(
              (l, i) =>
                i <= step && (
                  <div key={i} className="text-[12.5px] ks-rise">
                    <span
                      className="ks-mono text-[10px] uppercase tracking-wide mr-1.5"
                      style={{
                        color:
                          l.spk === "Farmer"
                            ? C.soil
                            : l.spk === "System"
                              ? C.alert
                              : C.monsoon,
                      }}
                    >
                      {l.spk}
                    </span>
                    {l[lang]}
                  </div>
                ),
            )}
            {step < 0 && (
              <div className="text-[12.5px] opacity-45">
                Press "Simulate call" to play a Bhashini-routed IVR session.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
