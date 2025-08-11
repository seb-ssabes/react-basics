import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function Star(props) {

  let starIcon = props.isFilled ? starFilled : starEmpty
  let favoriteLabel = props.isFilled ? "Remove from favorites" : "Add to favorites"
  let altStarIcon = props.isFilled ? "filled star icon" : "empty star icon"

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={favoriteLabel}
      className="favorite-button"
      >
      <img
          src={starIcon}
          alt={altStarIcon}
          className="favorite"
      />
    </button>
  )
}
