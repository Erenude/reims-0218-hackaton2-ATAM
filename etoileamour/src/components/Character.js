import React from 'react'
import { Card, CardBody } from 'reactstrap';

const Character = ({ name, image }) => <Card>
        <CardBody> <img src = { image } alt = { name } className = "img-fluid imgCharacter"/>
    </CardBody> </Card>

export default Character
