import DataDrivers from '../components/DataDrivers'

function ListDrivers ({ data, givenName }) {
  return (
    <div>
      <h1>{givenName}</h1>
      <ul  className="lista">
        {data/*?.slice(0,9)*/.map((givenName) => <DataDrivers data={givenName}/>)}
      </ul>
    </div>
  )
}

export default ListDrivers;