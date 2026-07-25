import { HeroCopy } from "./hero-copy";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section id="top" className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <HeroCopy />
      </div>
      <div className="lg:col-span-7">
        <HeroVisual />
      </div>
    </section>
  );
}
