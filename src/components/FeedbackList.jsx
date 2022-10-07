import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import Spinner from './shared/Spinner'

import FeedbackContext from '../context/FeedbackContext'

//FeedbackList component displays message when there is no feedbacks and displays list of feedback items if they exist
function FeedbackList() {
  const {feedbacks, isLoading} = useContext(FeedbackContext)
   if((!feedbacks || feedbacks.length ===0) && !isLoading) {
    return <p>No Feedback Yet</p>
   }
   return isLoading ? <Spinner /> : (
    <div className="feedback-list">
      {
      //AnimatePresence and motion are used from framer motion to fade in and out (adding and deleting feedbacks)
      }
      <AnimatePresence>
          {feedbacks.map((item) => (
              <motion.div 
                    key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                >
              <FeedbackItem key={item.id} item={item} />
              </motion.div>
          ))}
        </AnimatePresence>
    </div>
   )

}

export default FeedbackList