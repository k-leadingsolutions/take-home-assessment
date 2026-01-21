import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Small accessible ticker component that cycles a list of assets
export default function Ticker({ assets = [], prefersReducedMotion = false, interval = 3000, ariaLabel = 'Top holdings ticker. Focus to pause.' }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const visible = useMemo(() => (Array.isArray(assets) ? assets.slice(0, 5) : []), [assets]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    if (!visible || visible.length <= 1) return undefined;
    if (paused) return undefined;
    const id = setInterval(() => setIndex(i => (i + 1) % visible.length), interval);
    return () => clearInterval(id);
  }, [visible, prefersReducedMotion, paused, interval]);

  if (!visible || visible.length === 0) return null;

  const current = visible[index % visible.length] || {};
  const sign = (current.change ?? 0) >= 0;

  return (
    <div
      className="flex-1 min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      aria-label={ariaLabel}
    >
      <div className="w-40 h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-start gap-2"
          >
            <span className="text-xs font-semibold text-gray-700 truncate" style={{ maxWidth: 120 }}>{current.assetId}</span>
            <span className={`text-xs font-medium ${sign ? 'text-green-600' : 'text-red-600'}`}>{sign ? '▲' : '▼'} {typeof current.change === 'number' ? `$${current.change.toFixed(2)}` : 'N/A'}</span>
            <span className="text-xs text-gray-400">{typeof current.changePercent === 'number' ? `${current.changePercent.toFixed(2)}%` : ''}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
