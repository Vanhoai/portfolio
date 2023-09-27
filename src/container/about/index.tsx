'use client'
import React, { useEffect, useState } from 'react'

const WS = new WebSocket('ws://localhost:8080/ws/123?v=1.0')

const AboutContainer: React.FC = () => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    WS.onopen = () => {
      console.log('WebSocket Client Connected')

      WS.send('Hello Server')
    }

    WS.onmessage = (e) => {
      console.log(`Server: ${e.data}`)
    }

    WS.onerror = (err) => {
      console.error('Socket encountered error: ', err.target, 'Closing socket')
      WS.close()
    }
  }, [])

  const sendMessage = () => {
    WS.send(value)
  }

  return (
    <div className="flex">
      <input
        placeholder="Enter here"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          border: '1px solid black',
          padding: '10px',
          borderRadius: '5px',
        }}
      />
      <button
        style={{
          border: '1px solid black',
          padding: '10px',
          borderRadius: '5px',
        }}
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  )
}

export default AboutContainer
