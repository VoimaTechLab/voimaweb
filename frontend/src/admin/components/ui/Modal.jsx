import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children, width = "max-w-lg" }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-neutral-900/30 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`w-full ${width} rounded-2xl bg-white shadow-xl flex flex-col max-h-[90vh]`}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 flex-shrink-0">
              <h3 className="font-semibold text-neutral-900">{title}</h3>
              <button onClick={onClose} className="rounded-lg p-1 text-neutral-400 hover:bg-neutral-100">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-y-auto p-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}