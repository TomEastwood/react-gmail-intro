import backArrow from '/src/assets/icons/back-arrow.png'
import rateStarButton from '/src/assets/icons/rate-star-button.png'
import rubbishButton from '/src/assets/icons/rubbish-bin-delete-button.png'

function ActionIcons () {
    return (
        <>
        <div className="email-action-icons">
              <ul>
                <li>
                  <img className="icon" src={backArrow} alt="reply button" />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rateStarButton}
                    alt="star button"
                  />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                  />
                </li>
              </ul>
            </div>
        </>
    )
}

export default ActionIcons