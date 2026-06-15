import {useNavigate} from "react-router-dom";
const GrdidBox = ({ data }: { data: any }) => {
  const navigate = useNavigate();
  
  const gridNavigate = (data: any) => {
    navigate(`/convert`, { state:  data  });
  }
  return (
    <div key={data.id}
              className="aspect-square bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-300/30 rounded-2xl flex items-center justify-center hover:border-cyan-300/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              style={{
                width: 'calc(20% - 16px)', // 5 columns with 16px gap adjustment
                minWidth: '200px', // Minimum width for very small screens
                maxWidth: '250px', // Maximum width for very large screens
              }}
            >
              <div className="flex flex-col items-center gap-5 cursor-pointer" onClick={() => gridNavigate(data)}>
              <div className="flex items-center gap-2 text-cyan-500">
              <img src={data?.image1} alt={data?.tool} className="w-25 h-25" />
                <span>to</span>
              <img src={data?.image2} alt={data?.tool} className="w-25 h-25" />
              </div>
              <p>{data?.tool}</p>
              <p className="text-sm text-gray-400 text-center mx-3">{data?.description}</p>
              </div>
            </div>
  )
}

export default GrdidBox