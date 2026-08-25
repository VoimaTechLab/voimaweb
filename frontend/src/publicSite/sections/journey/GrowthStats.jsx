import { motion } from "framer-motion";
import { useJourneyStats } from "../../hooks/useJourney";
import CountUp from "@/components/animations/CountUp";
import FadeStagger from "@/components/animations/FadeStagger";

export default function GrowthStats() {
  const stats = useJourneyStats();

  return (
    <section className="px-6 py-24 bg-white border-y-4 border-black">
      <div className="mx-auto max-w-7xl">
        <FadeStagger className="grid gap-10 md:grid-cols-4" staggerSpeed="normal">
          {stats?.map((item, index) => (
            <motion.div 
              key={index}
              className="border-4 border-black bg-white p-8 shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(188,29,38,1)] sm:hover:shadow-[16px_16px_0px_rgba(188,29,38,1)]"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#BC1D26]">
                <CountUp
                  from={0}
                  to={parseStatValue(item)}
                  suffix={parseStatSuffix(item)}
                  prefix={parseStatPrefix(item)}
                  duration={2.5}
                />
              </div>

              {(item.label || item.title) && (
                <p className="mt-3 font-black uppercase text-sm tracking-[0.15em] text-black">
                  {item.label || item.title}
                </p>
              )}
            </motion.div>
          ))}
        </FadeStagger>
      </div>
    </section>
  );
}

function getStatRawString(stat) {
  if (!stat) return "";
  if (typeof stat === "string" || typeof stat === "number") return String(stat);
  return String(stat.value || stat.title || stat.number || "");
}

function parseStatValue(stat) {
  const str = getStatRawString(stat);
  if (!str) return 0;
  const match = str.match(/[\d,.]+/);
  if (!match) return 0;
  const num = parseFloat(match[0].replace(/,/g, ''));
  return isNaN(num) ? 0 : num;
}

function parseStatSuffix(stat) {
  const str = getStatRawString(stat);
  if (!str) return '';
  const match = str.match(/^[^\d]*[\d,.]+(.*)$/);
  return match ? match[1] : '';
}

function parseStatPrefix(stat) {
  const str = getStatRawString(stat);
  if (!str) return '';
  const match = str.match(/^([^\d]*)/);
  return match ? match[1] : '';
}