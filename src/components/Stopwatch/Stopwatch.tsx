import React, { useState, useEffect, useRef } from 'react';
type StopwatchProps = {
  note?: string
  variant?: string
}

const Stopwatch: React.FC<StopwatchProps> = ({ note = 'Ready to go', variant = 'primary' }) => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleStart = () => {
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
    setTime((prevTime) => prevTime + 1)
    }, 1000);
  }

  const handleStop = () => {
    setIsRunning(false)
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        // intervalRef.current = null;
    }   
  }
    const handleReset = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            setTime(0);
            setIsRunning(false);
        }
    }
  
        const formatTime = (seconds: number) => {
            const minutes = Math.floor(seconds / 60)
            const hr = Math.floor(minutes / 60)

            return `${hr.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
        }

  return (
    <div className={`stopwatch-card stopwatch-${variant}`}>
      <div className="stopwatch-header">
        <div>
          <h2>Stopwatch</h2>
          <p className="stopwatch-note">{note}</p>
        </div>
        <span className="status-chip">{isRunning ? 'Running' : 'Paused'}</span>
      </div>

      <div className="timer-display">{formatTime(time)}</div>

      <div className="timer-buttons">
        <button className="primary-btn" onClick={handleStart}>
          Start
        </button>
        <button className="secondary-btn" onClick={handleStop}>
          Stop
        </button>
        <button  className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Stopwatch;
