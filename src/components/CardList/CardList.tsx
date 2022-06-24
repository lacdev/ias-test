import styles from './CardList.module.scss'
import { CardListProps } from './CardList.types'

const CardList = ({ children }: CardListProps) => {
  return <div className={styles.charactersContainer}>{children}</div>
}

export default CardList
