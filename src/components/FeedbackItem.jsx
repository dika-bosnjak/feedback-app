import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

import Card from "./shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color='white'/>
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color='white'></FaEdit>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem