import { PokemonType, WeaknessType } from "../types/types"

const { readFileSync } = require('fs') 

export const readDatabasePokemon = () => {
    return JSON.parse(readFileSync(__dirname + "/../../db.json", 'utf8'))
}

export const findPokemon = (data: any, namePokemon: any) => {
    const pokemonDB: PokemonType | undefined = data.pokemon.find((pokemon: any) => pokemon.name === namePokemon )
    return pokemonDB
}

export const findWeakness = (data: any, pokemon: PokemonType) => {
    const weaknesses: string[] = []
    
    data.pokemonWeakness.forEach((weakness: WeaknessType) => {
        if (pokemon.types.includes(weakness.types)) {
            weaknesses.push(...weakness.weaknesses)
        }
    })

    return weaknesses
}

