import { motion } from "framer-motion";

import Sdg3Img from "@/assets/SDG/Sustainable_Development_Goal_03GoodHealth.svg.webp";
import Sdg4Img from "@/assets/SDG/images.webp";
import Sdg9Img from "@/assets/SDG/Sustainable_Development_Goal_09Industry.svg.webp";
import Sdg10Img from "@/assets/SDG/Sustainable_Development_Goal_10ReducedInequalities.svg.webp";

const SDG_IMAGES = {
  "3": Sdg3Img,
  "03": Sdg3Img,
  "4": Sdg4Img,
  "04": Sdg4Img,
  "9": Sdg9Img,
  "09": Sdg9Img,
  "10": Sdg10Img,
};

export default function SDGCard({ number, title, description }) {
  const numKey = String(parseInt(number, 10) || number);
  const sdgImage = SDG_IMAGES[numKey] || SDG_IMAGES[number] || Sdg3Img;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="flex flex-col group h-full justify-between"
    >
      {/* Official SDG Tile Image */}
      <div
        className="
          relative aspect-square w-full
          border-4 border-black
          shadow-[8px_8px_0px_rgba(0,0,0,1)]
          transition-all duration-300
          group-hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]
          overflow-hidden select-none bg-white rounded-xl
        "
      >
        <img
          src={sdgImage}
          alt={title || `SDG ${number}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Narrative description card directly below */}
      <div
        className="
          mt-4 bg-white border-2 border-black p-5
          shadow-[4px_4px_0px_rgba(0,0,0,1)]
          flex-1 flex flex-col justify-between rounded-lg
        "
      >
        <p className="text-xs sm:text-sm font-semibold leading-relaxed text-black/80">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
