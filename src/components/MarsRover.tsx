import React from 'react'

const MarsRover : React.FC = () => {

    const [rover, setRover] = React.useState({
        x: 0,
        y: 0,
        direction: 'N'
    })


  return (
    <div>MarsRover</div>
  )
}

export default MarsRover