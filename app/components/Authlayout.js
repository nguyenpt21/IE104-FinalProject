'use client'
import { motion, AnimatePresence } from 'framer-motion'

export default function AuthLayout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
