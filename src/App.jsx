import axios from "axios";
import { useEffect } from "react";
import { GetRandomNumber } from "./Helps/Randon";
import { useState } from "react";
import Location from "./Components/Location";
import ResidentList from "./Components/ResidentList";


function App() {
  const randomDimension = GetRandomNumber(126)
const [locationInfo, setLocationInfo] = useState(null)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
    .then(({data}) => setLocationInfo(data))
    .catch((error) => console.log(error));
  
    
  }, []);
  

return (
  
  <main className="bg-lime-600">
  <Location  locationInfo={locationInfo} setLocationInfo={setLocationInfo}/>
  <ResidentList residents={locationInfo?.residents ?? []}/>
</main>
  );
}

export default App;
