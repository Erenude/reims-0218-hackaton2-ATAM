import React from 'react'
import { ListGroup } from 'reactstrap';
import Character from './Character'

const ListCharacters = ({characters}) => <ListGroup>
	{ <Character {...characters} /> }
</ListGroup>

export default ListCharacters
