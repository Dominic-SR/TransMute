import React from 'react'

const GrdidBox = ({ num }: { num: number }) => {
  return (
    <div key={num}
              className="aspect-square bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-300/30 rounded-2xl flex items-center justify-center hover:border-cyan-300/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              style={{
                width: 'calc(20% - 16px)', // 5 columns with 16px gap adjustment
                minWidth: '100px', // Minimum width for very small screens
                maxWidth: '150px', // Maximum width for very large screens
              }}
            >
              <span className="text-cyan-300 font-semibold text-lg">{num}</span>
              <i>Icon</i>
            </div>
  )
}

export default GrdidBox