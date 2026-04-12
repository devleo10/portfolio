/**
 * Fixed static “glitch” backdrop: scanlines, chromatic offset, sparse bands, fine noise.
 * No animation — reads as frozen digital static.
 */
export default function PageBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <svg className="absolute h-0 w-0" aria-hidden>
        <defs>
          <filter
            id="glitch-noise-static"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.82"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Soft depth (keeps page readable) */}
      <div className="absolute -left-[20%] top-[-10%] h-[min(50vh,420px)] w-[min(80vw,520px)] rounded-full bg-foreground/[0.03] blur-[80px] dark:bg-foreground/[0.05]" />
      <div className="absolute -right-[15%] top-[35%] h-[min(42vh,360px)] w-[min(65vw,480px)] rounded-full bg-primary/[0.04] blur-[88px] dark:bg-primary/[0.07]" />

      {/* CRT-style horizontal scanlines */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-multiply dark:opacity-[0.11] dark:mix-blend-soft-light"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(0,0,0,0.12) 1px,
            rgba(0,0,0,0.12) 2px
          )`,
        }}
      />
      <div
        className="absolute inset-0 hidden opacity-[0.07] mix-blend-overlay dark:block"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(255,255,255,0.09) 1px,
            rgba(255,255,255,0.09) 2px
          )`,
        }}
      />

      {/* Static “slice” bands (sparse horizontal glitches) */}
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 56px,
            rgba(0, 200, 255, 0.06) 56px,
            rgba(0, 200, 255, 0.06) 57px,
            transparent 57px,
            transparent 140px,
            rgba(255, 0, 110, 0.05) 140px,
            rgba(255, 0, 110, 0.05) 141px,
            transparent 141px,
            transparent 220px,
            rgba(200, 200, 255, 0.04) 220px,
            rgba(200, 200, 255, 0.04) 221px,
            transparent 221px
          )`,
        }}
      />

      {/* Chromatic split (static offset layers) */}
      <div className="absolute inset-0 translate-x-[1px] bg-fuchsia-500/[0.035] mix-blend-soft-light dark:bg-fuchsia-400/[0.06]" />
      <div className="absolute inset-0 -translate-x-[1px] bg-cyan-500/[0.035] mix-blend-soft-light dark:bg-cyan-400/[0.06]" />

      {/* Vertical tear lines */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 180px,
            rgba(255,255,255,0.04) 180px,
            rgba(255,255,255,0.04) 181px,
            transparent 181px,
            transparent 420px,
            rgba(0,0,0,0.06) 420px,
            rgba(0,0,0,0.06) 421px,
            transparent 421px
          )`,
        }}
      />

      {/* TV static grain (SVG noise) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22] mix-blend-overlay dark:opacity-[0.18] dark:mix-blend-soft-light"
        preserveAspectRatio="none"
        aria-hidden
      >
        <rect width="100%" height="100%" filter="url(#glitch-noise-static)" />
      </svg>

      {/* Vignette so edges stay calm */}
      <div
        className="absolute inset-0 opacity-[0.88]"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 50% 45%, transparent 38%, var(--background) 100%)',
        }}
      />
    </div>
  )
}
