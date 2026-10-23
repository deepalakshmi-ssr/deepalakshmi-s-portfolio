import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type VideoBackgroundProps = {
  src: string;
  poster?: string;
  overlayClassName?: string;
  className?: string;
};

/**
 * Cinematic looping background video.
 * Falls back to the poster image when the video cannot load and shows a
 * static poster for visitors who prefer reduced motion.
 */
export function VideoBackground({ src, poster, overlayClassName, className }: VideoBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const showPoster = prefersReducedMotion || failed || !src;

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {showPoster && poster ? (
        <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        />
      )}
      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
