import React, { Component } from 'react'
import { Card, Row, Col, CardTitle, CardBody } from 'reactstrap';

const characterLeft = {
    "id": 2,
    "name": "C-3PO",
    "height": 1.71,
    "mass": 75,
    "gender": "male",
    "homeworld": "tatooine",
    "species": "droid",
    "wiki": "http://starwars.wikia.com/wiki/C-3PO",
    "image": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "dateCreated": -32,
    "dateDestroyed": 3,
    "destroyedLocation": "bespin, rebuilt shortly after",
    "creator": "Anakin Skywalker",
    "manufacturer": "Cybot Galactica",
    "model": "3PO unit",
    "class": "Protocol droid",
    "sensorColor": "yellow",
    "platingColor": "gray, later primarily golden",
    "equipment": "TranLang III communication module",
    "affiliations": [
        "Skywalker family",
        "Confederacy of Independent Systems",
        "Royal House of Naboo",
        "Galactic Republic",
        "House of Organa",
        "Galactic Empire",
        "Alliance to Restore the Republic",
        "Massassi Group",
        "Leia Organa's team",
        "Pathfinders",
        "Endor strike team",
        "Bright Tree tribe",
        "New Republic",
        "Resistance",
        "Resistance spy droid network"
    ],
    "skinColor": "gold",
    "eyeColor": "yellow",
    "born": -112,
    "formerAffiliations": []
}

class Character extends Component {
    render() {
        return <Card>
        <CardBody> <img src = { characterLeft.image } alt = { characterLeft.name }
        className = "img-fluid imgCharacter"/> </CardBody> </Card >
    }
}

export default Character