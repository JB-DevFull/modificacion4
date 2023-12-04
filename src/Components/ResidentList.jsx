import ResidentCard from "./ResidentCard"



const ResidentList = ({residents}) => {

    return (
    <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)]">
        {
      residents.map((resident)=><ResidentCard
      key={resident} residentURL={resident}/>)
        }
      </section>
    )  
}

export default ResidentList
