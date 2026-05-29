import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
 
export function TeamCard({ name, role, image, linkedIn }) {
  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="team-card__image-wrapper">
        <img
          src={image}
          alt={`${name}, ${role}`}
          className="team-card__image"
          loading="lazy"
        />
      </div>
 
      <div className="team-card__body">
        <p className="team-card__name">{name}</p>
        <p className="team-card__role">{role}</p>
 
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="team-card__social"
            aria-label={`${name} on LinkedIn`}
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}