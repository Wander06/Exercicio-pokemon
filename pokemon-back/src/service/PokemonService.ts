import { findPokemon, findWeakness, readDatabasePokemon, uniqueWeaknesses } from '../repository/repository'
import { PokemonType } from '../types/types'

export const getPokemonWeakness = (pokemon: any): PokemonType | string => {
    const database = readDatabasePokemon()
    const pokemonName = pokemon
    const pokemonUser: PokemonType | undefined = findPokemon(database, pokemonName)

    if (!pokemonUser) {
        return 'Pokemon não encontrado'
    }
    
    const weaknessFindDB = findWeakness(database, pokemonUser)

    if (weaknessFindDB) {
        pokemonUser.weakness = [... new Set (weaknessFindDB)].sort()
    } else {
        pokemonUser.weakness = ['Nenhuma fraqueza encontrada']
    }

    return pokemonUser
}
