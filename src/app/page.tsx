import { AmbientBackdrop } from "@/components/ambient-backdrop";
import { Hero } from "@/components/hero";
import { PartnerStrip } from "@/components/partner-strip";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <AmbientBackdrop />
      <SiteHeader />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-[128px] sm:px-12 lg:px-20 lg:pt-[150px]">
        <Hero />
        <PartnerStrip />
      </div>
    </main>
  );
}
