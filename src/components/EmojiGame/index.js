/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import './index.css'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, list1: [], isamma: true, emojisList: [], Top: 0}

  shuffledEmojisList = id => {
    const {list1} = this.state
    const {emojisList} = this.props

    if (list1.length === 11) {
      this.setState(prevState => ({
        isamma: !prevState.isamma,
        score: prevState.score,
      }))
    } else if (list1.includes(id)) {
      this.setState(prevState => ({
        isamma: !prevState.isamma,
        score: prevState.score,
      }))
    }

    if (!list1.includes(id)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        list1: [...prevState.list1, id],
      }))
    }
    return emojisList.sort(() => Math.random() - 0.5)
  }

  Back12 = user123 => {
    const {emojisList} = this.props
    const {Top} = this.state

    this.setState(prevState => ({
      emojisList: [...prevState.emojisList, emojisList],
      isamma: !prevState.isamma,
      score: 0,
      list1: [],
    }))
    if (user123 >= Top) {
      this.setState({Top: user123})
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, isamma, Top, list1} = this.state
    console.log(list1.length)
    console.log(score)
    return (
      <>
        <NavBar user={score} Top1={Top} checking={isamma} />
        <div className="GameContainer">
          {isamma ? (
            <ul className="emojiContainer">
              {emojisList.map(each => (
                <EmojiCard
                  user={each}
                  key={each.id}
                  shuffledEmojisList={this.shuffledEmojisList}
                />
              ))}
            </ul>
          ) : (
            <ul>
              <WinOrLoseCard user123={score} Back12={this.Back12} />
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
