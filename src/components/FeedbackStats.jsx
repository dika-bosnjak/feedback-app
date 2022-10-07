import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


//FeedbackStats component displays number of reviews and average rating
function FeedbackStats() {
  const {feedbacks} = useContext(FeedbackContext);
  //Calculate ratings average
  let average = feedbacks.reduce((acc, { rating }) => acc + rating, 0) / feedbacks.length;
  average = average.toFixed(2).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
        <h4>{feedbacks.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats