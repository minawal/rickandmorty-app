import data from './rickandmortyapi.json'
import Card from './Card'


const characters = data.results

function App() {
  
  return (
    <>
      {characters.map(
        ({ name, species, image, id, gender, status, origin, location }) => (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            origin={origin.name}
            location={location.name}
          />
        )
      )}
    </>
  )
}

export default App




































/*
const characters= data.results


function App() {
  return (

    characters.map(character => 
    <Card 
    key={character.id} 
    name={character.name} 
    species={character.species} 
    image={character.image} 
    status={character.status} 
    gender={character.gender}
    origin={character.origin.name} 
    location={character.location.name} />
  )
  )
}

export default App;
*/