import { Button, Card, Stack, Typography } from '@mui/joy'
import { useEffect, useRef, useState } from 'react'

const NonBlockUI = () => {
  const [result, setResult] = useState(0)
  const [calculating, setCalculating] = useState(false)
  const [counter, setCounter] = useState(0)

  const worker = useRef<Worker | null>(null)

  useEffect(() => {
    if (typeof Worker !== 'undefined') {
      const url = new URL('./worker.js', import.meta.url)
      worker.current = new Worker(url)

      worker.current.addEventListener('message', (e: MessageEvent<number>) => {
        setResult(e.data)
        setCalculating(false)
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

  const calculate = () => {
    worker.current?.postMessage('calculate')
    setCalculating(true)
  }

  return (
    <Card>
      <Typography>Web worker</Typography>
      <Stack direction={'row'} alignItems={'center'} columnGap={3}>
        <Button onClick={calculate} disabled={calculating}>
          Perform Heavy Calculation
        </Button>
        <Typography>
          Result: {calculating ? 'Calculating...' : result}
        </Typography>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} columnGap={3}>
        <Button onClick={() => setCounter(counter + 1)}>Inc Counter</Button>
        <Typography>{counter}</Typography>
      </Stack>
    </Card>
  )
}

export default NonBlockUI
