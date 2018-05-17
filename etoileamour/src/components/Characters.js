import React, { Component } from 'react'

class Characters extends Component {

    constructor() {
        super()
        this.state = {
            loading: true,
            characters: {
                name: ''
            }
        }
    }
    render() {
        return <div>
            { this.state.loading && <p>Loading</p> }
            <p>Character: {this.state.characters.name}</p>
            </div>
    }

    componentDidMount() {
        console.log('characters did mount')
        const url = 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json'
        fetch(url)
        .then(res => res.json())
        .then(characters => {
            characters.map(character => console.log(character)
        )})
    }
}

export default Characters
