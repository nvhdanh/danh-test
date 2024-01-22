import { Button, Card, Stack, Typography } from '@mui/joy'
import { useState } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
function generateRandomNumber() {
  const min = 2 * 1000 * 1000 * 1000
  const max = 3 * 1000 * 1000 * 1000

  const randomFraction = Math.random()

  const randomNumber = min + Math.floor(randomFraction * (max - min + 1))

  return randomNumber
}
const BlockUI = () => {
  const [result, setResult] = useState(0)
  const [calculating, setCalculating] = useState(false)
  const [counter, setCounter] = useState(0)

  const performHeavyCalculation = () => {
    // Simulate a heavy calculation
    let sum = 0
    for (let i = 0; i < generateRandomNumber(); i++) {
      sum += i
    }
    setResult(sum)
    setCalculating(false)
  }

  return (
    <Card>
      <Typography fontWeight={'bold'}>Normal Implementation</Typography>
      <Typography
        fontSize={'xs'}
        startDecorator={<InfoOutlinedIcon fontSize="small" />}
      >
        Clicking on "Perform Heavy Calculation" will result in the entire user
        interface being temporarily inaccessible. To observe this, you can click
        on "Inc Counter." The "Inc Counter" event will only be triggered once
        the heavy calculation is completed.
      </Typography>
      <Stack direction={'row'} alignItems={'center'} columnGap={3}>
        <Button
          onClick={() => {
            setCalculating(true)

            performHeavyCalculation()
          }}
          disabled={calculating}
        >
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

export default BlockUI
