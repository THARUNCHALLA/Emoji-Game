import './index.css'

const EmojiCard = props => {
  const {user, shuffledEmojisList} = props
  const {emojiName, emojiUrl, id} = user

  const onclick = () => {
    shuffledEmojisList(id)
  }
  return (
    <li className="list123">
      <button type="button" onClick={onclick} className="listContainer">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
