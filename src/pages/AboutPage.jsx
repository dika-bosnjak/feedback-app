import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

//AboutPage component consists of one card and some info
//This component uses Link from react-router-dom to redirect user without loading page again
function AboutPage() {
  return (
    <Card reverse={true}>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>Version 1.0.0</p>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage