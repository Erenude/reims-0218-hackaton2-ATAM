import React from 'react'

const Character = ({ name, image }) => <div className="justify-content-center">
        <img src = { image } alt = { name } className = "img-fluid imgCharacter"/>
    </div>

export default Character
