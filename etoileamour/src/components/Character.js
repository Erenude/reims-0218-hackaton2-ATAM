import React, { Component } from 'react'
import { Card, Row, Col, CardTitle, CardBody } from 'reactstrap';

const Character = ({ name, image }) => <Card>
        <CardBody> <img src = { image } alt = { name } className = "img-fluid imgCharacter"/>
    </CardBody> </Card >

export default Character
