import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ title, children, className = '' }) => (
  <motion.div
    initial={{ y: 6, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6 ${className} transition`}
  >
    {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
    {children}
  </motion.div>
);

export const Stat = ({ label, value, delta, positive = true }) => (
  <div className="bg-white/60 dark:bg-gray-800/60 border border-gray-100 rounded-lg p-4 shadow-sm">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="mt-1 flex items-baseline gap-3">
      <div className="text-2xl font-extrabold text-gray-900">{value}</div>
      {delta !== undefined && (
        <div
          className={`text-sm font-medium px-2 py-1 rounded-full ${
            positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {positive ? '+' : ''}{delta}%
        </div>
      )}
    </div>
  </div>
);

export default Card;
