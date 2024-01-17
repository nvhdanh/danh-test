import { useEffect, useRef, useState } from 'react'

const NonBlockUI = () => {
  const [result, setResult] = useState(0)
  const worker = useRef<Worker | null>(null)

  useEffect(() => {
    if (typeof Worker !== 'undefined') {
      const url = new URL('./worker.js', import.meta.url)
      worker.current = new Worker(url)

      worker.current.addEventListener('message', (e: MessageEvent<number>) => {
        setResult(e.data)
      })
    } else {
      // Web Workers are not supported, handle it accordingly
      console.error('Web Workers are not supported in this browser.')
    }

    // Cleanup on component unmount
    return () => {
      if (worker.current) {
        worker.current.terminate()
      }
    }
  }, [])

  return (
    <div>
      <button onClick={() => worker.current?.postMessage('hello')}>
        Perform Heavy Calculation
      </button>
      <div>Result: {result}</div>
      <button onClick={() => console.log(1)}>Click</button>
    </div>
  )
}

export default NonBlockUI
