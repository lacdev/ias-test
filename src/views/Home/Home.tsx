import styles from './Home.module.scss'
import { useState, useEffect, ChangeEvent } from 'react'
import { getCharacters, getCharactersByPage } from '../../api/characters'
import { DataResponsePromise, CharactersDTO } from '../../types/api-data.types'
import Card from '../../components/Card/Card'
import { SearchInput } from '../../components/SearchInput/SearchInput'

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [characters, setCharacters] = useState<CharactersDTO[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [pageNumber, setPageNumber] = useState<number>(1) // No of pages
  const itemsPerPage = 4

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        const data = await getCharactersByPage()
        setCharacters(data)
      } catch (err) {
        console.error(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  console.log({ searchTerm })

  return (
    <div className={styles.homeContainer}>
      <div>
        <SearchInput
          onInputChange={handleSearch}
          value={searchTerm}
          type="search"
          id="search"
          name="search"
          placeholder="Search your character"
        />
      </div>
      {isLoading && !isError && <p>Loading Data...</p>}
      {!isLoading && isError && <p>There was an error. Try again later.</p>}
      {!isLoading && !isError && (
        <div>
          {characters.map((character: CharactersDTO) => (
            <Card key={character.name} character={character} />
          ))}
        </div>
      )}
    </div>
  )
}
export default Home

{
  /* {characters
        .filter((char) => {
          if (searchTerm === '') {
            return char
          } else if (
            char.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return char
          }
        })
        .map((char, index) => (
          <div className="box" key={index}>
            <p>{char.name}</p>
          </div>
        ))} */
}
