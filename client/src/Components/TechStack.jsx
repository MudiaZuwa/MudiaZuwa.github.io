import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCoreTechs, getSecondaryTechs } from "../lib/techData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const TechStack = () => {
  const [showMore, setShowMore] = useState(false);
  const coreTechs = getCoreTechs();
  const secondaryTechs = getSecondaryTechs();

  return (
    <div id="tech-stack" className="mt-10">
      <motion.h2
        className="text-white text-[28px] font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        My Toolbox
      </motion.h2>

      {/* Core Tech Stack */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {coreTechs.map((t, i) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-overlay/30 hover:bg-brand-agent/60 transition-colors border border-transparent hover:border-border"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <img src={t.img} alt={t.name} className="h-12 w-12" />
            <p className="text-sm text-muted">{t.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Section */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {secondaryTechs.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-overlay/30 hover:bg-brand-agent/60 transition-colors border border-transparent hover:border-border"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img src={t.img} alt={t.name} className="h-12 w-12" />
                <p className="text-sm text-muted">{t.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show More/Less Button */}
      {secondaryTechs.length > 0 && (
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 px-4 py-2 text-sm font-medium text-muted hover:text-white border border-border rounded-lg hover:border-brand-frontend/50 transition-colors flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{showMore ? "Show Less" : "Show More"}</span>
          <motion.span
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="material-symbols-outlined text-base"
          >
            expand_more
          </motion.span>
        </motion.button>
      )}
    </div>
  );
};

export default TechStack;
