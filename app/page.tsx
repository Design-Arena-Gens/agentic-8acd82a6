'use client'

import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [logs, setLogs] = useState<string[]>([])
  const logEndRef = useRef<HTMLDivElement>(null)

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [...prev, `[${timestamp}] ${message}`])
  }

  useEffect(() => {
    addLog('UI panel is now visible.')
    addLog('✅ Album Automation UI loaded.')
  }, [])

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  const handleStartProcessing = () => {
    addLog('Start button clicked. UI is working.')
    addLog('Processing initiated...')

    // Simulate processing steps
    setTimeout(() => {
      addLog('Analyzing album structure...')
    }, 500)

    setTimeout(() => {
      addLog('Processing images...')
    }, 1000)

    setTimeout(() => {
      addLog('Applying automation rules...')
    }, 1500)

    setTimeout(() => {
      addLog('✅ Processing complete!')
    }, 2000)
  }

  const handleClose = () => {
    addLog('Close button clicked.')
    addLog('Cleaning up resources...')
    setTimeout(() => {
      window.close()
    }, 500)
  }

  return (
    <div className="container">
      <div className="header">
        Album Automation UI
      </div>

      <div className="content">
        <div className="test-group">
          ✅ ScriptUI Loaded!
        </div>

        <div className="button-group">
          <button className="btn-primary" onClick={handleStartProcessing}>
            Start Processing
          </button>
          <button className="btn-secondary" onClick={handleClose}>
            Close
          </button>
        </div>

        <div className="log-panel">
          <div className="log-header">
            Log
          </div>
          <div className="log-content">
            {logs.map((log, index) => (
              <div key={index}>
                {log}
              </div>
            ))}
            <div ref={logEndRef} />
          </div>
        </div>
      </div>
    </div>
  )
}
