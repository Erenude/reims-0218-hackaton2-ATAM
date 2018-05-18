import React from 'react'
import Character from './Character'

const ListCharacters = ({characters}) => <div>
	{ <Character {...characters} /> }
</div>

export default ListCharacters
