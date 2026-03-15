import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Balcony Solar Guides — Everything You Need to Know",
  description:
    "Browse our complete library of UK balcony solar guides. From beginner introductions to G98 notification, smart tariffs, battery storage, and installation walkthroughs.",
};

const guides = [
  {
    emoji: "☀️",
    title: "Beginner's Guide to Balcony Solar",
    description:
      "New to plug-in solar? Start here. We cover how balcony solar works, what it costs, realistic savings, and what to consider before buying your first system.",
    href: "/guides/beginners-guide-to-balcony-solar",
  },
  {
    emoji: "🏠",
    title: "Balcony Solar for Renters",
    description:
      "Renting a flat or house? Find out how to get balcony solar working for you, including landlord permissions, portable systems, and what the Renters' Rights Act 2025 means for you.",
    href: "/guides/balcony-solar-for-renters",
  },
  {
    emoji: "⚖️",
    title: "Is Balcony Solar Legal in the UK?",
    description:
      "The legal picture has been shifting fast. We explain the current status, what changed in March 2026, G98 requirements, and what you actually need to do to stay compliant.",
    href: "/guides/is-balcony-solar-legal-uk",
  },
  {
    emoji: "🔩",
    title: "How to Mount Balcony Solar Panels",
    description:
      "Railing mounts, wall brackets, floor stands, Juliet balconies — we cover every mounting option with pros, cons, tilt angle advice, and wind safety guidance.",
    href: "/guides/how-to-mount-balcony-solar-panels",
  },
  {
    emoji: "🔋",
    title: "Battery Storage for Balcony Solar",
    description:
      "Adding a battery can push your self-consumption from 30% to over 80%. Find out which systems support batteries, what they cost, and whether the numbers stack up.",
    href: "/guides/balcony-solar-battery-storage",
  },
  {
    emoji: "⚡",
    title: "Smart Tariffs & Balcony Solar",
    description:
      "Octopus Agile, Flux, Intelligent Go — the right tariff can significantly improve your balcony solar returns. We compare the main options and explain the maths.",
    href: "/guides/balcony-solar-smart-tariffs",
  },
  {
    emoji: "💷",
    title: "How Much Can You Save?",
    description:
      "Detailed savings estimates by UK region and system size, a worked payback calculation, and practical tips to maximise your self-consumption throughout the day.",
    href: "/guides/balcony-solar-savings-uk",
  },
  {
    emoji: "📋",
    title: "G98 & DNO Notification",
    description:
      "Connecting generation to the grid requires notifying your Distribution Network Operator. We explain what G98 is, who your DNO is, and how to complete the process.",
    href: "/guides/g98-dno-notification-balcony-solar",
  },
  {
    emoji: "✉️",
    title: "Asking Your Landlord About Balcony Solar",
    description:
      "How to frame the conversation, what to put in writing, sample letter wording, and what to do if your landlord says no. Practical advice for renters.",
    href: "/guides/asking-landlord-balcony-solar",
  },
  {
    emoji: "🔧",
    title: "Installation Guide",
    description:
      "Step-by-step installation walkthrough from unboxing to first output reading. Covers tools, safety, cable management, and common mistakes to avoid.",
    href: "/guides/how-to-install-balcony-solar",
  },
  {
    emoji: "🔌",
    title: "Balcony Solar Inverter Types Explained",
    description:
      "What micro-inverters do, why they beat string inverters for partial shade, the leading brands (Hoymiles, Deye, APsystems, Enphase), and what specs to look for.",
    href: "/guides/balcony-solar-inverter-types",
  },
];

export default function GuidesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Base"
        title="Balcony Solar Guides"
        subtitle="Everything you need to know about plug-in solar panels in the UK — from your first question to your first kilowatt-hour."
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <Breadcrumb crumbs={[{ label: "Guides" }]} />
        <p className="text-slate-600 text-lg mb-10 max-w-3xl">
          Whether you're a renter wondering if balcony solar is even possible in your flat, or a homeowner ready to
          install, these guides cover every angle. All content is UK-specific, regularly updated, and written without
          jargon.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-solar-400 hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-3">{guide.emoji}</div>
              <h2 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-solar-700 transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">{guide.description}</p>
              <div className="mt-4 text-sm font-medium text-solar-600 group-hover:text-solar-700 transition-colors">
                Read guide →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
