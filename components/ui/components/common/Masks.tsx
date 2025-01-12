export function Masks() {
  return (
    <svg width={0} height={0} style={{ position: "fixed" }}>
      <defs>
        <mask id="holepunch-top-right">
          <rect x="0" y="0" width="32" height="32" fill="white" />
          <circle cx="27" cy="5" r="7" fill={"black"} />
        </mask>
        <mask id="holepunch-bottom-right">
          <rect x="0" y="0" width="32" height="32" fill="white" />
          <circle cx="27" cy="27" r="7" fill={"black"} />
        </mask>
        <mask id="holepunch-right">
          <rect x="0" y="0" width="32" height="32" fill="white" />
          <circle cx="27" cy="5" r="7" fill={"black"} />
          <circle cx="27" cy="27" r="7" fill={"black"} />
        </mask>
      </defs>
    </svg>
  );
}
