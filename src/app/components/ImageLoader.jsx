"use client";

import { useState, useEffect } from "react";

// List of all images to preload from public folder
const IMAGES_TO_PRELOAD = [
  "/activitykid.png",
  "/adminhero.png",
  "/chess.png",
  "/dance.png",
  "/file.svg",
  "/gensis.jpeg",
  "/gensis1.jpeg",
  "/globe.svg",
  "/hero1.png",
  "/karate.png",
  "/logo.jpeg",
  "/narayana1.jpeg",
  "/narayana2.jpeg",
  "/next.svg",
  "/nextzen.jpeg",
  "/renowedhero.png",
  "/saitechno.jpeg",
  "/school.jpg",
  "/window.svg",
  // Gallery images
  "/gallery/annual-day-banner.jpg",
  "/gallery/field-trip.jpg",
  "/gallery/play-area-1.jpg",
  "/gallery/play-area-2.jpg",
  "/gallery/play-area-3.jpg",
  "/gallery/play-area-4.jpg",
  "/gallery/play-area-5.jpg",
  "/gallery/sports-day-1.jpg",
  "/gallery/sports-day-2.jpg",
  "/gallery/zoo-visit.jpg",
  // Infrastructure images
  "/infra/classroom1.png",
];

export default function ImageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    const MIN_LOAD_TIME = 3000; // 3 seconds minimum
    let loadStartTime = Date.now();

    const preloadImages = () => {
      const imagePromises = IMAGES_TO_PRELOAD.map((imagePath) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedCount += 1;
            resolve();
          };
          img.onerror = () => {
            loadedCount += 1;
            resolve(); // Still resolve on error to avoid blocking
          };
          img.src = imagePath;
        });
      });

      Promise.all(imagePromises).then(() => {
        const elapsedTime = Date.now() - loadStartTime;
        const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsedTime);
        
        setTimeout(() => setIsLoading(false), remainingTime);
      });
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "white",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "4px solid rgba(0, 0, 0, 0.1)",
            borderTop: "4px solid #667eea",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "24px",
          }}
        />

        <p
          style={{
            fontSize: "18px",
            fontWeight: 900,
            color: "#1e1b4b",
            margin: 0,
            letterSpacing: "0.5px",
            fontFamily: "'Baloo 2', cursive",
          }}
        >
          Little Berries
        </p>

        <style>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
