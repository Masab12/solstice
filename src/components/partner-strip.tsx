import { partners, partnersLabel } from "@/content/site";

export function PartnerStrip() {
  return (
    <section id="rooms" className="mt-24 pb-24">
      <p className="text-center text-[12px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
        {partnersLabel}
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {partners.map((partner) => (
          <li key={partner}>
            <div className="group glass-panel flex h-16 items-center justify-center rounded-[16px] px-4 transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02]">
              <span className="text-center text-[13px] font-semibold tracking-tight text-neutral-500 transition-colors group-hover:text-neutral-900">
                {partner}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
