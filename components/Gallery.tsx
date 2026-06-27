"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import Image from "next/image";

const images = [
  "/images/Wedding1.png",
  "/images/Wedding2.png",
  "/images/Wedding3.png",
  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#faf7f2]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Bell Tents
          </h2>
          <p className="text-gray-600">
            Click any image to view full size
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelected(src)}
              className="overflow-hidden rounded-2xl cursor-pointer group"
            >
<Image
  src={src}
  alt={`Gallery ${i}`}
  width={800}
  height={600}
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
/>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox src={selected} onClose={() => setSelected(null)} />
    </section>
  );
}