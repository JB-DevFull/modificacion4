import axios from "axios"
import { useEffect , useState } from "react"



const ResidentCard = ({residentURL}) => {
  const [residentInfo, setResidentInfo] = useState(null)

const statusStyle = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-slate-500",
}


useEffect(() => {
  axios
  .get(residentURL)
  .then(({data})=>setResidentInfo(data))
  .catch((err)=>console.log(err))
}, []);

  return (
    <article>
<header>
  <img src={residentInfo?.image} alt="" />
<div className="flex items-center gap-2">
  <div className={`h-3 aspect-square rounded-full ${statusStyle[residentInfo?.status]}`}></div>
<span>{residentInfo?.status}</span>
</div>
</header>
<section>
  <h5>{residentInfo?.name}</h5>
  <ul>
    <li><span>Species</span>{residentInfo?.species}</li>
    <li><span>Origen</span>{residentInfo?.origin.name}</li>
    <li><span>Timmes appear</span>{residentInfo?.episode.length}</li>
  </ul>
</section>
    </article>
  )
}

export default ResidentCard
