import React, { useState } from "react";
import { C } from "./theme/tokens.js";
import Header from "./components/layout/Header.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import MobileNav from "./components/layout/MobileNav.jsx";
import OfficerApp from "./components/officer/OfficerApp.jsx";
import AboutModal from "./components/common/AboutModal.jsx";
import BriefingView from "./components/farmer/BriefingView.jsx";
import PlotView from "./components/farmer/PlotView.jsx";
import PlannerView from "./components/farmer/PlannerView.jsx";
import DiagnoseView from "./components/farmer/DiagnoseView.jsx";
import ClaimView from "./components/farmer/ClaimView.jsx";
import ChannelsView from "./components/farmer/ChannelsView.jsx";

export default function App() {
  const [role, setRole] = useState("farmer");
  const [lang, setLang] = useState("en");
  const [tab, setTab] = useState("home");
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="ks-root w-full min-h-screen flex flex-col" style={{ background: C.paper }}>
      <Header role={role} setRole={setRole} lang={lang} setLang={setLang} onInfoClick={() => setShowAbout(true)} />
      <AboutModal open={showAbout} onClose={() => setShowAbout(false)} />

      {role === "officer" ? (
        <OfficerApp />
      ) : (
        <div className="flex-1 flex min-h-0">
          <Sidebar tab={tab} setTab={setTab} />
          <main className="flex-1 min-w-0 overflow-y-auto ks-scroll p-5 sm:p-8 ks-texture">
            {tab === "home" && <BriefingView lang={lang} />}
            {tab === "plot" && <PlotView lang={lang} />}
            {tab === "planner" && <PlannerView lang={lang} />}
            {tab === "diagnose" && <DiagnoseView lang={lang} />}
            {tab === "claim" && <ClaimView lang={lang} />}
            {tab === "channels" && <ChannelsView lang={lang} />}
          </main>
        </div>
      )}

      {role === "farmer" && <MobileNav tab={tab} setTab={setTab} />}
    </div>
  );
}
