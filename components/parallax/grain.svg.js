export default function Grain() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
      <filter id="noise" x="0" y="0">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect width="10000" height="10000" filter="url(#noise)" opacity="0.5" />
    </svg>
  )
}
