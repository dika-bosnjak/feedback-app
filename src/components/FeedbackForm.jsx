import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

//FeedbackForm component has default values (empty text input field, rating is 10 and button is disabled)
function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    //If there is a flag for edit, form is populated with edit item info (happens on every feedbackEdit change og state)
    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    //handleTextChange handles any modification of text input field
    //if there is no message entered, disable button
    //if the message is shorter than 10 characters, disable button and show the warning
    //else, hide the message and enable the send button
    const handleTextChange = ({ target: { value } }) => {
        if (value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (value.trim().length < 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(value)
    }

    //handleSubmit handles the form submit and creates a new feedback, 
    //if there is a flag for edit, it calls the update method, else it calls the add method
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            //set the form fields to the default values
            setBtnDisabled(true) 
            setRating(10) 
            setText('')
        }
    }
  //this component renders input form for feedback rating  
  return (
    <Card reverse={true}>
        <h2>How would you rate our service?</h2>
        <form onSubmit={handleSubmit}>
            <RatingSelect select={setRating} selected={rating} />
            <div className="input-group">
                <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm