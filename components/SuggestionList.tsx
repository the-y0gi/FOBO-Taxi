"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function SuggestionList({ results, onSelect }: any) {
  if (!results || results.length === 0) return null;

  return (
    <div className="bg-surface/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
      <div className="max-h-60 overflow-y-auto">
        {results.map((item: any, index: number) => {
          const displayName = item.display_name || "";
          const mainText = displayName.split(",")[0];
          const subText = displayName.split(",").slice(1).join(",").trim();

          return (
            <div
              key={index}
              onClick={() => onSelect(item)}
              className="flex items-center gap-3 p-3.5 cursor-pointer hover:bg-primary/5 transition-colors border-b border-border/50 last:border-0"
            >
              <div className="w-8 h-8 rounded-full bg-secondary-light/30 flex items-center justify-center text-primary shrink-0">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-sm text-muted-dark truncate">
                  {mainText}
                </span>
                <span className="text-xs text-muted truncate">
                  {subText}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}