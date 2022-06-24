import styles from './Card.module.scss'
import { CardProps } from './Card.types'

const Card = ({ character }: CardProps) => {
  return <div>{character.name}</div>
}

export default Card
