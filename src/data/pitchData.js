export const psInfo = {
  hackathon: "Smart India Hackathon 2026",
  psId: "197",
  psTitle: "Student Innovation",
  theme: "Agriculture, FoodTech & Rural Development",
  category: "Software",
  teamId: "Sih26197",
  teamName: "GentEch",
};

// "true" = full support, "partial" = partial/basic support, false = not supported.
// Straight from the RESEARCH AND REFERENCES competitive table in the PPT.
export const comparisonRows = [
  {
    feature: "Plot-specific personalization",
    ks: true,
    meghdoot: false,
    kisan: false,
    plantix: false,
    npss: false,
  },
  {
    feature: "Weather-to-action alerts",
    ks: true,
    meghdoot: "partial",
    kisan: false,
    plantix: false,
    npss: "partial",
  },
  {
    feature: "Vernacular voice IVR",
    ks: true,
    meghdoot: false,
    kisan: "partial",
    plantix: false,
    npss: false,
  },
  {
    feature: "Insurance-ready damage report",
    ks: true,
    meghdoot: false,
    kisan: false,
    plantix: false,
    npss: false,
  },
  {
    feature: "Sugarcane ratoon planner",
    ks: true,
    meghdoot: false,
    kisan: false,
    plantix: false,
    npss: false,
  },
  {
    feature: "Confidence + sources + escalation",
    ks: true,
    meghdoot: false,
    kisan: false,
    plantix: false,
    npss: false,
  },
  {
    feature: "Multi-channel delivery",
    ks: true,
    meghdoot: "App only",
    kisan: "Chatbot",
    plantix: "App only",
    npss: "Portal",
  },
  {
    feature: "Offline access",
    ks: "partial",
    meghdoot: false,
    kisan: false,
    plantix: true,
    npss: false,
  },
];

export const competitors = [
  { id: "ks", label: "KrishiSetu AI", highlight: true },
  { id: "meghdoot", label: "Meghdoot" },
  { id: "kisan", label: "Kisan e-Mitra" },
  { id: "plantix", label: "Plantix" },
  { id: "npss", label: "NPSS Portal" },
];

// PIB-sourced feasibility facts, as cited in the PPT.
export const feasibilityStats = [
  {
    stat: "8.48 crore",
    label:
      "Farmer IDs generated under AgriStack; 28.5 crore plots surveyed (Kharif 2025)",
  },
  {
    stat: "93+ lakh",
    label:
      "Farmer queries answered by Kisan e-Mitra across 11 regional languages",
  },
  {
    stat: "30–50%",
    label:
      "Productivity gains reported in select AI-advisory deployments (AP & Maharashtra)",
  },
  {
    stat: "31–52%",
    label:
      "Of farmers adjusted sowing decisions using AI monsoon forecasts (Kharif 2025 pilot, 3.88cr farmers)",
  },
];

// The confidence-threshold escalation logic from the TECHNICAL APPROACH / FEASIBILITY slides.
export const validationPipeline = {
  trigger: "Farmer query or scheduled trigger",
  engine: "AI Decision Engine",
  branches: [
    {
      id: "auto",
      label: "Confidence > 85%",
      result: "Automated briefing",
      tone: "ndvi",
    },
    {
      id: "escalate",
      label: "Confidence ≤ 85%",
      result: "KVK expert escalation → expert review & resolution",
      tone: "alert",
    },
  ],
  outcome: "Validated briefing delivery",
  feedback:
    "KVK resolutions feed back as retraining data — human-in-the-loop by design.",
};

// Integration status table from the TECHNICAL APPROACH slide.
export const dataSources = [
  { name: "IMD Weather API", status: "Public / Live", tone: "ndvi" },
  { name: "Bhashini API", status: "Government API", tone: "ndvi" },
  { name: "Copernicus Sentinel-2", status: "Public", tone: "turmeric" },
  { name: "AgriStack / UFSI", status: "Demo Profile", tone: "soil" },
  { name: "Soil Health Card", status: "Demo Values", tone: "soil" },
  { name: "PMFBY", status: "Report Only", tone: "neutral" },
];
