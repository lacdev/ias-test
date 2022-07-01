import styles from './Home.module.scss'
import { useState, useEffect, ChangeEvent } from 'react'
import { getCharacters, getCharactersByPage } from '../../api/characters'
import { DataResponsePromise, CharactersDTO } from '../../types/api-data.types'
import Card from '../../components/Card/Card'
import { SearchInput } from '../../components/SearchInput/SearchInput'
import { Button } from '../../components/Button/Button'
import LoadingMessage from '../../components/LoadingMessage/LoadingMessage'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import CardList from '../../components/CardList/CardList'
import { MainContainer } from '../../components/MainContainer/MainContainer'

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [characters, setCharacters] = useState<CharactersDTO[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

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

  return (
    <div className={styles.homeContainer}>
      <div className={styles.inputContainer}>
        <SearchInput
          onInputChange={setSearchTerm}
          value={searchTerm}
          type="search"
          id="search"
          name="search"
          placeholder="Search your character"
        />
      </div>

      <MainContainer>
        {isLoading && !isError && <LoadingMessage text="Loading Data..." />}
        {!isLoading && isError && (
          <ErrorMessage text="There was an error. Try again later." />
        )}
        {!isLoading && !isError && characters.length && (
          <CardList>
            {characters
              .filter((char) =>
                searchTerm ? char.name.toLowerCase().includes(searchTerm) : char
              )
              .map((char) => (
                <Card character={char} key={char.name} />
              ))}
          </CardList>
        )}
      </MainContainer>
    </div>
  )
}

export default Home
