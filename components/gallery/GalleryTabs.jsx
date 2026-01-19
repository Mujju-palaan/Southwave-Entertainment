"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryData from "@/app/data/GalleryData.json";

const TABS = [
  { key: "events", label: "Events" },
  { key: "clubbing", label: "Clubbing" },
  { key: "dj_concerts", label: "DJ Concerts" },
  { key: "south_indian_events", label: "South Indian Events" },
];

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Tabs Header */}
      <div className="flex flex-wrap justify-center gap-2 p-4">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-3 rounded-2xl transition-all cursor-pointer
              ${
                activeTab === tab.key
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted text-stone-700 hover:bg-accent"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-6xl p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GalleryData[activeTab].map((url, index) => (
            <div
              key={index}
              className="relative h-[200px] w-full overflow-hidden rounded-lg"
            >
              <Image
                src={url}
                alt={`${activeTab}-${index}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryTabs;
