"use client";

import { useMemo, useState } from "react";

export function SafeImage({
  src,
  alt,
  label,
  className,
  loading = "lazy"
}: {
  src?: string | null;
  alt?: string;
  label: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const [failed, setFailed] = useState(false);
  const usableSrc = src && src.trim() && !failed ? src : "";
  const initials = useMemo(() => buildInitials(label), [label]);

  if (!usableSrc) {
    return (
      <div className={`safe-art ${className || ""}`} aria-label={alt || label}>
        <span>{initials}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={usableSrc}
      alt={alt || ""}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}

function buildInitials(label: string) {
  const compact = label.replace(/\s+/g, "");
  return compact.slice(0, Math.min(4, compact.length || 1));
}
