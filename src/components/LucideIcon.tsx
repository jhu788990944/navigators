import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  key?: any;
}

export default function LucideIcon({ name, className = "", size }: LucideIconProps) {
  // Safe dynamic lookup for Lucide icons
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];

  if (!IconComponent) {
    // Return a fallback icon (e.g. HelpCircle) if not found
    const Fallback = Icons.HelpCircle;
    return <Fallback className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
