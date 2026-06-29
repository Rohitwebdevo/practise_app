import React, { useState } from "react"
import Child from "./Child"

const Parent: React.FC = () => {
  const [data, setData] = useState("")

  const handleCallback = (message: string) => {
    setData(`OMG ${message}`)
  }

  return (
    <div className="callback-shell">
      <div className="callback-card">
        <h1>Callback Example</h1>
        <p className="callback-text">
          The parent passes a callback into the child component. When the child
          triggers it, the parent updates its state.
        </p>

        <Child onSend={handleCallback} />

        <div className="callback-output">
          <span className="callback-label">Child returned:</span>
          <strong>{data || "No message yet"}</strong>
        </div>
      </div>
    </div>
  )
}

export default Parent
