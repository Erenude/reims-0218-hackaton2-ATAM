import React, { Component } from 'react'

const sentences = [
    'Félicitation, vous êtes fait l\'un pour l\'autre',
    'L\'empire vous félicite et a hâte d\'assister à votre mariage',
    'Bravo, vous allez mettre au monde plein de beau bébé',
    'Vous en avez rêvé, l\'empire l\'a fait : vous êtes unis pour la vie',
    'Cette relation sera la plus toride de toute la galaxie',
    'Le feu de la passion brûle en vous',
    'Votre amour sera plus fort que la force',
    'Votre amour viendra à bout du côté obscur, enfin pas trop quand même !',
    'Cet amour sera même plus fort que l\'amour entre Dorian et Khalid',
    'Ca va envoyer dans le lit !',
		'Votre amour sera plus fort que l\'amour entre Thomas et Flash',
    ''
]

const getRandomSentence = () => {
  return sentences[Math.floor(Math.random() * (sentences.length - 1))]
}

class RandomSentence extends Component {
  constructor() {
    super()
    this.state = {
      chosenSentence: ''
    }
  }

componentWillReceiveProps (props) {
  if (props.displaySentence) {
    this.setState ({
      chosenSentence: getRandomSentence()
    })
  }
}

  render() {
    return (
      <div>
        <h2 className="mt-5 mb-5">
          {this.state.chosenSentence}
        </h2>
      </div>
    )}
}

export default RandomSentence
