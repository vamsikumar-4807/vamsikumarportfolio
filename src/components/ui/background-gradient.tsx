import { cn } from "@/lib/utils";
import React from "react";

/**
 * BackgroundGradient — performance-optimised version.
 *
 * The original used framer-motion to animate backgroundPosition via JS on every
 * animation frame. With 15+ cards on the page that meant 30+ simultaneous
 * JS-driven animations on blurred elements — the biggest scroll-lag culprit.
 *
 * This version uses a pure CSS keyframe animation so the browser's compositor
 * thread handles it with zero JS overhead per frame.
 */
export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const gradientClass =
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]";

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      {/* Blurred glow layer — opacity only, no filter on animated element */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-50 group-hover:opacity-80 transition-opacity duration-500",
          animate && "bg-gradient-shift",
          "blur-lg",
          gradientClass
        )}
      />
      {/* Sharp border layer */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          animate && "bg-gradient-shift",
          gradientClass
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
