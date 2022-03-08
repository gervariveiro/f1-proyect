import dataDrivers from "../components/dataDrivers";

function ListDrivers ({ data, name }) {
  return (
    <div>
      <h1>{name}</h1>
      <ul  className="lista">
        {data?.slice(0,9).map((name) => <dataDrivers data={name}/>)}
      </ul>
    </div>
  )
}

export default ListDrivers;