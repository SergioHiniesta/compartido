import React, { useState, useEffect } from 'react'

const Card = () => {
  const [pokemonId, setPokemonId] = useState(1)
  const [infoPokemon, setInfoPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((pokemonInfo) => {
        let types = ''
        if (pokemonInfo?.types.length > 1) {
          types = pokemonInfo?.types[0]?.type?.name + ' / ' + pokemonInfo.types[1].type.name
        } else {
          types = pokemonInfo.types[0].type.name
        }
        setInfoPokemon({
          num: pokemonId,
          name: pokemonInfo?.name?.charAt(0)?.toUpperCase() + pokemonInfo.name?.slice(1),
          type: types,
          src: pokemonInfo.sprites.versions['generation-v']['black-white'].animated
            .front_default
        })
      })
  }, [pokemonId])

  const nextPokemon = () => {
    setPokemonId(pokemonId + 1)
  }
  const prevPokemon = () => {
    if (pokemonId >= 1) {
      setPokemonId(pokemonId - 1)
    }
  }
  const handleInputChange = (event) => {
    setPokemonId(Number(event.target.value))
  }
  return (
    <div className="card p-3" style={{ width: '25rem' }}>
      <input
        type="number"
        id="typeNumber"
        className="form-control"
        min="1"
        max="1200"
        value={pokemonId}
        onChange={handleInputChange}
      />
      <div>
        <img
          src={infoPokemon.src}
          className="card-img-top"
          alt={infoPokemon.name}
          style={{ width: '100%', height: '350px' }}
        ></img>
      </div>
      <h2>{infoPokemon.name}</h2>
      <h5>Type: {infoPokemon.type}</h5>
      <button className="form-control mt-2" onClick={prevPokemon}>
        Previous
      </button>
      <button className="form-control mt-2" onClick={nextPokemon}>
        Next
      </button>
    </div>
  )
}

export default Card
