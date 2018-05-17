import React from 'react'
import { ListGroup } from 'reactstrap';
import Character from './Character'

const ListCharacters = ({characters}) => <ListGroup>
	{ characters.map( (character, index) => <Character key={index} {...character} />) }
</ListGroup>

export default ListCharacters
