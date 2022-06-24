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

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.toLowerCase()
    setSearchTerm(inputValue)
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.inputContainer}>
        <SearchInput
          onInputChange={handleSearch}
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
              .filter((char) => {
                if (!searchTerm) {
                  return char
                } else {
                  return char.name.toLowerCase().includes(searchTerm)
                }
              })
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

{
  /* <Button type="button" onClick={handleClick}>
          Search
        </Button> */
}

// const handleClick = () => {}

// {characters.map((char) => (
//   <Card character={char} key={char.name} />
// ))}

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

{
  /* {
          !isLoading &&
            !isError &&
            searchTerm &&
            characters
              .filter((character) => character.name.includes(searchTerm))
              .map((character) => {
                return <Card key={character.name} character={character} />
              })
          // {characters.filter((crypto) => {
          //   if (search == "" || crypto.name.toLowerCase().includes(search.toLowerCase())) {
          //       return (
          //           <li key={crypto.id}>
          //               <h3>{crypto.id}</h3>
          //               <p>{crypto.current_price}</p>
          //               <p>{crypto.symbol}</p>
          //               <img src={crypto.image} alt="image" />
          //           </li>
          //       );
          //   }
          //   return null;
        } */
}

// {searchTerm
//   ? characters
//       .filter((char) => {
//         if (searchTerm) {
//           return char.name
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase())
//         } else {
//           return char
//         }
//       })
//       .map((character: CharactersDTO) => (
//         <Card key={character.name} character={character} />
//       ))
//   : characters.map((character) => (
//       <CardList>
//         {filteredCharacters.map((character: CharactersDTO) => (
//           <Card key={character.name} character={character} />
//         ))}
//       </CardList>
//     ))}
