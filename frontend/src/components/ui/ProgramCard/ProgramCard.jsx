// src/components/ui/ProgramCard/ProgramCard.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
 
export function ProgramCard({ icon: Icon, title, description, href, color }) {
  return (
    <motion.article
      className="program-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="program-card__icon"
        style={{ background: `var(--color-primary-50)`, color: `var(--color-primary-500)` }}
      >
        <Icon size={28} strokeWidth={1.5} />
      </div>
 
      <h3 className="program-card__title">{title}</h3>
      <p className="program-card__desc">{description}</p>
 
      <Link to={href} className="program-card__link">
        Learn more
        <ArrowRight size={16} />
      </Link>
    </motion.article>
  );
}