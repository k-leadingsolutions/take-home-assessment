import React from 'react'

// Small accessible Tooltip wrapper
// Usage: <Tooltip content="Helpful text" id="tooltip-1"><button>Hover me</button></Tooltip>
export default function Tooltip({ id, content, children }) {
  return (
    <div className="relative inline-block group" aria-describedby={id}>
      {/* child should be focusable for keyboard users to see tooltip */}
      {children}
      <div
        id={id}
        role="tooltip"
        className="pointer-events-none absolute z-10 bottom-full mb-2 hidden group-hover:block group-focus:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap"
      >
        {content}
      </div>
    </div>
  )
}
