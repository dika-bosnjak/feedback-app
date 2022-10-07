import PropTypes from 'prop-types'

//Card component wraps the children in a div with the exact class
function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
  children: PropTypes.array
}

export default Card