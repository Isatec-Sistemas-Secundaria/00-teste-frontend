interface IsatecLogoProps {
  size?: number;
}

export function IsatecLogo({ size = 64 }: IsatecLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Isatec logo"
    >
      {/* Blue circle — visible only in light mode */}
      <circle cx="32" cy="32" r="32" className="fill-primary dark:fill-transparent" />

      {/* Circle outline — visible only in dark mode */}
      <circle
        cx="32"
        cy="32"
        r="30.5"
        className="stroke-transparent dark:stroke-white"
        strokeWidth="1.5"
      />

      {/* Icon: stylised diagonal bars (Isatec mark) */}
      <g transform="rotate(-35 32 32)">
        <rect x="28" y="10" width="8" height="22" rx="3" fill="white" />
        <rect x="28" y="36" width="8" height="8" rx="2" fill="white" opacity="0.55" />
      </g>
      <g transform="rotate(10 32 32)">
        <rect x="28" y="14" width="5" height="18" rx="2.5" fill="white" opacity="0.75" />
      </g>
    </svg>
  );
}
