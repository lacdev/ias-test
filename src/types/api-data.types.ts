export interface DataResponsePromise {
  count: number
  next: string | null
  previous: string | null
  results: CharactersDTO[]
}
export interface CharactersDTO {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films?: string[]
  species?: string[]
  vehicles?: string[]
  starships?: string[]
  created: string
  edited: Date
  url: string
}
