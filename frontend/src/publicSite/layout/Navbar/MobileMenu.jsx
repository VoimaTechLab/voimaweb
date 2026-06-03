import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
 
const menuVariants = {
  hidden:  { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', damping: 28, stiffness: 280 } },
  exit:    { x: '100%', transition: { duration: 0.25, ease: 'easeIn' } },
};
 
const itemVariants = {
  hidden:  { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.05 + i * 0.07, duration: 0.4 }
  }),
};
 
export default function MobileMenu({ onClose, navigation }) {
  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
 
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="mobile-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />
 
      {/* Drawer */}
      <motion.nav
        className="mobile-menu"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu__header">
          <img src="/assets/voima-logo.svg" alt="Voima" height="32" />
          <button onClick={onClose} aria-label="Close menu" className="mobile-menu__close">
            <X size={22} />
          </button>
        </div>
 
        <div className="mobile-menu__links">
          {navigation.primary.map((item, i) => (
            <motion.div key={item.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
              <NavLink
                to={item.href}
                className="mobile-menu__link"
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </div>
 
        <div className="mobile-menu__footer">
          <NavLink to="/get-involved" className="btn btn--primary btn--full" onClick={onClose}>
            Get Involved
          </NavLink>
        </div>
      </motion.nav>
    </>
  );
}