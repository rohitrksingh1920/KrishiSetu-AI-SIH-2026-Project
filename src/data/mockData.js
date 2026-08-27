import { Droplets, CloudRain, AlertTriangle, Sprout } from "lucide-react";
import { C } from "../theme/tokens.js";

export const actions = [
  {
    icon: Droplets,
    title: {
      en: "Apply zinc sulphate before Thursday",
      hi: "गुरुवार से पहले जिंक सल्फेट डालें",
    },
    why: {
      en: "Your Soil Health Card shows 0.4 ppm zinc — below the 0.6 ppm threshold for cane tillering.",
      hi: "आपके मृदा स्वास्थ्य कार्ड में जिंक 0.4 ppm है, जो गन्ने की कल्ले फूटने की अवस्था के लिए 0.6 ppm सीमा से कम है।",
    },
    sources: ["Soil Health Card", "ICAR Package of Practices"],
    confidence: 92,
    tone: C.ndvi,
  },
  {
    icon: CloudRain,
    title: {
      en: "Do not spray Tue–Wed, rain expected Thursday",
      hi: "मंगल-बुध छिड़काव न करें, गुरुवार बारिश संभावित",
    },
    why: {
      en: "IMD nowcast shows 68% chance of 22mm rain Thursday. Spraying now would wash off before absorption.",
      hi: "IMD पूर्वानुमान अनुसार गुरुवार को 22मिमी बारिश की 68% संभावना है। अभी छिड़काव बारिश में बह सकता है।",
    },
    sources: ["IMD Nowcast"],
    confidence: 88,
    tone: C.monsoon,
  },
  {
    icon: AlertTriangle,
    title: {
      en: "Clear field drainage channels before Thursday",
      hi: "गुरुवार से पहले खेत की नालियां साफ करें",
    },
    why: {
      en: "Deterministic weather-to-action rule: rainfall above 20mm on ratoon fields triggers a drainage check.",
      hi: "नियम इंजन: ठूंठ खेतों में 20मिमी से अधिक बारिश पर नाली जांच अनिवार्य है।",
    },
    sources: ["Rule Engine"],
    confidence: 95,
    tone: C.soil,
  },
  {
    icon: Sprout,
    title: {
      en: "Row 4 regrowth is lagging — plan gap filling in 10 days",
      hi: "पंक्ति 4 में पुनर्विकास कम — 10 दिनों में गैप फिलिंग करें",
    },
    why: {
      en: "Sentinel-2 NDVI trend for Row 4 sits 18% below the healthy ratoon curve for this stage.",
      hi: "पंक्ति 4 का NDVI रुझान इस अवस्था के स्वस्थ वक्र से 18% कम है।",
    },
    sources: ["Sentinel-2 NDVI", "Ratoon Planner"],
    confidence: 74,
    tone: C.turmeric,
  },
];

export const ratoonCurve = [
  { day: "D10", ndvi: 0.21 },
  { day: "D25", ndvi: 0.34 },
  { day: "D40", ndvi: 0.48 },
  { day: "D55", ndvi: 0.56 },
  { day: "D70", ndvi: 0.6 },
  { day: "D85", ndvi: 0.63 },
  { day: "D96", ndvi: 0.61 },
];

export const rainWindow = [
  { d: "18 Aug", mm: 4 },
  { d: "19 Aug", mm: 6 },
  { d: "20 Aug", mm: 38 },
  { d: "21 Aug", mm: 52 },
  { d: "22 Aug", mm: 12 },
  { d: "23 Aug", mm: 3 },
];

export const stages = [
  "Planting",
  "Germination",
  "Tillering",
  "Grand growth",
  "Maturity",
  "Harvest",
];

export const farmers = [
  {
    id: "GGN-114",
    name: "Ram Kumar",
    village: "Sohna",
    crop: "Sugarcane",
    last: "2 hrs ago",
    status: "Briefed",
  },
  {
    id: "GGN-088",
    name: "Suresh Yadav",
    village: "Bhondsi",
    crop: "Wheat",
    last: "1 day ago",
    status: "Briefed",
  },
  {
    id: "GGN-201",
    name: "Meena Devi",
    village: "Sohna",
    crop: "Mustard",
    last: "3 days ago",
    status: "Escalated",
  },
  {
    id: "GGN-042",
    name: "Iqbal Khan",
    village: "Rewasan",
    crop: "Sugarcane",
    last: "5 hrs ago",
    status: "Briefed",
  },
  {
    id: "GGN-176",
    name: "Pooja Sharma",
    village: "Bhondsi",
    crop: "Bajra",
    last: "4 days ago",
    status: "Offline cache",
  },
];

export const escalations = [
  {
    id: "ESC-3391",
    farmer: "Meena Devi",
    issue: "Mustard leaf curl, low vision-model confidence (44%)",
    channel: "IVR",
    sla: "6h left",
  },
  {
    id: "ESC-3388",
    farmer: "Iqbal Khan",
    issue: "Ratoon gap > 20%, requested KVK visit",
    channel: "Web",
    sla: "1d left",
  },
  {
    id: "ESC-3379",
    farmer: "Ram Kumar",
    issue: "Zinc dosage query beyond canonical rule scope",
    channel: "WhatsApp",
    sla: "Closed",
  },
];

export const claims = [
  {
    id: "CLM-1042",
    farmer: "Meena Devi",
    cause: "Waterlogging",
    status: "Generated",
    ndviDrop: "31%",
  },
  {
    id: "CLM-1039",
    farmer: "Suresh Yadav",
    cause: "Hailstorm",
    status: "Sent to farmer",
    ndviDrop: "44%",
  },
  {
    id: "CLM-1031",
    farmer: "Ram Kumar",
    cause: "Pest stress",
    status: "Draft",
    ndviDrop: "9%",
  },
];

export const ivrScript = [
  {
    spk: "IVR",
    en: "Namaste. Press 1 for Hindi, 2 for English.",
    hi: "नमस्ते। हिंदी के लिए 1, अंग्रेज़ी के लिए 2 दबाएं।",
  },
  { spk: "Farmer", en: "[Presses 1]", hi: "[1 दबाया]" },
  {
    spk: "IVR",
    en: "Your weekly briefing: apply zinc before Thursday. Do not spray Tuesday–Wednesday.",
    hi: "आपकी साप्ताहिक सलाह: गुरुवार से पहले जिंक डालें। मंगल-बुध छिड़काव न करें।",
  },
  {
    spk: "Farmer",
    en: "How much zinc sulphate per acre?",
    hi: "प्रति एकड़ कितना जिंक सल्फेट?",
  },
  {
    spk: "IVR",
    en: "Based on your Soil Health Card, apply 25kg/acre. This is a general guideline — connecting you to KVK Sohna for exact dosage.",
    hi: "आपके मृदा कार्ड अनुसार 25 किग्रा/एकड़। सटीक मात्रा हेतु KVK सोहना से जोड़ रहे हैं।",
  },
  {
    spk: "System",
    en: "Escalation ticket ESC-3402 created.",
    hi: "एस्केलेशन टिकट ESC-3402 बनाया गया।",
  },
];
