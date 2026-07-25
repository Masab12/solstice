import { calendar, revenueStats, weekdays } from "@/content/site";
import type { DayState } from "@/content/site";

const cellStyles: Record<DayState, string> = {
  open: "border-black/5 bg-white/70 text-neutral-500",
  booked: "border-brand-200 bg-brand-50 text-brand-700",
  peak: "border-transparent bg-gradient-to-br from-brand-500 to-brand-600 text-white",
};

export function RatePanel() {
  return (
    <div className="glass-surface w-full max-w-[600px] rounded-[24px] p-6 shadow-[0_28px_70px_-30px_rgba(194,65,12,0.45)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="beacon absolute inline-flex h-full w-full rounded-full bg-brand-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
          </span>
          <span className="text-[12px] font-semibold tracking-tight text-neutral-900">
            Hotel Marisol, Palma
          </span>
        </div>
        <span className="rounded-full border border-black/5 bg-black/[0.04] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-500 uppercase">
          September
        </span>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-1.5">
        {weekdays.map((weekday) => (
          <span
            key={weekday}
            className="pb-1 text-center text-[10px] font-semibold tracking-wide text-neutral-400 uppercase"
          >
            {weekday}
          </span>
        ))}

        {calendar.map((entry, index) => (
          <div
            key={entry.day}
            style={{ animationDelay: `${0.35 + index * 0.03}s` }}
            className={`cell-in flex flex-col items-center justify-center rounded-[12px] border py-2 ${cellStyles[entry.state]}`}
          >
            <span className="text-[12px] font-bold tabular-nums">{entry.day}</span>
            <span className="mt-0.5 text-[10px] font-semibold tabular-nums opacity-80">
              {entry.rate}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium text-neutral-500">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full border border-black/10 bg-white" />
          Open
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand-200" />
          Booked
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand-500" />
          High demand
        </span>
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-black/5 pt-5">
        {revenueStats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-[11px] font-medium text-neutral-500">{stat.label}</dt>
            <dd className="mt-1 text-[17px] font-bold tracking-tight text-neutral-900 tabular-nums">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
