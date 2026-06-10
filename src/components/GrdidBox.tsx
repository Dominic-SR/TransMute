import React from 'react'
import { FaFilePdf } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa6";
const GrdidBox = ({ num }: { num: number }) => {
  return (
    <div key={num}
              className="aspect-square bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-300/30 rounded-2xl flex items-center justify-center hover:border-cyan-300/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              style={{
                width: 'calc(20% - 16px)', // 5 columns with 16px gap adjustment
                minWidth: '200px', // Minimum width for very small screens
                maxWidth: '250px', // Maximum width for very large screens
              }}
            >
              <FaFilePdf />
              <FaFileImage />

            </div>
  )
}

export default GrdidBox