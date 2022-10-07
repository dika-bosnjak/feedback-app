import spinner from '../assets/spinner.gif'

//Spinner component shows the spinner (used when the render of other page is not ready for displaying)
function Spinner() {
  return (
    <img src={spinner} alt="Loading..." style={{width: '100px', margin: 'auto', display: 'block'}}/>
  )
}

export default Spinner