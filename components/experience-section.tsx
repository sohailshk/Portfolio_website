"use client"
import { Timeline } from "@/components/ui/timeline"

export default function ExperienceSection() {
  const data = [
    {
      title: "December 2024 – Feb 25",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Quant Developer Intern At Arthalabs - • Engineered a Python backtesting engine (5 000+ LoC) from the ground up, architecting strategy loops, order
management PnL modules for 24 systematic strategies—boosting revenue by 50%.

          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="\arthalab.png"
              alt="project screenshot"
              width={300}
              height={200}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November 2024 – Dec 24",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Quant Developer Intern at Pi42 - Developed and productionized three algorithmic trading strategies, including an XG Boost-based "buy-the-dip" model on
Bitcoin using 10+ technical indicators.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Key achievements: Integrated strategies with the PI42 REST API to enable live execution, achieving a 30% simulated return on investment
(ROI).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/pi42.png"
              alt="project screenshot"
              width={300}
              height={200}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2024 - November 2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Software Development Intern at SocixMedia - Collaborated with real estate clients to architect Next.js front-ends and Flask back-ends, enhancing UI/UX and boosting
operational efficiency by 20%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/socixmedia.png"
              alt="project screenshot"
              width={300}
              height={200}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  )
}
