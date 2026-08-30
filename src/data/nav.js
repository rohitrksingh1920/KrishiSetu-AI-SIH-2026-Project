import {
  Home,
  MapPin,
  Sprout,
  Camera,
  FileText,
  MessageCircle,
  BarChart3,
  Users,
  AlertTriangle,
  ClipboardList,
  Satellite,
} from "lucide-react";

export const farmerNav = [
  { id: "home", label: "Weekly Briefing", icon: Home },
  { id: "plot", label: "My Plot", icon: MapPin },
  { id: "planner", label: "Crop & Ratoon", icon: Sprout },
  { id: "diagnose", label: "Diagnose", icon: Camera },
  { id: "claim", label: "Insurance Evidence", icon: FileText },
  { id: "channels", label: "WhatsApp & IVR", icon: MessageCircle },
];

export const officerNav = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "farmers", label: "Farmers & plots", icon: Users },
  { id: "escalations", label: "Escalations", icon: AlertTriangle },
  { id: "claims", label: "Claim reports", icon: ClipboardList },
  { id: "system", label: "System status", icon: Satellite },
];
