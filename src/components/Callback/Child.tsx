import React from "react"

type ChildProps = {
  onSend: (value: string) => void
}

const Child: React.FC<ChildProps> = ({ onSend }) => {
  const message = "Hello Rohit"

  const handleClick = () => {
    onSend(message)
  }

  return (
    <div className="callback-child">
      <button className="primary-btn callback-button" onClick={handleClick}>
        Send String
      </button>
    </div>
  )
}

export default Child
