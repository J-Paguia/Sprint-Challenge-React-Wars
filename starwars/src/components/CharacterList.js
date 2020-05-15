import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'

function CharacterList() {

  const [chars, setChars] = useState([])

  useEffect (() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results)
        setChars(response.data.results)
      })
      .catch(error => 
        console.log(error))
  })
  return (
    <div>
      {chars.map(char => {
        return (
          <CharacterCard 
            gender={char.gender}
            key={char.id} 
            image={char.image}
            name={char.name} 
            species={char.species} 
            status={char.status} 
           
            
          />

          
        )
      })}

    </div>
  )
}

export default CharacterList