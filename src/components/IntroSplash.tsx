import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { profile, videos } from "@/data/content";
import { VideoBackground } from "@/components/VideoBackground";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "dssr-intro-seen";
const nameWords = profile.fullName.toUpperCase().split(" ");

/**
 * Cinematic first-visit introduction. Shows once per browser session;
 * internal navigation never replays it.
 */
export function IntroSplash() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    document.body.style.overflow = "";
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-50 flex flex-col"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          role="dialog"
          aria-label="Introduction"
        >
          <VideoBackground
            src={videos.intro}
            overlayClassName="bg-[radial-gradient(ellipse_at_center,rgba(10,15,40,0.45),rgba(10,15,40,0.85))]"
          />

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.6875rem] font-bold tracking-[0.22em] text-white/90 uppercase backdrop-blur-sm"
            >
              Welcome
            </motion.span>

            <h1 className="mt-7 flex max-w-4xl flex-wrap justify-center gap-x-4 font-display text-[1.75rem] font-extrabold leading-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.12]">
              {nameWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 26, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.55 + i * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7 }}
              className="mt-6 max-w-xl text-base font-medium text-white/80 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.7 }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={dismiss}
                className={cn(buttonVariants({ size: "lg" }), "h-12 bg-white px-8 text-navy shadow-lift hover:bg-white/90")}
              >
                EXPLORE MY PORTFOLIO
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          <motion.button
            type="button"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="absolute bottom-6 right-6 z-10 rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-white/60 transition-colors hover:text-white"
          >
            Skip intro
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
