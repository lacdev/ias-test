import styles from './Home.module.scss'
import { useState, useEffect } from 'react'
import { getCharacters, getCharactersByPage } from '../../api/characters'
import { DataResponsePromise, CharactersDTO } from '../../types/api-data.types'

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [characters, setCharacters] = useState<CharactersDTO[]>([])
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

  // console.log('People finally done and we have 82? ', characters)

  return (
    <div className={styles.homeContainer}>
      {isLoading && !isError && <p>Loading Data...</p>}
      {!isLoading && isError && <p>There was an error. Try again later.</p>}
      {!isLoading && !isError && (
        <div>
          {characters.map((person: CharactersDTO) => (
            <div key={person.name}>{person.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Home
