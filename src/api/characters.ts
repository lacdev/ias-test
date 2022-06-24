import { API_BASE_URL } from '../constants/constants'
import { CharactersDTO } from '../types/api-data.types'

export const getCharacters = async () => {
  const response = await fetch(API_BASE_URL)
  const data = await response.json()
  return data
}

export const getCharactersByPage = async () => {
  let nextPage = `${API_BASE_URL}`

  let characters: CharactersDTO[] = []

  while (nextPage) {
    const response = await fetch(nextPage)
    const { next, results } = await response.json()

    nextPage = next
    characters = [...characters, ...results]
  }

  return characters
}

export const getCharactersByName = async (name: string) => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${name}`)
  const data = await response.json()
  return data.results
}
