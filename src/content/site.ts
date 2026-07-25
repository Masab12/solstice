export const site = {
  name: "Solstice",
  wordmark: "Solstice.",
  tagline: "The direct booking engine for independent hotels",
  description:
    "Solstice turns your own website into your best performing channel, with a booking flow guests finish and rates that never undercut you.",
  url: "https://solstice.example.com",
} as const;

export const navigation = [
  { label: "Rooms", href: "#rooms" },
  { label: "Booking", href: "#booking" },
  { label: "Revenue", href: "#revenue" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const headerCta = { label: "Get a demo", href: "#demo" } as const;

export const hero = {
  eyebrow: {
    prefix: "Trusted by",
    highlight: "640+ independent hotels",
    suffix: "in 28 countries",
  },
  headline: ["Own every", "direct booking."],
  body:
    "A booking flow guests finish on the first try, rates that never undercut your own site, and a calendar your front desk can read at a glance.",
  primaryCta: { label: "Book a walkthrough", href: "#walkthrough" },
  secondaryCta: { label: "Watch the flow", href: "#flow" },
} as const;

export const partnersLabel = "Filling rooms for";

export const partners = [
  "Hotel Marisol",
  "The Aldgate Rooms",
  "Casa Verano",
  "Fjordhus Lodge",
  "Villa Serrata",
] as const;

export const proofAvatars = [
  { initials: "IM", from: "#c2410c", to: "#f97316" },
  { initials: "TB", from: "#9a3412", to: "#ea580c" },
  { initials: "NK", from: "#0f766e", to: "#14b8a6" },
  { initials: "CE", from: "#3730a3", to: "#6366f1" },
] as const;

export type DayState = "open" | "booked" | "peak";

export type CalendarDay = {
  day: number;
  rate: number;
  state: DayState;
};

export const calendar: readonly CalendarDay[] = [
  { day: 8, rate: 180, state: "open" },
  { day: 9, rate: 180, state: "booked" },
  { day: 10, rate: 195, state: "booked" },
  { day: 11, rate: 195, state: "open" },
  { day: 12, rate: 240, state: "peak" },
  { day: 13, rate: 265, state: "peak" },
  { day: 14, rate: 240, state: "booked" },
  { day: 15, rate: 185, state: "open" },
  { day: 16, rate: 185, state: "booked" },
  { day: 17, rate: 190, state: "booked" },
  { day: 18, rate: 190, state: "booked" },
  { day: 19, rate: 250, state: "peak" },
  { day: 20, rate: 275, state: "peak" },
  { day: 21, rate: 250, state: "open" },
] as const;

export const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export const revenueStats = [
  { label: "Average rate", value: "212" },
  { label: "Occupancy", value: "92%" },
  { label: "Direct share", value: "64%" },
] as const;
