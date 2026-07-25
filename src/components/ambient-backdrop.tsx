export function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-28 left-[10%] h-[520px] w-[520px] rounded-full bg-[#fdba74]/25 blur-[120px]" />
      <div className="absolute top-[16%] right-[-6%] h-[470px] w-[470px] rounded-full bg-[#fb923c]/20 blur-[110px]" />
      <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[400px] rounded-full bg-[#fdba74]/15 blur-[100px]" />
    </div>
  );
}
