import 'card.css'
import { Children } from 'react'

const Card = (props) => {
  return (
	<article className='card'>
	 {props.children}
	</article>
  )
}

export default Card