import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ComponenteDiseño = () => {

    const [pokemon, setPokemon] = useState({});
    const [height, setHeight] = useState(0);
    const [isDecimeters, setIsDecimeters] = useState(true);
    const [weight, setWeight] = useState(0);
    const [isHectograms, setIsHectograms] = useState(true);
 


    useEffect(() => {
        const id = Math.floor(Math.random() * 600) + 1 //numeros random en un rango
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => {
                setPokemon(res.data);
                setHeight(res.data.height)
                setWeight(res.data.weight)
            });
    }, []
    );
    console.log(pokemon)







    const getPokemon = () =>{
    const id = Math.floor(Math.random() * 600)+1;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) =>{
                setPokemon(res.data);
                setHeight(res.data.height)
                setWeight(res.data.weight)
                            }); 
                        }; 
  



    return (

        <div className='contenedor-padre'>
        <div className='contenedorPokedexRoja'>
        <div className='App Pokemon-card'>
            <h1>{pokemon.name}</h1>
            <img className='img' src={pokemon?.sprites?.other.home.front_default} alt="" />
          <div className='cracteristicas'>
            <p className='data type'><strong>Type:</strong> {pokemon.types?.[0].type.name}</p>
            <p className='data hp'> <strong> {pokemon.stats?.[0].stat.name} </strong> {pokemon.stats?.[0].base_stat} </p>
            <p className='data attack'> <strong>{pokemon.stats?.[1].stat.name}</strong> {pokemon.stats?.[1].base_stat} </p>
            <p className='data defense'> <strong>{pokemon.stats?.[2].stat.name} </strong>{pokemon.stats?.[2].base_stat} </p>
            <p className='data attakSpecial'><strong> {pokemon.stats?.[3].stat.name} </strong>{pokemon.stats?.[3].base_stat} </p>
            <p className='data defenseSpecial'> <strong>{pokemon.stats?.[4].stat.name} </strong>{pokemon.stats?.[4].base_stat} </p>
            <p className='data speed'><strong> {pokemon.stats?.[5].stat.name}</strong> {pokemon.stats?.[5].base_stat} </p>
            <span className='span-azul' onClick={getPokemon}></span>
            <span className='span-verde' onClick={getPokemon}></span>
            </div>
            
              <button><img className='pokeball' src="https://w7.pngwing.com/pngs/324/645/png-transparent-pokemon-go-gotcha-video-game-jynx-pokeball-orange-pokemon-technology.png" alt="" /></button>
        </div>
        </div>
        </div>
    );
};

export default ComponenteDiseño;