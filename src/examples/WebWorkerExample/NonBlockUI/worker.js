function generateRandomNumber() {
  const min = 2 * 1000 * 1000 * 1000
  const max = 3 * 1000 * 1000 * 1000

  const randomFraction = Math.random()

  const randomNumber = min + Math.floor(randomFraction * (max - min + 1))

  return randomNumber
}


this.addEventListener('message', (e) => {
  if (e.data === 'calculate') {
    const performHeavyCalculation = () => {
      // Simulate a heavy calculation
      let sum = 0
      for (let i = 0; i < generateRandomNumber(); i++) {
        sum += i
      }
      return sum
    }
    postMessage(performHeavyCalculation())
  }
})
