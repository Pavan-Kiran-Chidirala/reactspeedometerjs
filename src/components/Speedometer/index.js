// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed !== 200) {
        return {speed: prevState.speed + 10}
      }
      return {speed: prevState.speed}
    })
  }

  Decelerate = () => {
    this.setState(prevState => {
      if (prevState.speed !== 0) {
        return {speed: prevState.speed - 10}
      }
      return {speed: prevState.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-holder">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="SPEEDOMETER"
        />
        <h1 className="result">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="btn1" onClick={this.Accelerate}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.Decelerate}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
