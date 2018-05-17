import React, { Component } from 'react'
import { Card, Row, Col, CardTitle, CardBody, ListGroup } from 'reactstrap';
import Character from './Character'

const ListCharacters = ({characters}) => <ListGroup>
	{ characters.map( (character, index) => <Character key={index} {...character} />) }
</ListGroup>

export default ListCharacters
