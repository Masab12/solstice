import { site } from "@/content/site";

export function Wordmark() {
  return (
    <span className="font-brand text-[22px] font-extrabold tracking-tight text-black">
      {site.wordmark}
    </span>
  );
}
