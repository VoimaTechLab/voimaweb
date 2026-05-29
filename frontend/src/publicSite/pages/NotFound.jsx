import { pageTransition } from '@/publicSite/motion/variants'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <motion.main {...pageTransition} style={{ paddingTop: 72, minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '6rem', color: 'var(--color-primary)', lineHeight: 1, marginBottom: '1rem' }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Page not found</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn--primary">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </motion.main>
  )
}