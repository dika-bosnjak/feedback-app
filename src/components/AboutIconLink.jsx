import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

//AboutIconLink component renders the icon for about page with the corresponding link to the about page
function AboutIconLink() {
  return (
    <div className="about-link">
        <Link to={{
            pathname: "/about",
        }}>
        <FaQuestion size={30}></FaQuestion>
        </Link>
    </div>
  )
}

export default AboutIconLink